import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import RangeSlider from 'react-bootstrap-range-slider'

function FlowSheet_Old() {
  return (
<>
<Form.Group as={Row} controlId="flowSheet.time">
                <Form.Label column sm="2">Time:</Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="flowSheet.time" />
                </Col>
            </Form.Group>
            <h2>Vital Signs</h2>
            <Form.Group as={Row} controlId="flowSheet.temperature">
                <Form.Label column sm="2">Temperature:</Form.Label>
                <Col sm="4">
                    {/* <Form.Control type="text" name="flowSheet.temperature"
                            {/* <InputGroup className="mb-3">
                                <Form.Control type="number" min={96} max={102} name="flowSheet.skin.temperature" />
                                <InputGroup.Text>.</InputGroup.Text>
                                <Form.Control type="number" min={0} max={9} name="flowSheet.skin.temperature" />
                            </InputGroup> */}

                    <Form.Control type="number" min={96} max={102} name="flowSheet.skin.temperature" />

                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="flowSheet.bloodPressure">
                <Form.Label column sm="2">Blood Pressure:</Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="flowSheet.bloodPressure" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="flowSheet.heartRate">
                <Form.Label column sm="2">Heart Rate:</Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="flowSheet.heartRate" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="flowSheet.respiratoryRate">
                <Form.Label column sm="2">Respiratory Rate:</Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="flowSheet.respiratoryRate" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="flowSheet.painScale">
                <Col sm="10">
                    <Form.Label sm={2}>Pain Scale (0-10):</Form.Label>
                    {/* <Form.Range min={0} max={10} name="flowSheet.painScale" /> */}
                    <RangeSlider value={1} min={0} max={10} />
                </Col>
            </Form.Group>

            <h2>Neurological</h2>
            <Form.Group as={Row} controlId="flowSheet.neurological.levelOfConsciousness">
                <Form.Label column sm="2">Level of Consciousness:</Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="flowSheet.neurological.levelOfConsciousness" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="flowSheet.neurological.activity">
                <Form.Label column sm="2">Activity:</Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="flowSheet.neurological.activity" />
                </Col>
            </Form.Group>

            <h2>Respiratory</h2>
            <Form.Group as={Row} controlId="flowSheet.respiratory.effort">
                <Form.Label column sm="2">Effort:</Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="flowSheet.respiratory.effort" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="flowSheet.respiratory.breathSounds">
                <Form.Label column sm="2">Breath sounds:</Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="flowSheet.respiratory.breathSounds" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="flowSheet.respiratory.fio2LxM">
                <Form.Label column sm="2">FIO2/LxM:</Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="flowSheet.respiratory.fio2LxM" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="flowSheet.respiratory.sao2">
                <Form.Label column sm="2">SaO2:</Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="flowSheet.respiratory.sao2" />
                </Col>
            </Form.Group>

            <h2>Cardiac</h2>
            <Form.Group as={Row} controlId="flowSheet.cardiac.heartSounds">
                <Form.Label column sm="2">Heart sounds:</Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="flowSheet.cardiac.heartSounds" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="flowSheet.cardiac.rhythm">
                <Form.Label column sm="2">Rhythm:</Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="flowSheet.cardiac.rhythm" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="flowSheet.cardiac.peripheralPulse">
                <Form.Label column sm="2">Peripheral Pulse:</Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="flowSheet.cardiac.peripheralPulse" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="flowSheet.cardiac.capillaryRefill">
                <Form.Label column sm="2">Capillary Refill:</Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="flowSheet.cardiac.capillaryRefill" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="flowSheet.cardiac.color">
                <Form.Label column sm="2">Color:</Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="flowSheet.cardiac.color" />
                </Col>
            </Form.Group>

            <h2>Gastrointestinal</h2>
            <Form.Group as={Row} controlId="flowSheet.gastrointestinal.abdomen">
                <Form.Label column sm="2">Abdomen:</Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="flowSheet.gastrointestinal.abdomen" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="flowSheet.gastrointestinal.gTubeJTube">
                <Form.Label column sm="2">G-tube/J-tube:</Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="flowSheet.gastrointestinal.gTubeJTube" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="flowSheet.gastrointestinal.bowelSounds">
                <Form.Label column sm="2">Bowel Sounds:</Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="flowSheet.gastrointestinal.bowelSounds" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="flowSheet.gastrointestinal.mouth">
                <Form.Label column sm="2">Mouth:</Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="flowSheet.gastrointestinal.mouth" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="flowSheet.gastrointestinal.stools">
                <Form.Label column sm="2">Stools:</Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="flowSheet.gastrointestinal.stools" />
                </Col>
            </Form.Group>

            <h2>Skin</h2>
            <Form.Group as={Row} controlId="flowSheet.skin.color">
                <Form.Label column sm="2">Color:</Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="flowSheet.skin.color" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="flowSheet.skin.condition">
                <Form.Label column sm="2">Condition:</Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="flowSheet.skin.condition" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="flowSheet.skin.temperature">
                <Form.Label column sm="2">Temperature:</Form.Label>
                <Col sm="10">
                    <Form.Control type="number" min={96} max={102} name="flowSheet.skin.temperature" />
                </Col>
            </Form.Group>

            <h2>Urinary Output</h2>
            <Form.Group as={Row} controlId="flowSheet.urinaryOutput.voiding">
                <Form.Label column sm="2">Voiding:</Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="flowSheet.urinaryOutput.voiding" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="flowSheet.urinaryOutput.catheterization">
                <Form.Label column sm="2">Catheterization:</Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="flowSheet.urinaryOutput.catheterization" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="flowSheet.urinaryOutput.adls">
                <Form.Label column sm="2">ADLs:</Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="flowSheet.urinaryOutput.adls" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="flowSheet.urinaryOutput.diapers">
                <Form.Label column sm="2">Diapers:</Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="flowSheet.urinaryOutput.diapers" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="flowSheet.urinaryOutput.emesis">
                <Form.Label column sm="2">Emesis:</Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="flowSheet.urinaryOutput.emesis" />
                </Col>
            </Form.Group>

            <h2>Equipment</h2>
            <Form.Group as={Row} controlId="flowSheet.equipment.glasses">
                <Form.Label column sm="2">Glasses:</Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="flowSheet.equipment.glasses" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="flowSheet.equipment.splintsOrthotics">
                <Form.Label column sm="2">Splints/Orthotics:</Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="flowSheet.equipment.splintsOrthotics" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="flowSheet.equipment.monitors">
                <Form.Label column sm="2">Monitors:</Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="flowSheet.equipment.monitors" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="flowSheet.equipment.feedingPump">
                <Form.Label column sm="2">Feeding Pump:</Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="flowSheet.equipment.feedingPump" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="flowSheet.equipment.portableSuction">
                <Form.Label column sm="2">Portable Suction:</Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="flowSheet.equipment.portableSuction" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="flowSheet.equipment.hearingAid">
                <Form.Label column sm="2">Hearing Aid:</Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="flowSheet.equipment.hearingAid" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="flowSheet.equipment.oxygen">
                <Form.Label column sm="2">Oxygen:</Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="flowSheet.equipment.oxygen" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="flowSheet.equipment.wheelchair">
                <Form.Label column sm="2">Wheelchair:</Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="flowSheet.equipment.wheelchair" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="flowSheet.equipment.nebulizer">
                <Form.Label column sm="2">Nebulizer:</Form.Label>
                <Col sm="10">
                    <Form.Control type="text" name="flowSheet.equipment.nebulizer" />
                </Col>
            </Form.Group>
</>
  )
}

export default FlowSheet_Old