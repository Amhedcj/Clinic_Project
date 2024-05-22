// src/AdmissionForm.js
import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';

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
      neurological: {
        levelOfConsciousness: '',
        activity: ''
      },
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
    <Container>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col xs={6}>
                        <Container>
                        <h2 className="text-center">ADMISSION AND DISCHARGE DAILY SHEET</h2>
                        <h3>Patient</h3>
                    
                        <Form.Group as={Row} controlId="patientName">
                        <Form.Label column sm="2">Patient Name:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="patientName" value={formData.patientName} onChange={handleChange} />
                        </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="date">
                        <Form.Label column sm="2">Date:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="date" name="date" value={formData.date} onChange={handleChange} />
                        </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="allergies">
                        <Form.Label column sm="2">Allergies:</Form.Label>
                        <Col sm="8">
                            <Form.Control type="text" name="allergies" value={formData.allergies} onChange={handleChange} />
                        </Col>
                        <Col sm="2">
                            <Form.Check type="checkbox" label="N/A" name="allergiesNA" checked={formData.allergies === 'N/A'} onChange={() => setFormData({ ...formData, allergies: 'N/A' })} />
                        </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="arrivalTime">
                        <Form.Label column sm="2">Arrival Time:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="arrivalTime" value={formData.arrivalTime} onChange={handleChange} placeholder="AM/PM" />
                        </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="modeOfArrival">
                        <Form.Label column sm="2">Mode of Arrival:</Form.Label>
                        <Col sm="10">
                            <Form.Check type="radio" label="Caregiver" name="modeOfArrival" value="Caregiver" checked={formData.modeOfArrival === 'Caregiver'} onChange={handleChange} />
                            <Form.Check type="radio" label="Transportation" name="modeOfArrival" value="Transportation" checked={formData.modeOfArrival === 'Transportation'} onChange={handleChange} />
                            <Form.Check type="radio" label="Ambulance" name="modeOfArrival" value="Ambulance" checked={formData.modeOfArrival === 'Ambulance'} onChange={handleChange} />
                        </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="safetyMeasures">
                        <Form.Label column sm="2">Safety Measures:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="safetyMeasures" value={formData.safetyMeasures} onChange={handleChange} placeholder="Car Seat/Seat Belt/Wheelchair" />
                        </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="patientStable">
                        <Form.Label column sm="2">Patient Stable VS WNL:</Form.Label>
                        <Col sm="10">
                            <Form.Check type="checkbox" label="VS WNL" name="patientStable" checked={formData.patientStable} onChange={handleChange} />
                        </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="gTubeOrTrach">
                        <Form.Label column sm="2">G-Tube or Trach tube:</Form.Label>
                        <Col sm="10">
                            <Form.Check type="checkbox" label="G-Tube or Trach tube properly in place" name="gTubeOrTrach" checked={formData.gTubeOrTrach} onChange={handleChange} />
                        </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="generalAssessment">
                        <Form.Label column sm="2">General Assessment:</Form.Label>
                        <Col sm="10">
                            <Form.Check type="checkbox" label="Completed" name="generalAssessment" checked={formData.generalAssessment} onChange={handleChange} />
                        </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="additionalComments">
                        <Form.Label column sm="2">Additional Comments:</Form.Label>
                        <Col sm="10">
                            <Form.Control as="textarea" rows={3} name="additionalComments" value={formData.additionalComments} onChange={handleChange} />
                        </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="nurseSign">
                        <Form.Label column sm="2">Nurse Sign:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="nurseSign" value={formData.nurseSign} onChange={handleChange} />
                        </Col>
                        </Form.Group>

                        {/* Procedure Section */}
                        <h2 className="text-center mt-4">Procedure</h2>
                        <Form.Group as={Row} controlId="time">
                        <Form.Label column sm="2">Time:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="time" value={formData.time} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="procedure">
                        <Form.Label column sm="2">Procedure:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="procedure" value={formData.procedure} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="precautions">
                        <Form.Label column sm="2">Precautions:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="precautions" value={formData.precautions} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="comments">
                        <Form.Label column sm="2">Comments:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="comments" value={formData.comments} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="signature">
                        <Form.Label column sm="2">Signature:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="signature" value={formData.signature} onChange={handleChange} />
                        </Col>
                        </Form.Group>

                        {/* Medications Section */}
                        <h2 className="text-center mt-4">Medications</h2>
                        <Form.Group as={Row} controlId="medicationsAdministered">
                        <Col sm="6">
                            <Form.Check type="checkbox" label="Administered as per MD order" name="medicationsAdministered" checked={formData.medicationsAdministered} onChange={handleChange} />
                        </Col>
                        <Col sm="6">
                            <Form.Check type="checkbox" label="PRN" name="medicationsPRN" checked={formData.medicationsPRN} onChange={handleChange} />
                        </Col>
                        </Form.Group>

                        {/* Therapies Section */}
                        <h2 className="text-center mt-4">Therapies</h2>
                        <Form.Group as={Row} controlId="therapies.pt">
                        <Form.Label column sm="2">PT:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="therapies.pt" value={formData.therapies.pt} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="therapies.ot">
                        <Form.Label column sm="2">OT:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="therapies.ot" value={formData.therapies.ot} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="therapies.st">
                        <Form.Label column sm="2">ST:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="therapies.st" value={formData.therapies.st} onChange={handleChange} />
                        </Col>
                        </Form.Group>

                        {/* Discharge Section */}
                        <Form.Group as={Row} controlId="dischargeTime">
                        <Form.Label column sm="2">Discharge Time:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="dischargeTime" value={formData.dischargeTime} onChange={handleChange} placeholder="AM/PM" />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="modeOfDischarge">
                        <Form.Label column sm="2">Mode of Discharge:</Form.Label>
                        <Col sm="10">
                            <Form.Check type="radio" label="Caregiver" name="modeOfDischarge" value="Caregiver" checked={formData.modeOfDischarge === 'Caregiver'} onChange={handleChange} />
                            <Form.Check type="radio" label="Transportation" name="modeOfDischarge" value="Transportation" checked={formData.modeOfDischarge === 'Transportation'} onChange={handleChange} />
                            <Form.Check type="radio" label="Ambulance" name="modeOfDischarge" value="Ambulance" checked={formData.modeOfDischarge === 'Ambulance'} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        </Container>
                    </Col>
                    <Col xs={6}>
                        <Container>
                        {/* Intake/Output Section */}
                        <h2 className="text-center mt-4">Intake/Output</h2>
                        <Form.Group as={Row} controlId="intakeOutput.time">
                        <Form.Label column sm="2">TIME:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="intakeOutput.time" value={formData.intakeOutput.time} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="intakeOutput.po">
                        <Form.Label column sm="2">PO:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="intakeOutput.po" value={formData.intakeOutput.po} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="intakeOutput.gTube">
                        <Form.Label column sm="2">G-TUBE:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="intakeOutput.gTube" value={formData.intakeOutput.gTube} onChange={handleChange} />
                        </Col>
                        </Form.Group>

                        {/* Flow Sheet Section */}
                        <h2 className="text-center mt-4">Flow Sheet</h2>
                        <Form.Group as={Row} controlId="flowSheet.time">
                        <Form.Label column sm="2">Time:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="flowSheet.time" value={formData.flowSheet.time} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        <h3>Vital Signs</h3>
                        <Form.Group as={Row} controlId="flowSheet.temperature">
                        <Form.Label column sm="2">Temperature:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="flowSheet.temperature" value={formData.flowSheet.temperature} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="flowSheet.bloodPressure">
                        <Form.Label column sm="2">Blood Pressure:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="flowSheet.bloodPressure" value={formData.flowSheet.bloodPressure} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="flowSheet.heartRate">
                        <Form.Label column sm="2">Heart Rate:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="flowSheet.heartRate" value={formData.flowSheet.heartRate} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="flowSheet.respiratoryRate">
                        <Form.Label column sm="2">Respiratory Rate:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="flowSheet.respiratoryRate" value={formData.flowSheet.respiratoryRate} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="flowSheet.painScale">
                        <Form.Label column sm="2">Pain Scale (0-10):</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="flowSheet.painScale" value={formData.flowSheet.painScale} onChange={handleChange} />
                        </Col>
                        </Form.Group>

                        <h3>Neurological</h3>
                        <Form.Group as={Row} controlId="flowSheet.neurological.levelOfConsciousness">
                        <Form.Label column sm="2">Level of Consciousness:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="flowSheet.neurological.levelOfConsciousness" value={formData.flowSheet.neurological.levelOfConsciousness} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="flowSheet.neurological.activity">
                        <Form.Label column sm="2">Activity:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="flowSheet.neurological.activity" value={formData.flowSheet.neurological.activity} onChange={handleChange} />
                        </Col>
                        </Form.Group>

                        <h3>Respiratory</h3>
                        <Form.Group as={Row} controlId="flowSheet.respiratory.effort">
                        <Form.Label column sm="2">Effort:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="flowSheet.respiratory.effort" value={formData.flowSheet.respiratory.effort} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="flowSheet.respiratory.breathSounds">
                        <Form.Label column sm="2">Breath sounds:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="flowSheet.respiratory.breathSounds" value={formData.flowSheet.respiratory.breathSounds} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="flowSheet.respiratory.fio2LxM">
                        <Form.Label column sm="2">FIO2/LxM:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="flowSheet.respiratory.fio2LxM" value={formData.flowSheet.respiratory.fio2LxM} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="flowSheet.respiratory.sao2">
                        <Form.Label column sm="2">SaO2:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="flowSheet.respiratory.sao2" value={formData.flowSheet.respiratory.sao2} onChange={handleChange} />
                        </Col>
                        </Form.Group>

                        <h3>Cardiac</h3>
                        <Form.Group as={Row} controlId="flowSheet.cardiac.heartSounds">
                        <Form.Label column sm="2">Heart sounds:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="flowSheet.cardiac.heartSounds" value={formData.flowSheet.cardiac.heartSounds} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="flowSheet.cardiac.rhythm">
                        <Form.Label column sm="2">Rhythm:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="flowSheet.cardiac.rhythm" value={formData.flowSheet.cardiac.rhythm} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="flowSheet.cardiac.peripheralPulse">
                        <Form.Label column sm="2">Peripheral Pulse:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="flowSheet.cardiac.peripheralPulse" value={formData.flowSheet.cardiac.peripheralPulse} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="flowSheet.cardiac.capillaryRefill">
                        <Form.Label column sm="2">Capillary Refill:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="flowSheet.cardiac.capillaryRefill" value={formData.flowSheet.cardiac.capillaryRefill} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="flowSheet.cardiac.color">
                        <Form.Label column sm="2">Color:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="flowSheet.cardiac.color" value={formData.flowSheet.cardiac.color} onChange={handleChange} />
                        </Col>
                        </Form.Group>

                        <h3>Gastrointestinal</h3>
                        <Form.Group as={Row} controlId="flowSheet.gastrointestinal.abdomen">
                        <Form.Label column sm="2">Abdomen:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="flowSheet.gastrointestinal.abdomen" value={formData.flowSheet.gastrointestinal.abdomen} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="flowSheet.gastrointestinal.gTubeJTube">
                        <Form.Label column sm="2">G-tube/J-tube:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="flowSheet.gastrointestinal.gTubeJTube" value={formData.flowSheet.gastrointestinal.gTubeJTube} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="flowSheet.gastrointestinal.bowelSounds">
                        <Form.Label column sm="2">Bowel Sounds:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="flowSheet.gastrointestinal.bowelSounds" value={formData.flowSheet.gastrointestinal.bowelSounds} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="flowSheet.gastrointestinal.mouth">
                        <Form.Label column sm="2">Mouth:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="flowSheet.gastrointestinal.mouth" value={formData.flowSheet.gastrointestinal.mouth} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="flowSheet.gastrointestinal.stools">
                        <Form.Label column sm="2">Stools:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="flowSheet.gastrointestinal.stools" value={formData.flowSheet.gastrointestinal.stools} onChange={handleChange} />
                        </Col>
                        </Form.Group>

                        <h3>Skin</h3>
                        <Form.Group as={Row} controlId="flowSheet.skin.color">
                        <Form.Label column sm="2">Color:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="flowSheet.skin.color" value={formData.flowSheet.skin.color} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="flowSheet.skin.condition">
                        <Form.Label column sm="2">Condition:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="flowSheet.skin.condition" value={formData.flowSheet.skin.condition} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="flowSheet.skin.temperature">
                        <Form.Label column sm="2">Temperature:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="flowSheet.skin.temperature" value={formData.flowSheet.skin.temperature} onChange={handleChange} />
                        </Col>
                        </Form.Group>

                        <h3>Urinary Output</h3>
                        <Form.Group as={Row} controlId="flowSheet.urinaryOutput.voiding">
                        <Form.Label column sm="2">Voiding:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="flowSheet.urinaryOutput.voiding" value={formData.flowSheet.urinaryOutput.voiding} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="flowSheet.urinaryOutput.catheterization">
                        <Form.Label column sm="2">Catheterization:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="flowSheet.urinaryOutput.catheterization" value={formData.flowSheet.urinaryOutput.catheterization} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="flowSheet.urinaryOutput.adls">
                        <Form.Label column sm="2">ADLs:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="flowSheet.urinaryOutput.adls" value={formData.flowSheet.urinaryOutput.adls} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="flowSheet.urinaryOutput.diapers">
                        <Form.Label column sm="2">Diapers:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="flowSheet.urinaryOutput.diapers" value={formData.flowSheet.urinaryOutput.diapers} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="flowSheet.urinaryOutput.emesis">
                        <Form.Label column sm="2">Emesis:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="flowSheet.urinaryOutput.emesis" value={formData.flowSheet.urinaryOutput.emesis} onChange={handleChange} />
                        </Col>
                        </Form.Group>

                        <h3>Equipment</h3>
                        <Form.Group as={Row} controlId="flowSheet.equipment.glasses">
                        <Form.Label column sm="2">Glasses:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="flowSheet.equipment.glasses" value={formData.flowSheet.equipment.glasses} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="flowSheet.equipment.splintsOrthotics">
                        <Form.Label column sm="2">Splints/Orthotics:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="flowSheet.equipment.splintsOrthotics" value={formData.flowSheet.equipment.splintsOrthotics} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="flowSheet.equipment.monitors">
                        <Form.Label column sm="2">Monitors:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="flowSheet.equipment.monitors" value={formData.flowSheet.equipment.monitors} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="flowSheet.equipment.feedingPump">
                        <Form.Label column sm="2">Feeding Pump:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="flowSheet.equipment.feedingPump" value={formData.flowSheet.equipment.feedingPump} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="flowSheet.equipment.portableSuction">
                        <Form.Label column sm="2">Portable Suction:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="flowSheet.equipment.portableSuction" value={formData.flowSheet.equipment.portableSuction} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="flowSheet.equipment.hearingAid">
                        <Form.Label column sm="2">Hearing Aid:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="flowSheet.equipment.hearingAid" value={formData.flowSheet.equipment.hearingAid} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="flowSheet.equipment.oxygen">
                        <Form.Label column sm="2">Oxygen:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="flowSheet.equipment.oxygen" value={formData.flowSheet.equipment.oxygen} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="flowSheet.equipment.wheelchair">
                        <Form.Label column sm="2">Wheelchair:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="flowSheet.equipment.wheelchair" value={formData.flowSheet.equipment.wheelchair} onChange={handleChange} />
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="flowSheet.equipment.nebulizer">
                        <Form.Label column sm="2">Nebulizer:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="flowSheet.equipment.nebulizer" value={formData.flowSheet.equipment.nebulizer} onChange={handleChange} />
                        </Col>
                        </Form.Group>

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