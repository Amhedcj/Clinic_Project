// src/AdmissionForm.js
import React, { useState } from 'react';
import { Form, Button, Row, Col, Container, FloatingLabel, InputGroup, ListGroup } from 'react-bootstrap';
import ProceduresTable from '../ProceduresTable';
import PrecautionsTable from '../PrecautionsTable';
import IntakeOutputTable from '../IntakeOutputTable';
import FlowSheet from '../FlowSheet';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    date: '',
    allergies: '',
    arrivalTime: '',
    modeOfArrival: '',
    safetyMeasures: '',
    patientStable: false,
    gTubeOrTrach: false,
    generalAssessment: false,
    additionalComments: '',
    nurseSign: '',
    procedureDetails: [],
    medicationsAdministered: false,
    medicationsPRN: false,
    otherComments: '',
    therapies: {
      pt: '',
      ot: '',
      st: ''
    },
    dischargeTime: '',
    modeOfDischarge: '',
    intakeOutput: [],
    flowSheet: {
      time: '',
      temperature: '',
      bloodPressure: '',
      heartRate: '',
      respiratoryRate: '',
      painScale: '',
    //   neurological: {
        levelOfConsciousness: '',
        activity: '',
    //   },
      respiratory: {
        effort: '',
        breathSounds: '',
        fio2LxM: '',
        sao2: ''
      },
      cardiac: {
        heartSounds: '',
        rhythm: '',
        peripheralPulse: '',
        capillaryRefill: '',
        color: ''
      },
      gastrointestinal: {
        abdomen: '',
        gTubeJTube: '',
        bowelSounds: '',
        mouth: '',
        stools: ''
      },
      skin: {
        color: '',
        condition: '',
        temperature: ''
      },
      urinaryOutput: {
        voiding: '',
        catheterization: '',
        adls: '',
        diapers: '',
        emesis: ''
      },
      equipment: {
        glasses: '',
        splintsOrthotics: '',
        monitors: '',
        feedingPump: '',
        portableSuction: '',
        hearingAid: '',
        oxygen: '',
        wheelchair: '',
        nebulizer: ''
      }
    },
    progressNotes: {
      date: '',
      time: '',
      notes: '',
      nurseSignature: ''
    }
  } as any);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container fluid>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col xs={12}>
                        <Row className='mt-5'>
                            <h2 className="text-center">ADMISSION AND DISCHARGE DAILY SHEET</h2>
                        </Row>
                    </Col>
                    <Col xs={6} className='mb-3'>
                        <h2>Patient</h2>
{/* Patient */}
                        <Form.Group /* as={Row} */ /* as={Row} messes up the floating label for some reason */ controlId="patientName">
                            <Row>
                                <Col>
                                    <FloatingLabel controlId="floatingInput" label="First Name" className="mb-3">
                                        <Form.Control type="text" id="name" placeholder="" required />
                                    </FloatingLabel>
                                </Col>

                                <Col>
                                    <FloatingLabel controlId="floatingInput" label="Last Name" className="mb-3">
                                        <Form.Control type="text" id="name" placeholder="" required />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                        </Form.Group>
{/* Allergies */}
                        <Form.Group as={Row} controlId="allergies" label="aa">
                            <Form.Label column sm="2">Allergies:</Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" name="allergies" value={formData.allergies} onChange={handleChange} />
                            </Col>
                            <Col sm="2">
                                <Form.Check type="checkbox" label="N/A" name="allergiesNA" checked={formData.allergies === 'N/A'} onChange={() => setFormData({ ...formData, allergies: 'N/A' })} />
                            </Col>
                        </Form.Group>
                    </Col>
{/* Empty column for correct layout */}
                    <Col xs={6}></Col>
{/* Left column */}
                    <Col xs={6}>
                        <Container fluid>

