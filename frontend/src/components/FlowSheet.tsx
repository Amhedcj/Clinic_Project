import React, { useState } from 'react';
import { Form, Button, Row, Col, Container, FloatingLabel, InputGroup, ListGroup, Table, Tooltip, OverlayTrigger } from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';

function FlowSheet(props: any) {
    const tableSeparatorStyle: React.CSSProperties = {
        textAlign: 'center',
        fontSize: '1.4rem',
        fontWeight: 'bold',
        backgroundColor: 'var(--bs-secondary-bg)'
    };

    const renderTooltip = (text: string) => (
        <Tooltip id="button-tooltip">
            {text}
        </Tooltip>
    );

    const [sliderValue1, setSliderValue1] = useState(0);
    const [sliderValue2, setSliderValue2] = useState(0);

    return (
        <>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th></th>
                        <th className='text-center'>AM</th>
                        <th className='text-center'>PM</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Time</td>
                        <td>
                            <Col xs={'auto'}>
                                <InputGroup>
                                    <Form.Control type="time" name="date" />
                                    <Button>Now</Button>
                                </InputGroup>
                            </Col>
                        </td>
                        <td>
                            <Col xs={'auto'}>
                                <InputGroup>
                                    <Form.Control type="time" name="date" /* value={formData.date} onChange={handleChange} */ />
                                    <Button>Now</Button>
                                </InputGroup>
                            </Col>
                        </td>
                    </tr>

                    <tr><td colSpan={3} style={tableSeparatorStyle}>VITAL SIGNS</td></tr>
                    <>
                        <tr>
                            <td>Temperature</td>
                            <td>
                                <InputGroup as={Col} xs={6}>
                                    <Form.Control type="number" min={96} max={102} name="flowSheet.skin.temperature" />
                                    {/* Later can make this a button that changes and auto-converts the current value from the previous unit to the new unit and vice versa */}
                                    <InputGroup.Text>°F</InputGroup.Text>
                                </InputGroup>
                            </td>
                            <td>
                                <InputGroup as={Col} xs={6}>
                                    <Form.Control type="number" min={96} max={102} name="flowSheet.skin.temperature" />
                                    {/* Later can make this a button that changes and auto-converts the current value from the previous unit to the new unit and vice versa */}
                                    <InputGroup.Text>°F</InputGroup.Text>
                                </InputGroup>
                            </td>
                        </tr>
                        <tr>
                            <td>Blood Pressure</td>
                            <td>
                                <InputGroup as={Col}>
                                    <Form.Control type="number" />
                                    <InputGroup.Text>/</InputGroup.Text>
                                    <Form.Control type="number" />
                                </InputGroup>
                            </td>
                            <td>
                                <InputGroup as={Col}>
                                    <Form.Control type="number" />
                                    <InputGroup.Text>/</InputGroup.Text>
                                    <Form.Control type="number" />
                                </InputGroup>
                            </td>
                        </tr>
                        <tr>
                            <td>Heart Rate</td>
                            <td>
                                <InputGroup as={Col}>
                                    <Form.Control type="number" />
                                    <OverlayTrigger placement="auto" delay={{ show: 250, hide: 400 }} overlay={renderTooltip('Beats per minute')}>
                                        <InputGroup.Text>BPM</InputGroup.Text>
                                    </OverlayTrigger>
                                </InputGroup>
                            </td>
                            <td>
                                <InputGroup as={Col}>
                                    <Form.Control type="number" />
                                    <OverlayTrigger placement="auto" delay={{ show: 250, hide: 400 }} overlay={renderTooltip('Beats per minute')}>
                                        <InputGroup.Text>BPM</InputGroup.Text>
                                    </OverlayTrigger>
                                </InputGroup>
                            </td>
                        </tr>
                        <tr>
                            <td>Respiratory Rate</td>
                            <td>
                                <InputGroup as={Col}>
                                    <Form.Control type="number" />
                                    <OverlayTrigger placement="auto" delay={{ show: 250, hide: 400 }} overlay={renderTooltip('Breaths per minute')}>
                                        <InputGroup.Text>BPM</InputGroup.Text>
                                    </OverlayTrigger>
                                </InputGroup>
                            </td>
                            <td>
                                <InputGroup as={Col}>
                                    <Form.Control type="number" />
                                    <OverlayTrigger placement="auto" delay={{ show: 250, hide: 400 }} overlay={renderTooltip('Breaths per minute')}>
                                        <InputGroup.Text>BPM</InputGroup.Text>
                                    </OverlayTrigger>
                                </InputGroup>
                            </td>
                        </tr>
                        <tr>
                            <td>Pain Scale 0-10</td>
                            <td>
                                {/* <RangeSlider value={sliderValue1} min={0} max={10} onChange={(e:any)=>setSliderValue1(e.target.value)} /> */}
                                <Form.Group>
                                    <InputGroup>
                                        {/* <Col xs="5"> */}
                                        <InputGroup.Text>0</InputGroup.Text>
                                        <RangeSlider
                                            min={0}
                                            max={10}
                                            value={sliderValue1}
                                            onChange={(e: any) => setSliderValue1(e.target.value)}
                                        />
                                        {/* </Col> */}
                                        <InputGroup.Text>10</InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                            </td>
                            <td>
                                <Form.Group>
                                    <InputGroup>
                                        <InputGroup.Text>0</InputGroup.Text>
                                        <RangeSlider
                                            min={0}
                                            max={10}
                                            value={sliderValue2}
                                            onChange={(e: any) => setSliderValue2(e.target.value)}
                                        />
                                        <InputGroup.Text>10</InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                            </td>
                        </tr>
                    </>

                    <tr><td colSpan={3} style={tableSeparatorStyle}>NEUROLOGICAL</td></tr>
                    <>
                        <tr>
                            <td>Level of Consc.</td>
                            <td>
                                <Form.Group>
                                    <InputGroup>
                                        <InputGroup.Text>3</InputGroup.Text>
                                        <RangeSlider
                                            min={3}
                                            max={15}
                                            value={props.state.levelOfConsciousness_am}
                                            onChange={(e: any) => props.setState({ ...props.state, levelOfConsciousness_am: e.target.value })}
                                        />
                                        <InputGroup.Text>15</InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                            </td>
                            <td>
                                <Form.Group>
                                    <InputGroup>
                                        <InputGroup.Text>3</InputGroup.Text>
                                        <RangeSlider
                                            min={3}
                                            max={15}
                                            value={props.state.levelOfConsciousness_pm}
                                            onChange={(e: any) => props.setState({ ...props.state, levelOfConsciousness_pm: e.target.value })}
                                        />
                                        <InputGroup.Text>15</InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                            </td>
                        </tr>

                        <tr>
                            <td>Activity</td>
                            <td></td>
                            <td></td>
                        </tr>

                    </>

                    <tr><td colSpan={3} style={tableSeparatorStyle}>RESPIRATORY</td></tr>
                    <>
                        <tr>
                            <td>Effort</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>--Breath sounds</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>FIO2/LxM</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>SaO2</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>CARDIAC</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Heart sounds</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Rhythm</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Peripheral Pulse</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Capillary Refill</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </>

                    <tr><td colSpan={3} style={tableSeparatorStyle}>GASTROINTESTINAL</td></tr>
                    <>
                        <tr>
                            <td>Abdomen</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>G-tube/J-tube</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Bowel Sounds</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Mouth</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Stools</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </>

                    <tr><td colSpan={3} style={tableSeparatorStyle}>SKIN</td></tr>
                    <>
                        <tr>
                            <td>Color</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Condition</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Temperature</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </>

                    <tr><td colSpan={3} style={tableSeparatorStyle}>URINARY/OUTPUT</td></tr>
                    <>
                        <tr>
                            <td>Voiding Q/S</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Catheterization</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>ADL's</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Diapers</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Emesis</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </>

                    <tr><td colSpan={3} style={tableSeparatorStyle}>EQUIPMENT</td></tr>
                    <>
                        <tr>
                            <td>Glasses</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Splints/Orthotics</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Monitors</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Feeding Pump</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Portable Suction</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Hearing Aid</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Oxygen</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Wheelchair</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Nebulizer</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </>
                </tbody>
            </Table>

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

export default FlowSheet