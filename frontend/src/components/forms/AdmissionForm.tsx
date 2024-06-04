// src/AdmissionForm.js
import React, { useState } from 'react';
import { Form, Button, Row, Col, Container, FloatingLabel, InputGroup, ListGroup, ToggleButton, ButtonGroup } from 'react-bootstrap';
import ProceduresTable from '../ProceduresTable';
// import PrecautionsTable from '../PrecautionsTable';
import NewPrecautionsTable from '../NewPrecautionsTable';
import IntakeOutputTable from '../IntakeOutputTable';
import FlowSheet from '../FlowSheet';
import AdmissionData from '../../types/AdmissionData';
import { setNestedState, setNestedStateArr } from '../../utils/utils';
import './AdmissionForm.css'
import ProgressNotes from '../ProgressNotes';

const AdmissionForm = () => {
    const [formData, setFormData] = useState(new AdmissionData());

    const setFormProp = (prop: string, value: any) => {
        setFormData(setNestedState(structuredClone(formData), prop, value));
    }

    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setFormProp(name, checked);
        }
        else {
            setFormProp(name, value);
        }

        // setFormData(prevState => setNestedState(structuredClone(prevState), name, value));
        // setFormData(prevState => setNestedState({ ...prevState }, name, value));
    };

    const handleRadioChange = (e: any) => {
        const { name, value } = e.currentTarget;

        setFormProp(name, value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        console.log(formData);

        if(!formData.discharge.mode || formData.discharge.mode?.length == 0) {
            setFormProp('invalidSubmit', true);
        }
        else {
            setFormProp('invalidSubmit', false);
        }
    };

    const toggleAllergiesNA = () => {
        if (formData.allergies.toLowerCase() !== 'n/a') {
            setFormProp('allergies', 'N/A');
        }
        else {
            setFormProp('allergies', '');
        }
    };

  return (
    <Container fluid>
            <Form onSubmit={handleSubmit} noValidate /* validated={true} onInvalid={()=>alert('invalid form data, reporting now')} */>
                <Button type='submit'>Submit</Button>
                <Row>
                    <Col xs={12}>
                        <Row className='mt-5'>
                            <h2 className='text-center'>ADMISSION AND DISCHARGE DAILY SHEET</h2>
                        </Row>
                    </Col>
                    <Col xs={6} className='mb-3'>
                        <h2>Patient</h2>
{/* Patient */}
                        <Form.Group /* as={Row} */ /* as={Row} messes up the floating label for some reason */ id='patientName'>
                            <Row>
                                <Col>
                                    <FloatingLabel id='floatingInput' label='First Name' className='mb-3'>
                                        <Form.Control type='text' name='patientFirstName' value={formData.patientFirstName} onChange={handleChange} placeholder='' required />
                                    </FloatingLabel>
                                </Col>

                                <Col>
                                    <FloatingLabel id='floatingInput' label='Last Name' className='mb-3'>
                                        <Form.Control type='text'  name='patientLastName' value={formData.patientLastName} onChange={handleChange} placeholder='' required />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                        </Form.Group>
{/* Allergies */}
                        <Form.Group as={Row} id='allergies' label='aa'>
                            {/* <Form.Label column sm='2'>Allergies:</Form.Label> */}
                            <Col sm='8'>
                              <InputGroup>
                                  <InputGroup.Text>Allergies</InputGroup.Text>
                                  <Form.Control type='text' name='allergies' value={formData.allergies} onChange={handleChange} />
                                  <ToggleButton id='toggleAllergiesNA' name='allergiesNA' variant='outline-primary' type='checkbox' value='' checked={formData.allergies.toLowerCase() === 'n/a'} onChange={toggleAllergiesNA}>N/A</ToggleButton>
                              </InputGroup>
                            </Col>
                        </Form.Group>
                    </Col>
{/* Empty column for correct layout */}
                    <Col xs={6}></Col>
{/* Left column */}
                    <Col xs={6}>
                        <Container fluid>

{/* Admission */}
<>
{/* Date + Time */}
                    <h2>Admission</h2>
                    <Form.Group as={Row}>
                        {/* <Col xs={'auto'}>
                            <Form.Label>Arrival:</Form.Label>
                        </Col> */}
                        <Col xs={8}>
                            <InputGroup className='mb-3'>
                                <InputGroup.Text>Arrival:</InputGroup.Text>
                                <Form.Control type='date' name='arrival.date' value={formData.arrival.date} onChange={handleChange} isInvalid={(formData.arrival.date || '2024').split('-')[0] >= '2024'} />
                                <Form.Control type='time' name='arrival.time' value={formData.arrival.time} onChange={handleChange} />
                                <Button>Now</Button>
                            </InputGroup>
                        </Col>
                    </Form.Group>

{/* Mode of arrival */}
                        <Form.Group as={Row} id='' className='mb-3'>
                            <InputGroup>
                                <InputGroup.Text>Mode of Arrival:</InputGroup.Text>
                                <ToggleButton id='arrivalModeCaregiver' type="radio" variant='outline-primary' name='arrival.mode' value='caregiver' checked={formData.arrival.mode === 'caregiver'} onChange={handleRadioChange/* e=>setFormProp('arrival.mode', e.currentTarget.value) */}>Caregiver</ToggleButton>
                                <ToggleButton id='arrivalModeTransportation' type="radio" variant='outline-primary' name='arrival.mode' value='transportation' checked={formData.arrival.mode === 'transportation'} onChange={handleRadioChange/* e=>setFormProp('arrival.mode', e.currentTarget.value) */}>Transportation</ToggleButton>
                                <ToggleButton id='arrivalModeAmbulance' type="radio" variant='outline-primary' name='arrival.mode' value='ambulance' checked={formData.arrival.mode === 'ambulance'} onChange={handleRadioChange/* e=>setFormProp('arrival.mode', e.currentTarget.value) */}>Ambulance</ToggleButton>
                            </InputGroup>
                            {/* <Col xs={'auto'}><Form.Label>Mode of Arrival:</Form.Label></Col>
                            <Col xs={'auto'}><Form.Check type='radio' label='Caregiver' name='arrival.mode' value='caregiver' checked={formData.arrival.mode === 'caregiver'} onChange={handleChange} /></Col>
                            <Col xs={'auto'}><Form.Check type='radio' label='Transportation' name='arrival.mode' value='transportation' checked={formData.arrival.mode === 'transportation'} onChange={handleChange} /></Col>
                            <Col xs={'auto'}><Form.Check type='radio' label='Ambulance' name='arrival.mode' value='ambulance' checked={formData.arrival.mode === 'ambulance'} onChange={handleChange} /></Col> */}
                        </Form.Group>

{/* Safety Measures */}
                        <ListGroup as='ul'>
                        <ListGroup.Item as='li'>
                            <Form.Group as={Row} id='safetyMeasures'>
                                <ButtonGroup as={Col} xs={8}>
                                    <ToggleButton id='arrival.safetyMeasures' name='arrival.safetyMeasures' checked={formData.arrival.safetyMeasures===true} type='checkbox' value='' variant='outline-primary' onChange={handleChange}>Safety Measures in Place</ToggleButton>
                                    <ToggleButton id='arrival.carSeatSeatBeltEtc' name='arrival.carSeatSeatBeltEtc' checked={formData.arrival.carSeatSeatBeltEtc===true} type='checkbox' value='' variant='outline-primary' onChange={handleChange}>Car Seat/Seat Belt/Wheelchair</ToggleButton>
                                </ButtonGroup>

                                {/* <Col xs={'auto'}><Form.Label>Safety Measures in Place:</Form.Label></Col>
                                <Col xs={'auto'}><Form.Check type='checkbox' label='Car Seat/Seat Belt/Wheelchair' name='arrival.safetyMeasures' value='' checked={formData.arrival.safetyMeasures===true} onChange={handleChange} /></Col> */}
                            </Form.Group>
                        </ListGroup.Item>

{/* Patient stable */}
                        <ListGroup.Item as='li'>
                            <Form.Group as={Row} xs={8} id='patientStable'>
                                <InputGroup>
                                    <InputGroup.Text>Patient Stable:</InputGroup.Text>
                                    <ToggleButton id='arrival.patientStability.vsWsl' name='arrival.patientStability.vsWsl' checked={formData.arrival.patientStability.vsWsl===true} type='checkbox' value='' variant='outline-primary' onChange={handleChange}>VS WSL</ToggleButton>
                                    <ToggleButton id='arrival.patientStability.gTubeOrTrach' name='arrival.patientStability.gTubeOrTrach' checked={formData.arrival.patientStability.gTubeOrTrach===true} type='checkbox' value='' variant='outline-primary' onChange={handleChange}>G-Tube or Trach tube properly in place</ToggleButton>
                                </InputGroup>
                                {/* <Col xs={'auto'}><Form.Label>Patient Stable:</Form.Label></Col>
                                <Col xs={'auto'}><Form.Check type='checkbox' label='VS WSL' name='arrival.patientStability.vsWsl' value='' checked={formData.arrival.patientStability.vsWsl===true} onChange={handleChange} /></Col>
                                <Col xs={'auto'}><Form.Check type='checkbox' label='G-Tube or Trach tube properly in place' name='arrival.patientStability.gTubeOrTrach' value='' checked={formData.arrival.patientStability.gTubeOrTrach===true} onChange={handleChange} /></Col> */}
                            </Form.Group>
                        </ListGroup.Item>

{/* General assessment */}
                        <ListGroup.Item as='li'>
                            <Form.Group as={Row} id=''>
                                <InputGroup>
                                    <InputGroup.Text>General Assessment (Head to Toe) Completed:</InputGroup.Text>
                                    <ToggleButton id='arrival.generalAssessment' name='arrival.generalAssessment' checked={formData.arrival.generalAssessment===true} type='checkbox' value='' variant='outline-primary' onChange={handleChange}>Yes</ToggleButton>
                                </InputGroup>
                                {/* <Col xs={'auto'}><Form.Label>General Assessment (Head to Toe) Completed:</Form.Label></Col>
                                <Col xs={'auto'}><Form.Check type='checkbox' label='Yes' name='arrival.generalAssessment' value='' checked={formData.arrival.generalAssessment===true} onChange={handleChange} /></Col> */}
                            </Form.Group>
                        </ListGroup.Item>
                        </ListGroup>

{/* Additional comments */}
                        <Form.Group as={Row} id='arrivalAdditionalComments' className='mt-3'>
                            {/* <Row xs={'auto'}>
                                <Form.Label>Additional Comments:</Form.Label>
                            </Row> */}
                            <Col xs={12}>
                                <FloatingLabel label='Additional comments'>
                                    <Form.Control as='textarea' rows={3} name='arrival.additionalComments' value={formData.arrival.additionalComments} placeholder='' onChange={handleChange} />
                                </FloatingLabel>
                            </Col>
                        </Form.Group>

{/* Nurse signature */}
                        <Form.Group as={Row} id='arrivalNurseSign'>
                            <Form.Label column xs={'auto'}>Nurse Sign:</Form.Label>
                        <Col xs={12}>
                            <InputGroup className='mb-3'>
                                <Form.Control disabled type='text' name='arrival.nurseSign.fullName' placeholder='Name' value={formData.arrival.nurseSign.fullName} onChange={handleChange} />
                                <Form.Control disabled type='text' name='arrival.nurseSign.nurseID' placeholder='Nurse ID' value={formData.arrival.nurseSign.nurseID} onChange={handleChange} />
                                <Button onClick={()=>{setFormData(setNestedStateArr(structuredClone(formData), ['arrival.nurseSign.fullName', 'arrival.nurseSign.nurseID'], ['Nurse One', 'N1179087529164932']));}}>Sign</Button>
                            </InputGroup>
                        </Col>
                        </Form.Group>
</>

{/* Procedure Table */}
                        <h2 className='text-center mt-4'>Procedure</h2>
                        <ProceduresTable setFormProp={setFormProp} formData={formData}/>

{/* Medications */}
                        <h2 className='text-center mt-4'>Medications</h2>

                        <Form.Group as={Row} id=''>
                            <InputGroup className='mb-3'>
                                <InputGroup.Text>Administration</InputGroup.Text>
                                <ToggleButton id='medications.mdOrder' name='medications.mdOrder' checked={formData.medications.mdOrder===true} type='checkbox' value='' variant='outline-primary' onChange={handleChange}>MD order</ToggleButton>
                                <ToggleButton id='medications.prn' name='medications.prn' checked={formData.medications.prn===true} type='checkbox' value='' variant='outline-primary' onChange={handleChange}>PRN</ToggleButton>
                            </InputGroup>

                                {/* <Col xs={'auto'}><Form.Label>Administration:</Form.Label></Col>
                                <Col xs={'auto'}><Form.Check type='checkbox' label='Administered as per MD order' name='medicationsAdministered' checked={formData.medicationsAdministered} onChange={handleChange} /></Col>
                                <Col xs={'auto'}><Form.Check type='checkbox' label='PRN' name='medicationsPRN' checked={formData.medicationsPRN} onChange={handleChange} /></Col> */}
                        </Form.Group>

{/* Precautions */}
                        <NewPrecautionsTable />
                        <Form.Group>
                            <FloatingLabel id='floatingInput' label='Other Comments:' className='mb-3'>
                                <Form.Control as='textarea' id='name' placeholder='' required />
                            </FloatingLabel>
                        </Form.Group>

{/* Therapies Section */}
                        <h2 className='text-center mt-4'>Therapies</h2>

                        <Form.Group as={Row} className='mt-3 mb-3'>
                            <InputGroup as={Col} className='mb-3'>
                                <InputGroup.Text>Therapies</InputGroup.Text>
                                <ToggleButton id='therapies.pt' name='therapies.pt' checked={formData.therapies.pt===true} type='checkbox' value='' variant='outline-primary' onChange={handleChange}>PT</ToggleButton>
                                <ToggleButton id='therapies.ot' name='therapies.ot' checked={formData.therapies.ot===true} type='checkbox' value='' variant='outline-primary' onChange={handleChange}>OT</ToggleButton>
                                <ToggleButton id='therapies.st' name='therapies.st' checked={formData.therapies.st===true} type='checkbox' value='' variant='outline-primary' onChange={handleChange}>ST</ToggleButton>
                            </InputGroup>

                            {/* <Col xs={'auto'}><Form.Label>Therapies:</Form.Label></Col>
                            <Col xs={'auto'}><Form.Check type='checkbox' label='PT' /></Col>
                            <Col xs={'auto'}><Form.Check type='checkbox' label='OT' /></Col>
                            <Col xs={'auto'}><Form.Check type='checkbox' label='ST' /></Col> */}
                        </Form.Group>

{/* Intake/Output Section */}
<h2 className='text-center mt-4'>Intake/Output</h2>
                        <IntakeOutputTable />
                        </Container>
                    </Col>

{/* Right column */}
                    <Col xs={6}>
                        <Container>

{/* Discharge Section */}
<>
<h2>Discharge</h2>
<Form.Group as={Row}>
                                  <Col xs={8}>
                                      <InputGroup className='mb-3'>
                                          <InputGroup.Text>Discharge:</InputGroup.Text>
                                          <Form.Control type='date' name='discharge.date' value={formData.discharge.date} onChange={handleChange} />
                                          <Form.Control type='time' name='discharge.time' value={formData.discharge.time} onChange={handleChange} />
                                          <Button>Now</Button>
                                      </InputGroup>
                                  </Col>
                              </Form.Group>

                              {/* Mode of discharge */}
                              <Form.Group as={Row} id='' className='mb-3'>
                                  <InputGroup hasValidation>
                                      <InputGroup.Text style={(!formData.invalidSubmit || (formData.discharge.mode?.length || 0) > 0) ? {} : {color: 'var(--bs-danger)', borderColor: 'var(--bs-danger)'}}>Mode of Discharge:</InputGroup.Text>
                                      <ToggleButton id='dischargeModeCaregiver' type="radio" variant={(!formData.invalidSubmit || (formData.discharge.mode?.length || 0) > 0) ? 'outline-primary' : 'outline-danger'} name='discharge.mode' value='caregiver' checked={formData.discharge.mode === 'caregiver'} onChange={handleRadioChange/* e=>setFormProp('discharge.mode', e.currentTarget.value) */}>Caregiver</ToggleButton>
                                      <ToggleButton id='dischargeModeTransportation' type="radio" variant={(!formData.invalidSubmit || (formData.discharge.mode?.length || 0) > 0) ? 'outline-primary' : 'outline-danger'} name='discharge.mode' value='transportation' checked={formData.discharge.mode === 'transportation'} onChange={handleRadioChange/* e=>setFormProp('discharge.mode', e.currentTarget.value) */}>Transportation</ToggleButton>
                                      <ToggleButton id='dischargeModeAmbulance' type="radio" variant={(!formData.invalidSubmit || (formData.discharge.mode?.length || 0) > 0) ? 'outline-primary' : 'outline-danger'} name='discharge.mode' value='ambulance' checked={formData.discharge.mode === 'ambulance'} onChange={handleRadioChange/* e=>setFormProp('discharge.mode', e.currentTarget.value) */}>Ambulance</ToggleButton>
                                  </InputGroup>
                              </Form.Group>

                              {/* Safety Measures */}
                              <ListGroup as='ul'>
                                  <ListGroup.Item as='li'>
                                      <Form.Group as={Row} id='safetyMeasures'>
                                          <ButtonGroup as={Col} xs={8}>
                                              <ToggleButton id='discharge.safetyMeasures' name='discharge.safetyMeasures' checked={formData.discharge.safetyMeasures === true} type='checkbox' value='' variant='outline-primary' onChange={handleChange}>Safety Measures in Place</ToggleButton>
                                              <ToggleButton id='discharge.carSeatSeatBeltEtc' name='discharge.carSeatSeatBeltEtc' checked={formData.discharge.carSeatSeatBeltEtc === true} type='checkbox' value='' variant='outline-primary' onChange={handleChange}>Car Seat/Seat Belt/Wheelchair</ToggleButton>
                                          </ButtonGroup>

                                      </Form.Group>
                                  </ListGroup.Item>

{/* Patient stable */}
                                  <ListGroup.Item as='li'>
                                      <Form.Group as={Row} xs={8} id='patientStable'>
                                          <InputGroup>
                                              <InputGroup.Text>Patient Stable:</InputGroup.Text>
                                              <ToggleButton id='discharge.patientStability.vsWsl' name='discharge.patientStability.vsWsl' checked={formData.discharge.patientStability.vsWsl === true} type='checkbox' value='' variant='outline-primary' onChange={handleChange}>VS WSL</ToggleButton>
                                              <ToggleButton id='discharge.patientStability.gTubeOrTrach' name='discharge.patientStability.gTubeOrTrach' checked={formData.discharge.patientStability.gTubeOrTrach === true} type='checkbox' value='' variant='outline-primary' onChange={handleChange}>G-Tube or Trach tube properly in place</ToggleButton>
                                          </InputGroup>
                                      </Form.Group>
                                  </ListGroup.Item>

                                  {/* General assessment */}
                                  <ListGroup.Item as='li'>
                                      <Form.Group as={Row} id=''>
                                          <InputGroup>
                                              <InputGroup.Text>General Assessment (Head to Toe) Completed:</InputGroup.Text>
                                              <ToggleButton id='discharge.generalAssessment' name='discharge.generalAssessment' checked={formData.discharge.generalAssessment === true} type='checkbox' value='' variant='outline-primary' onChange={handleChange}>Yes</ToggleButton>
                                          </InputGroup>
                                      </Form.Group>
                                  </ListGroup.Item>
                              </ListGroup>

                              {/* Additional comments */}
                              <Form.Group as={Row} id='dischargeAdditionalComments' className='mt-3'>
                                  <Col xs={12}>
                                      <FloatingLabel label='Additional comments'>
                                          <Form.Control as='textarea' rows={3} name='discharge.additionalComments' value={formData.discharge.additionalComments} placeholder='' onChange={handleChange} />
                                      </FloatingLabel>
                                  </Col>
                              </Form.Group>

                              {/* Nurse signature */}
                              <Form.Group as={Row} id='dischargeNurseSign'>
                                  <Form.Label column xs={'auto'}>Nurse Sign:</Form.Label>
                                  <Col xs={12}>
                                      <InputGroup className='mb-3'>
                                          <Form.Control disabled type='text' name='discharge.nurseSign.fullName' placeholder='Name' value={formData.discharge.nurseSign.fullName} onChange={handleChange} />
                                          <Form.Control disabled type='text' name='discharge.nurseSign.nurseID' placeholder='Nurse ID' value={formData.discharge.nurseSign.nurseID} onChange={handleChange} />
                                          <Button onClick={() => { setFormData(setNestedStateArr(structuredClone(formData), ['discharge.nurseSign.fullName', 'discharge.nurseSign.nurseID'], ['Nurse One', 'N1179087529164932'])); }}>Sign</Button>
                                      </InputGroup>
                                  </Col>
                              </Form.Group>

{/* Old discharge part below vvvvvvvvvvv */}
                            {/* <Form.Group as={Row} id='date'>
                                <Col xs={'auto'}>
                                    <Form.Label>Discharge:</Form.Label>
                                </Col>
                                <Col xs={7}>
                                    <InputGroup className='mb-3'>
                                        <Form.Control type='date' name='date' />
                                        <Form.Control type='time' name='date' />
                                        <Button>Now</Button>
                                    </InputGroup>
                                </Col>
                            </Form.Group> */}

{/* Mode of discharge */}
                        {/* <Form.Group as={Row} id='modeOfDischarge' className='mt-3'>
                            <Col xs={'auto'}><Form.Label>Mode of Discharge:</Form.Label></Col>
                            <Col xs={'auto'}><Form.Check type='radio' label='Caregiver' name='discharge.mode' value='caregiver' checked={formData.discharge.mode==='caregiver'} onChange={handleChange} /></Col>
                            <Col xs={'auto'}><Form.Check type='radio' label='Transportation' name='discharge.mode' value='transportation' checked={formData.discharge.mode==='transportation'} onChange={handleChange} /></Col>
                            <Col xs={'auto'}><Form.Check type='radio' label='Ambulance' name='discharge.mode' value='ambulance' checked={formData.discharge.mode==='ambulance'} onChange={handleChange} /></Col>
                        </Form.Group> */}

{/* Safety Measures */}
                        {/* <ListGroup as='ul'>
                        <ListGroup.Item as='li'>
                            <Form.Group as={Row} id='safetyMeasures'>
                                <Col xs={'auto'}><Form.Label>Safety Measures in Place:</Form.Label></Col>
                                <Col xs={'auto'}><Form.Check type='checkbox' label='Car Seat/Seat Belt/Wheelchair' name='discharge.safetyMeasures' value='true' checked={formData.discharge.safetyMeasures===true} onChange={handleChange} /></Col>
                            </Form.Group>
                        </ListGroup.Item> */}

{/* Patient stable */}
                        {/* <ListGroup.Item as='li'>
                            <Form.Group as={Row} id='patientStable'>
                                <Col xs={'auto'}><Form.Label>Patient Stable:</Form.Label></Col>
                                <Col xs={'auto'}><Form.Check type='checkbox' label='VS WSL' name='' value='' checked={formData.discharge.patientStability.vsWsl===true} onChange={handleChange} /></Col>
                                <Col xs={'auto'}><Form.Check type='checkbox' label='G-Tube or Trach tube properly in place' name='' value='' checked={formData.discharge.patientStability.gTubeOrTrach===true} onChange={handleChange} /></Col>
                            </Form.Group>
                        </ListGroup.Item> */}

{/* General assessment */}
                        {/* <ListGroup.Item as='li'>
                            <Form.Group as={Row} id='patientStable'>
                                <Col xs={'auto'}><Form.Label>General Assessment (Head to Toe) Completed:</Form.Label></Col>
                                <Col xs={'auto'}><Form.Check type='checkbox' label='Yes' name='' value='' checked={formData.discharge.generalAssessment===true} onChange={handleChange} /></Col>
                            </Form.Group>
                        </ListGroup.Item>
                        </ListGroup> */}

{/* Additional comments */}
                        {/* <Form.Group as={Row} id='additionalComments' className='mt-3'> */}
                            {/* <Row xs={'auto'}>
                                <Form.Label>Additional Comments:</Form.Label>
                            </Row> */}
                            {/* <Col xs={12}>
                                <FloatingLabel label='Additional comments'>
                                    <Form.Control as='textarea' rows={3} placeholder='' name='additionalComments' value={formData.discharge.additionalComments} onChange={handleChange} />
                                </FloatingLabel>
                            </Col>
                        </Form.Group> */}

{/* Nurse signature */}
                        {/* <Form.Group as={Row} id='nurseSign'>
                            <Form.Label column xs={'auto'}>Nurse Sign:</Form.Label>
                        <Col xs={12}>
                            <InputGroup className='mb-3'>
                                <Form.Control disabled type='text' name='discharge.nurseSign.fullName' placeholder='Name' value={formData.discharge.nurseSign.fullName} onChange={handleChange} />
                                <Form.Control disabled type='text' name='discharge.nurseSign.nurseID' placeholder='Nurse ID' value={formData.discharge.nurseSign.nurseID} onChange={handleChange} />
                                <Button>Sign</Button>
                            </InputGroup>
                        </Col>
                        </Form.Group> */}
</>

{/* Flow Sheet Section */}
                        <h2 className='text-center mt-4'>Flow Sheet</h2>
                        <FlowSheet state={formData} setFormProp={setFormProp} />

                        <Button variant='primary' type='submit' className='mt-4'>Submit</Button>
                        </Container>
                    </Col>

{/* Progress Notes Section */}
                <Container>
                    <Row className="justify-content-center">
                    <Col xs={10}>
                        <br />
                        <br />
                        <br />
                    <ProgressNotes state={formData} setFormProp={setFormProp} />
                    </Col>
                    </Row>
                </Container>
                </Row>
            </Form>
    </Container>
  );
};

export default AdmissionForm;