{/* Admission */}
{/* Date + Time */}
                    <h2>Admission</h2>
                    <Form.Group as={Row} controlId="date">
                        <Col xs={'auto'}>
                            <Form.Label>Arrival:</Form.Label>
                        </Col>
                        <Col xs={7}>
                            <InputGroup className="mb-3">
                            <Form.Control type="date" name="date" /* value={formData.date} onChange={handleChange} */ />
                            <Form.Control type="time" name="date" /* value={formData.date} onChange={handleChange} */ />
                            <Button>Now</Button>
                            </InputGroup>
                        </Col>
                    </Form.Group>

{/* Mode of arrival */}
                        <Form.Group as={Row} controlId="modeOfArrival" className='mt-3'>
                            <Col xs={'auto'}><Form.Label>Mode of Arrival:</Form.Label></Col>
                            <Col xs={'auto'}><Form.Check type="radio" label="Caregiver" name="modeOfArrival" value="Caregiver" checked={formData.modeOfArrival === 'Caregiver'} onChange={handleChange} /></Col>
                            <Col xs={'auto'}><Form.Check type="radio" label="Transportation" name="modeOfArrival" value="Transportation" checked={formData.modeOfArrival === 'Transportation'} onChange={handleChange} /></Col>
                            <Col xs={'auto'}><Form.Check type="radio" label="Ambulance" name="modeOfArrival" value="Ambulance" checked={formData.modeOfArrival === 'Ambulance'} onChange={handleChange} /></Col>
                        </Form.Group>

{/* Safety Measures */}
                        <ListGroup as="ul">
                        <ListGroup.Item as="li">
                            <Form.Group as={Row} controlId="safetyMeasures">
                                <Col xs={'auto'}><Form.Label>Safety Measures in Place:</Form.Label></Col>
                                <Col xs={'auto'}><Form.Check type="checkbox" label="Car Seat/Seat Belt/Wheelchair" name="modeOfArrival" value="Caregiver" checked={formData.modeOfArrival === 'Caregiver'} onChange={handleChange} /></Col>
                            </Form.Group>
                        </ListGroup.Item>

{/* Patient stable */}
                        <ListGroup.Item as="li">
                            <Form.Group as={Row} controlId="patientStable">
                                <Col xs={'auto'}><Form.Label>Patient Stable:</Form.Label></Col>
                                <Col xs={'auto'}><Form.Check type="checkbox" label="VS WSL" name="" value="" checked={formData.patientStable === ''} onChange={handleChange} /></Col>
                                <Col xs={'auto'}><Form.Check type="checkbox" label="G-Tube or Trach tube properly in place" name="" value="" checked={formData.patientStable === ''} onChange={handleChange} /></Col>
                            </Form.Group>
                        </ListGroup.Item>

{/* General assessment */}
                        <ListGroup.Item as="li">
                            <Form.Group as={Row} controlId="patientStable">
                                <Col xs={'auto'}><Form.Label>General Assessment (Head to Toe) Completed:</Form.Label></Col>
                                <Col xs={'auto'}><Form.Check type="checkbox" label="Yes" name="" value="" checked={formData.patientStable === ''} onChange={handleChange} /></Col>
                            </Form.Group>
                        </ListGroup.Item>
                        </ListGroup>

{/* Additional comments */}
                        <Form.Group as={Row} controlId="additionalComments" className='mt-3'>
                            {/* <Row xs={'auto'}>
                                <Form.Label>Additional Comments:</Form.Label>
                            </Row> */}
                            <Col xs={12}>
                                <FloatingLabel label='Additional comments'>
                                    <Form.Control as="textarea" rows={3} placeholder='' name="additionalComments" value={formData.additionalComments} onChange={handleChange} />
                                </FloatingLabel>
                            </Col>
                        </Form.Group>

{/* Nurse signature */}
                        <Form.Group as={Row} controlId="nurseSign">
                            <Form.Label column xs={'auto'}>Nurse Sign:</Form.Label>
                        <Col xs={12}>
                            <InputGroup className="mb-3">
                                <Form.Control disabled type="text" name="nurseSign" placeholder='Name' value={formData.nurseSign} onChange={handleChange} />
                                <Form.Control disabled type="text" name="nurseSign" placeholder='Nurse ID' value={formData.nurseSign} onChange={handleChange} />
                                <Button>Sign</Button>
                            </InputGroup>
                        </Col>
                        </Form.Group>

{/* Procedure Table */}
                        <h2 className="text-center mt-4">Procedure</h2>
                        <ProceduresTable />

{/* Medications */}
                        <h2 className="text-center mt-4">Medications</h2>

                        <Form.Group as={Row} controlId="">
                                <Col xs={'auto'}><Form.Label>Administration:</Form.Label></Col>
                                <Col xs={'auto'}><Form.Check type="checkbox" label="Administered as per MD order" name="medicationsAdministered" checked={formData.medicationsAdministered} onChange={handleChange} /></Col>
                                <Col xs={'auto'}><Form.Check type="checkbox" label="PRN" name="medicationsPRN" checked={formData.medicationsPRN} onChange={handleChange} /></Col>
                        </Form.Group>

{/* Precautions */}
                        <PrecautionsTable />
                        <Form.Group>
                            <FloatingLabel controlId="floatingInput" label="Other Comments:" className="mb-3">
                                <Form.Control as="textarea" id="name" placeholder="" required />
                            </FloatingLabel>
                        </Form.Group>
{/* Therapies Section */}
                        <h2 className="text-center mt-4">Therapies</h2>

                        <Form.Group as={Row} className='mt-3 mb-3'>
                            <Col xs={'auto'}><Form.Label>Therapies:</Form.Label></Col>
                            <Col xs={'auto'}><Form.Check type="checkbox" label="PT" /></Col>
                            <Col xs={'auto'}><Form.Check type="checkbox" label="OT" /></Col>
                            <Col xs={'auto'}><Form.Check type="checkbox" label="ST" /></Col>
                        </Form.Group>
                        </Container>
                    </Col>

{/* Right column */}
                    <Col xs={6}>
                        <Container>

{/* Discharge Section */}
<h2>Discharge</h2>
                            <Form.Group as={Row} controlId="date">
                                <Col xs={'auto'}>
                                    <Form.Label>Discharge:</Form.Label>
                                </Col>
                                <Col xs={7}>
                                    <InputGroup className="mb-3">
                                        <Form.Control type="date" name="date" />
                                        <Form.Control type="time" name="date" />
                                        <Button>Now</Button>
                                    </InputGroup>
                                </Col>
                            </Form.Group>

{/* Mode of discharge */}
                        <Form.Group as={Row} controlId="modeOfArrival" className='mt-3'>
                            <Col xs={'auto'}><Form.Label>Mode of Discharge:</Form.Label></Col>
                            <Col xs={'auto'}><Form.Check type="radio" label="Caregiver" name="modeOfArrival" value="Caregiver" checked={formData.modeOfArrival === 'Caregiver'} onChange={handleChange} /></Col>
                            <Col xs={'auto'}><Form.Check type="radio" label="Transportation" name="modeOfArrival" value="Transportation" checked={formData.modeOfArrival === 'Transportation'} onChange={handleChange} /></Col>
                            <Col xs={'auto'}><Form.Check type="radio" label="Ambulance" name="modeOfArrival" value="Ambulance" checked={formData.modeOfArrival === 'Ambulance'} onChange={handleChange} /></Col>
                        </Form.Group>

{/* Safety Measures */}
                        <ListGroup as="ul">
                        <ListGroup.Item as="li">
                            <Form.Group as={Row} controlId="safetyMeasures">
                                <Col xs={'auto'}><Form.Label>Safety Measures in Place:</Form.Label></Col>
                                <Col xs={'auto'}><Form.Check type="checkbox" label="Car Seat/Seat Belt/Wheelchair" name="modeOfArrival" value="Caregiver" checked={formData.modeOfArrival === 'Caregiver'} onChange={handleChange} /></Col>
                            </Form.Group>
                        </ListGroup.Item>

{/* Patient stable */}
                        <ListGroup.Item as="li">
                            <Form.Group as={Row} controlId="patientStable">
                                <Col xs={'auto'}><Form.Label>Patient Stable:</Form.Label></Col>
                                <Col xs={'auto'}><Form.Check type="checkbox" label="VS WSL" name="" value="" checked={formData.patientStable === ''} onChange={handleChange} /></Col>
                                <Col xs={'auto'}><Form.Check type="checkbox" label="G-Tube or Trach tube properly in place" name="" value="" checked={formData.patientStable === ''} onChange={handleChange} /></Col>
                            </Form.Group>
                        </ListGroup.Item>

{/* General assessment */}
                        <ListGroup.Item as="li">
                            <Form.Group as={Row} controlId="patientStable">
                                <Col xs={'auto'}><Form.Label>General Assessment (Head to Toe) Completed:</Form.Label></Col>
                                <Col xs={'auto'}><Form.Check type="checkbox" label="Yes" name="" value="" checked={formData.patientStable === ''} onChange={handleChange} /></Col>
                            </Form.Group>
                        </ListGroup.Item>
                        </ListGroup>

{/* Additional comments */}
                        <Form.Group as={Row} controlId="additionalComments" className='mt-3'>
                            {/* <Row xs={'auto'}>
                                <Form.Label>Additional Comments:</Form.Label>
                            </Row> */}
                            <Col xs={12}>
                                <FloatingLabel label='Additional comments'>
                                    <Form.Control as="textarea" rows={3} placeholder='' name="additionalComments" value={formData.additionalComments} onChange={handleChange} />
                                </FloatingLabel>
                            </Col>
                        </Form.Group>

{/* Nurse signature */}
                        <Form.Group as={Row} controlId="nurseSign">
                            <Form.Label column xs={'auto'}>Nurse Sign:</Form.Label>
                        <Col xs={12}>
                            <InputGroup className="mb-3">
                                <Form.Control disabled type="text" name="nurseSign" placeholder='Name' value={formData.nurseSign} onChange={handleChange} />
                                <Form.Control disabled type="text" name="nurseSign" placeholder='Nurse ID' value={formData.nurseSign} onChange={handleChange} />
                                <Button>Sign</Button>
                            </InputGroup>
                        </Col>
                        </Form.Group>

{/* Intake/Output Section */}
                        <h2 className="text-center mt-4">Intake/Output</h2>
                        <IntakeOutputTable />

{/* Flow Sheet Section */}
                        <h2 className="text-center mt-4">Flow Sheet</h2>
                        <FlowSheet state={formData} setState={setFormData}/>

{/* Progress Notes Section */}
                        <h2 className="text-center mt-4">Progress Notes</h2>
                        <Form.Group as={Row} controlId="progressNotes.date">
                        <Form.Label column sm="2">Date:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="date" name="progressNotes.date" value={formData.progressNotes.date} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="progressNotes.time">
                        <Form.Label column sm="2">Time:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="progressNotes.time" value={formData.progressNotes.time} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="progressNotes.notes">
                        <Form.Label column sm="2">Notes:</Form.Label>
                        <Col sm="10">
                            <Form.Control as="textarea" rows={5} name="progressNotes.notes" value={formData.progressNotes.notes} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="progressNotes.nurseSignature">
                        <Form.Label column sm="2">Nurse Signature:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="progressNotes.nurseSignature" value={formData.progressNotes.nurseSignature} onChange={handleChange} />
                        </Col>
                        </Form.Group>

                        <Button variant="primary" type="submit" className="mt-4">
                        Submit
                        </Button>
                        </Container>
                    </Col>
                </Row>
            </Form>
    </Container>
  );
};

export default AdmissionForm;