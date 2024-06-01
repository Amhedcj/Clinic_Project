import React, { useState } from 'react';
import { Form, Button, Row, Col, Container, FloatingLabel, InputGroup, ListGroup, Table, Tooltip, OverlayTrigger } from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';
import CollapsedRadioGroup from './CollapsedRadioGroup';
import { setNestedState } from '../utils/utils';
import AdmissionData from '../types/AdmissionData';

function FlowSheet(props: {state: AdmissionData, setFormProp: Function}) {
    const tableSeparatorStyle: React.CSSProperties = {
        textAlign: 'center',
        fontSize: '1.4rem',
        fontWeight: 'bold',
        backgroundColor: 'var(--bs-secondary-bg)'
    };

    const labelCellStyle: React.CSSProperties = { verticalAlign: 'middle' };

    const renderTooltip = (text: string) => (
        <Tooltip id="button-tooltip">
            {text}
        </Tooltip>
    );

    const [sliderValue1, setSliderValue1] = useState(0);
    const [sliderValue2, setSliderValue2] = useState(0);

    const nums = (min: number, max: number) => Array.from({ length: max - min + 1 }, (_, i) => i + min);


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
                        <td style={labelCellStyle}>Time</td>
                        <td>
                            <Col xs={'auto'}>
                                <InputGroup>
                                    <Form.Control type="time" name='arrival.time' value={props.state.arrival.time} onChange={e => props.setFormProp(e.target.name, e.target.value)} />
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
                            <td style={labelCellStyle}>Temperature</td>
                            <td>
                                <InputGroup as={Col} xs={6}>
                                    <Form.Control type="number" min={96} max={102} name="flowSheet.am.temperature" />
                                    {/* Later can make this a button that changes and auto-converts the current value from the previous unit to the new unit and vice versa */}
                                    <InputGroup.Text>°F</InputGroup.Text>
                                </InputGroup>
                            </td>
                            <td>
                                <InputGroup as={Col} xs={6}>
                                    <Form.Control type="number" min={96} max={102} name="flowSheet.pm.temperature" />
                                    {/* Later can make this a button that changes and auto-converts the current value from the previous unit to the new unit and vice versa */}
                                    <InputGroup.Text>°F</InputGroup.Text>
                                </InputGroup>
                            </td>
                        </tr>
                        <tr>
                            <td style={labelCellStyle}>Blood Pressure</td>
                            <td>
                                <InputGroup as={Col}>
                                    <Form.Control style={{textAlign:'right'}} type="number" min={60} max={130} />
                                    <InputGroup.Text>/</InputGroup.Text>
                                    <Form.Control type="number" min={35} max={90} />
                                </InputGroup>
                            </td>
                            <td>
                                <InputGroup as={Col}>
                                    <Form.Control style={{textAlign:'right'}} type="number" min={60} max={130} />
                                    <InputGroup.Text>/</InputGroup.Text>
                                    <Form.Control type="number" min={35} max={90} />
                                </InputGroup>
                            </td>
                        </tr>
                        <tr>
                            <td style={labelCellStyle}>Heart Rate</td>
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
                            <td style={labelCellStyle}>Respiratory Rate</td>
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
                            <td style={labelCellStyle}>Pain Scale 0-10</td>
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
                            <td style={labelCellStyle}>Level of Consc.</td>
                            <td>
                                <Form.Group>
                                    <CollapsedRadioGroup as={Col} xs={12} name='flowsheetAmLevelOfConsciousnessGroup' exposedOptions={99} options={[{label: 'A', value: 'a'}, {label: 'A/O', value: 'a/o'}]} state={props.state.flowSheet.am.neurological.levelOfConsciousness} setState={(x: any)=>props.setFormProp('flowSheet.am.neurological.levelOfConsciousness', x)} />
                                </Form.Group>
                            </td>
                            <td>
                                <Form.Group>
                                    <CollapsedRadioGroup as={Col} xs={12} name='flowsheetPmLevelOfConsciousnessGroup' exposedOptions={99} options={[{label: 'A', value: 'a'}, {label: 'A/O', value: 'a/o'}]} state={props.state.flowSheet.pm.neurological.levelOfConsciousness} setState={(x: any)=>props.setFormProp('flowSheet.pm.neurological.levelOfConsciousness', x)} />
                                </Form.Group>
                            </td>
                        </tr>

                        <tr>
                            <td style={labelCellStyle}>Activity</td>
                            <td>
                                <CollapsedRadioGroup as={Col} xs={12} name='flowsheetAmActivityGroup' exposedOptions={99} options={[{label: 'WNL', value: 'wnl'}, {label: 'Limited', value: 'limited'}]} state={props.state.flowSheet.am.neurological.activity} setState={(x: any)=>props.setFormProp('flowSheet.am.neurological.activity', x)} />
                            </td>
                            <td>
                                <CollapsedRadioGroup as={Col} xs={12} name='flowsheetPmActivityGroup' exposedOptions={99} options={[{label: 'WNL', value: 'wnl'}, {label: 'Limited', value: 'limited'}]} state={props.state.flowSheet.pm.neurological.activity} setState={(x: any)=>props.setFormProp('flowSheet.pm.neurological.activity', x)} />
                            </td>
                        </tr>

                    </>

                    <tr><td colSpan={3} style={tableSeparatorStyle}>RESPIRATORY</td></tr>
                    <>
                        <tr>
                            <td style={labelCellStyle}>Effort</td>
                            <td>
                                <CollapsedRadioGroup as={Col} xs={12} name='flowsheetAmRespiratoryEffortGroup' exposedOptions={99} options={[{label: 'WNL', value: 'wnl'}, {label: 'Limited', value: 'limited'}]} state={props.state.flowSheet.am.respiratory.effort} setState={(x: any)=>props.setFormProp('flowSheet.am.respiratory.effort', x)} />
                            </td>
                            <td>
                                <CollapsedRadioGroup as={Col} xs={12} name='flowsheetPmRespiratoryEffortGroup' exposedOptions={99} options={[{label: 'WNL', value: 'wnl'}, {label: 'Limited', value: 'limited'}]} state={props.state.flowSheet.pm.respiratory.effort} setState={(x: any)=>props.setFormProp('flowSheet.pm.respiratory.effort', x)} />
                            </td>
                        </tr>
                        <tr>
                            <td style={labelCellStyle}>Breath Sounds</td>
                            <td>
                                <CollapsedRadioGroup as={Col} xs={12} name='flowsheetAmBreathSoundsGroup' exposedOptions={3} options={[{label: 'CTA', value: 'cta'}, {label: 'Rales', value: 'rales'}, {label: 'Wheeze', value: 'wheeze'}, {label: 'Extra', value: 'extra1'}, {label: 'Extra', value: 'extra2'}, {label: 'Extra', value: 'extra3'}]} state={props.state.flowSheet.pm.respiratory.breathSounds} setState={(x: any)=>props.setFormProp('flowSheet.pm.respiratory.breathSounds', x)} />
                            </td>
                            <td>
                                <CollapsedRadioGroup as={Col} xs={12} name='flowsheetPmBreathSoundsGroup' exposedOptions={3} options={[{label: 'CTA', value: 'cta'}, {label: 'Rales', value: 'rales'}, {label: 'Wheeze', value: 'wheeze'}, {label: 'Extra', value: 'extra1'}, {label: 'Extra', value: 'extra2'}, {label: 'Extra', value: 'extra3'}]} state={props.state.flowSheet.am.respiratory.breathSounds} setState={(x: any)=>props.setFormProp('flowSheet.am.respiratory.breathSounds', x)} />
                            </td>
                        </tr>
                        <tr>
                            <td style={labelCellStyle}>FIO2/LxM</td>
                            <td>
                                <Form.Control type="text" />
                            </td>
                            <td>
                                <Form.Control type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td style={labelCellStyle}>SaO2</td>
                            <td>
                                <InputGroup as={Col} xs={6}>
                                    <Form.Control type="number" min={85} max={100} name="flowSheet.skin.temperature" />
                                    {/* Later can make this a button that changes and auto-converts the current value from the previous unit to the new unit and vice versa */}
                                    <InputGroup.Text>%</InputGroup.Text>
                                </InputGroup>
                            </td>
                            <td>
                                <InputGroup as={Col} xs={6}>
                                    <Form.Control type="number" min={85} max={100} name="flowSheet.skin.temperature" />
                                    {/* Later can make this a button that changes and auto-converts the current value from the previous unit to the new unit and vice versa */}
                                    <InputGroup.Text>%</InputGroup.Text>
                                </InputGroup>
                            </td>
                        </tr>
                    </>
                    
                    <tr><td colSpan={3} style={tableSeparatorStyle}>CARDIAC</td></tr>
                    <>
                        <tr>
                            <td style={labelCellStyle}>Heart Sounds</td>
                            <td>
                                <CollapsedRadioGroup as={Col} xs={12} name='flowsheetAmHeartSoundsGroup' exposedOptions={3} options={[{label: 'Regular', value: 'regular'}, {label: 'Irregular', value: 'irregular'}, {label: 'Murmur', value: 'murmur'}, {label: 'Extra', value: 'extra1'}, {label: 'Extra', value: 'extra2'}, {label: 'Extra', value: 'extra3'}]} state={props.state.flowSheet.am.cardiac.heartSounds} setState={(x: any)=>props.setFormProp('flowSheet.am.cardiac.heartSounds', x)} />
                            </td>
                            <td>
                                <CollapsedRadioGroup as={Col} xs={12} name='flowsheetPmHeartSoundsGroup' exposedOptions={3} options={[{label: 'Regular', value: 'regular'}, {label: 'Irregular', value: 'irregular'}, {label: 'Murmur', value: 'murmur'}, {label: 'Extra', value: 'extra1'}, {label: 'Extra', value: 'extra2'}, {label: 'Extra', value: 'extra3'}]} state={props.state.flowSheet.pm.cardiac.heartSounds} setState={(x: any)=>props.setFormProp('flowSheet.pm.cardiac.heartSounds', x)} />
                            </td>
                        </tr>
                        <tr>
                            <td style={labelCellStyle}>Rhythm</td>
                            <td>
                                <CollapsedRadioGroup as={Col} xs={12} name='flowsheetAmRhythmGroup' exposedOptions={2} options={[{label: 'Normal', value: 'normal'}, {label: 'Abnormal', value: 'abnormal'}, {label: 'Extra', value: 'extra1'}, {label: 'Extra', value: 'extra2'}, {label: 'Extra', value: 'extra3'}]} state={props.state.flowSheet.am.cardiac.rhythm} setState={(x: any)=>props.setFormProp('flowSheet.am.cardiac.rhythm', x)} />
                            </td>
                            <td>
                                <CollapsedRadioGroup as={Col} xs={12} name='flowsheetPmRhythmGroup' exposedOptions={2} options={[{label: 'Normal', value: 'normal'}, {label: 'Abnormal', value: 'abnormal'}, {label: 'Extra', value: 'extra1'}, {label: 'Extra', value: 'extra2'}, {label: 'Extra', value: 'extra3'}]} state={props.state.flowSheet.pm.cardiac.rhythm} setState={(x: any)=>props.setFormProp('flowSheet.pm.cardiac.rhythm', x)} />
                            </td>
                        </tr>
                        <tr>
                            <td style={labelCellStyle}>Peripheral Pulse</td>
                            <td>
                                {/* <InputGroup as={Col}>
                                    <Form.Control type="number" />
                                    <OverlayTrigger placement="auto" delay={{ show: 250, hide: 400 }} overlay={renderTooltip('Beats per minute')}>
                                        <InputGroup.Text>BPM</InputGroup.Text>
                                    </OverlayTrigger>
                                </InputGroup> */}
                                <CollapsedRadioGroup as={Col} xs={12} name='flowsheetAmPeripheralPulseGroup' exposedOptions={99} options={[{label: 'Present', value: 'present'}, {label: 'Low', value: 'low'}, {label: 'Absent', value: 'absent'}]} state={props.state.flowSheet.am.cardiac.peripheralPulse} setState={(x: any)=>props.setFormProp('flowSheet.am.cardiac.peripheralPulse', x)} />
                            </td>
                            <td>
                                {/* <InputGroup as={Col}>
                                    <Form.Control type="number" />
                                    <OverlayTrigger placement="auto" delay={{ show: 250, hide: 400 }} overlay={renderTooltip('Beats per minute')}>
                                        <InputGroup.Text>BPM</InputGroup.Text>
                                    </OverlayTrigger>
                                </InputGroup> */}
                                <CollapsedRadioGroup as={Col} xs={12} name='flowsheetPmPeripheralPulseGroup' exposedOptions={99} options={[{label: 'Present', value: 'present'}, {label: 'Low', value: 'low'}, {label: 'Absent', value: 'absent'}]} state={props.state.flowSheet.pm.cardiac.peripheralPulse} setState={(x: any)=>props.setFormProp('flowSheet.pm.cardiac.peripheralPulse', x)} />
                            </td>
                        </tr>
                        <tr>
                            <td style={labelCellStyle}>Capillary Refill</td>
                            <td>
                                <CollapsedRadioGroup as={Col} xs={12} name='flowsheetAmCapillaryRefillGroup' exposedOptions={99} options={[{label: '< 3s', value: '<3s'}, {label: '> 3s', value: '>3s'}]} state={props.state.flowSheet.am.cardiac.capillaryRefill} setState={(x: any)=>props.setFormProp('flowSheet.am.cardiac.capillaryRefill', x)} />
                            </td>
                            <td>
                                <CollapsedRadioGroup as={Col} xs={12} name='flowsheetPmCapillaryRefillGroup' exposedOptions={99} options={[{label: '< 3s', value: '<3s'}, {label: '> 3s', value: '>3s'}]} state={props.state.flowSheet.pm.cardiac.capillaryRefill} setState={(x: any)=>props.setFormProp('flowSheet.pm.cardiac.capillaryRefill', x)} />
                            </td>
                        </tr>
                        <tr>
                            <td style={labelCellStyle}>Color</td>
                            <td>
                                <CollapsedRadioGroup as={Col} xs={12} name='flowsheetAmCardiacColorGroup' exposedOptions={99} options={[{label: 'Normal', value: 'normal'}, {label: 'Abnormal', value: 'abnormal'}]} state={props.state.flowSheet.am.cardiac.color} setState={(x: any)=>props.setFormProp('flowSheet.am.cardiac.color', x)} />
                            </td>
                            <td>
                                <CollapsedRadioGroup as={Col} xs={12} name='flowsheetPmCardiacColorGroup' exposedOptions={99} options={[{label: 'Normal', value: 'normal'}, {label: 'Abnormal', value: 'abnormal'}]} state={props.state.flowSheet.pm.cardiac.color} setState={(x: any)=>props.setFormProp('flowSheet.pm.cardiac.color', x)} />
                            </td>
                        </tr>
                    </>

                    <tr><td colSpan={3} style={tableSeparatorStyle}>GASTROINTESTINAL</td></tr>
                    <>
                        <tr>
                            <td style={labelCellStyle}>Abdomen</td>
                            <td>
                                <CollapsedRadioGroup as={Col} xs={12} name='flowsheetAmAbdomenGroup' exposedOptions={3} options={[{label: 'Soft', value: 'soft'}, {label: 'Round', value: 'round'}, {label: 'Firm', value: 'firm'}, {label: 'Extra', value: 'extra1'}, {label: 'Extra', value: 'extra2'}, {label: 'Extra', value: 'extra3'}]} state={props.state.flowSheet.am.gastrointestinal.abdomen} setState={(x: any)=>props.setFormProp('flowSheet.am.gastrointestinal.abdomen', x)} />
                            </td>
                            <td>
                                <CollapsedRadioGroup as={Col} xs={12} name='flowsheetPmAbdomenGroup' exposedOptions={3} options={[{label: 'Soft', value: 'soft'}, {label: 'Round', value: 'round'}, {label: 'Firm', value: 'firm'}, {label: 'Extra', value: 'extra1'}, {label: 'Extra', value: 'extra2'}, {label: 'Extra', value: 'extra3'}]} state={props.state.flowSheet.pm.gastrointestinal.abdomen} setState={(x: any)=>props.setFormProp('flowSheet.pm.gastrointestinal.abdomen', x)} />
                            </td>
                        </tr>
                        <tr>
                            <td style={labelCellStyle}>G-tube/J-tube</td>
                            <td>
                                <CollapsedRadioGroup as={Col} xs={12} name='flowsheetAmGTubeJTubeGroup' exposedOptions={99} options={[{label: 'Yes', value: 'yes'}, {label: 'N/A', value: 'n/a'}]} state={props.state.flowSheet.am.gastrointestinal.gTubeJTube} setState={(x: any)=>props.setFormProp('flowSheet.am.gastrointestinal.gTubeJTube', x)} />
                            </td>
                            <td>
                                <CollapsedRadioGroup as={Col} xs={12} name='flowsheetPmGTubeJTubeGroup' exposedOptions={99} options={[{label: 'Yes', value: 'yes'}, {label: 'N/A', value: 'n/a'}]} state={props.state.flowSheet.pm.gastrointestinal.gTubeJTube} setState={(x: any)=>props.setFormProp('flowSheet.pm.gastrointestinal.gTubeJTube', x)} />
                            </td>
                        </tr>
                        <tr>
                            <td style={labelCellStyle}>Bowel Sounds</td>
                            <td>
                                <CollapsedRadioGroup as={Col} xs={12} name='flowsheetAmBowelSoundsGroup' exposedOptions={99} options={[{label: 'Present', value: 'present'}, {label: 'Absent', value: 'absent'}, {label: 'Hypoactive', value: 'hypoactive'}, {label: 'Hyperactive', value: 'hyperactive'}]} state={props.state.flowSheet.am.gastrointestinal.bowelSounds} setState={(x: any)=>props.setFormProp('flowSheet.am.gastrointestinal.bowelSounds', x)} />
                            </td>
                            <td>
                                <CollapsedRadioGroup as={Col} xs={12} name='flowsheetPmBowelSoundsGroup' exposedOptions={99} options={[{label: 'Present', value: 'present'}, {label: 'Absent', value: 'absent'}, {label: 'Hypoactive', value: 'hypoactive'}, {label: 'Hyperactive', value: 'hyperactive'}]} state={props.state.flowSheet.pm.gastrointestinal.bowelSounds} setState={(x: any)=>props.setFormProp('flowSheet.pm.gastrointestinal.bowelSounds', x)} />
                            </td>
                        </tr>
                        <tr>
                            <td style={labelCellStyle}>Mouth</td>
                            <td>
                                <CollapsedRadioGroup as={Col} xs={12} name='flowsheetAmMouthGroup' exposedOptions={99} options={[{label: 'Moist', value: 'moist'}, {label: 'Dry', value: 'dry'}]} state={props.state.flowSheet.am.gastrointestinal.mouth} setState={(x: any)=>props.setFormProp('flowSheet.am.gastrointestinal.mouth', x)} />
                            </td>
                            <td>
                                <CollapsedRadioGroup as={Col} xs={12} name='flowsheetPmMouthGroup' exposedOptions={99} options={[{label: 'Moist', value: 'moist'}, {label: 'Dry', value: 'dry'}]} state={props.state.flowSheet.pm.gastrointestinal.mouth} setState={(x: any)=>props.setFormProp('flowSheet.pm.gastrointestinal.mouth', x)} />
                            </td>
                        </tr>
                        <tr>
                            <td style={labelCellStyle}>Stools</td>
                            <td>
                                <CollapsedRadioGroup as={Col} xs={12} name='flowsheetAmStoolsGroup' exposedOptions={4} options={nums(0, 20).map((x, i) => {return {label: `${x}`, value: `${x}`}})} dropdownDefaultLabel='More' state={props.state.flowSheet.am.gastrointestinal.stools} setState={(x: any)=>props.setFormProp('flowSheet.am.gastrointestinal.stools', x)} />
                            </td>
                            <td>
                                <CollapsedRadioGroup as={Col} xs={12} name='flowsheetPmStoolsGroup' exposedOptions={4} options={nums(0, 20).map((x, i) => {return {label: `${x}`, value: `${x}`}})} dropdownDefaultLabel='More' state={props.state.flowSheet.pm.gastrointestinal.stools} setState={(x: any)=>props.setFormProp('flowSheet.pm.gastrointestinal.stools', x)} />
                            </td>
                        </tr>
                    </>

                    <tr><td colSpan={3} style={tableSeparatorStyle}>SKIN</td></tr>
                    <>
                        <tr>
                            <td style={labelCellStyle}>Color</td>
                            <td>
                                <CollapsedRadioGroup as={Col} xs={12} name='flowsheetAmSkinColorGroup' exposedOptions={2} options={[{label: 'Normal', value: 'normal'}, {label: 'Abnormal', value: 'abnormal'}, {label: 'Extra', value: 'extra1'}, {label: 'Extra', value: 'extra2'}, {label: 'Extra', value: 'extra3'}]} state={props.state.flowSheet.am.skin.color} setState={(x: any)=>props.setFormProp('flowSheet.am.skin.color', x)} />
                            </td>
                            <td>
                                <CollapsedRadioGroup as={Col} xs={12} name='flowsheetPmSkinColorGroup' exposedOptions={2} options={[{label: 'Normal', value: 'normal'}, {label: 'Abnormal', value: 'abnormal'}, {label: 'Extra', value: 'extra1'}, {label: 'Extra', value: 'extra2'}, {label: 'Extra', value: 'extra3'}]} state={props.state.flowSheet.pm.skin.color} setState={(x: any)=>props.setFormProp('flowSheet.pm.skin.color', x)} />
                            </td>
                        </tr>
                        <tr>
                            <td style={labelCellStyle}>Condition</td>
                            <td>
                                <CollapsedRadioGroup as={Col} xs={12} name='flowsheetAmSkinConditionGroup' exposedOptions={4} options={[{label: 'Intact', value: 'intact'}, {label: 'Dry', value: 'dry'}, {label: 'Moist', value: 'moist'}, {label: 'Dusky', value: 'dusky'}, {label: 'Cyanotic', value: 'cyanotic'}, {label: 'Jaundice', value: 'jaundice'}, {label: 'Mottled', value: 'mottled'}]} state={props.state.flowSheet.am.skin.condition} setState={(x: any)=>props.setFormProp('flowSheet.am.skin.condition', x)} />
                            </td>
                            <td>
                                <CollapsedRadioGroup as={Col} xs={12} name='flowsheetPmSkinConditionGroup' exposedOptions={4} options={[{label: 'Intact', value: 'intact'}, {label: 'Dry', value: 'dry'}, {label: 'Moist', value: 'moist'}, {label: 'Dusky', value: 'dusky'}, {label: 'Cyanotic', value: 'cyanotic'}, {label: 'Jaundice', value: 'jaundice'}, {label: 'Mottled', value: 'mottled'}]} state={props.state.flowSheet.pm.skin.condition} setState={(x: any)=>props.setFormProp('flowSheet.pm.skin.condition', x)} />
                            </td>
                        </tr>
                        <tr>
                            <td style={labelCellStyle}>Temperature</td>
                            <td>
                                {/* <InputGroup as={Col} xs={6}> */}
                                    {/* <Form.Control type="number" min={96} max={102} name="flowSheet.skin.temperature" /> */}
                                    {/* Later can make this a button that changes and auto-converts the current value from the previous unit to the new unit and vice versa */}
                                    {/* <InputGroup.Text>°F</InputGroup.Text> */}
                                {/* </InputGroup> */}
                                    <CollapsedRadioGroup as={Col} xs={12} name='flowsheetAmSkinTempGroup' exposedOptions={99} options={[{label: 'Warm', value: 'warm'}, {label: 'Cool', value: 'cool'}, {label: 'Hot', value: 'hot'}]} state={props.state.flowSheet.am.skin.temperature} setState={(x: any)=>props.setFormProp('flowSheet.am.skin.temperature', x)} />
                            </td>
                            <td>
                                {/* <InputGroup as={Col} xs={6}> */}
                                    {/* <Form.Control type="number" min={96} max={102} name="flowSheet.skin.temperature" /> */}
                                    {/* Later can make this a button that changes and auto-converts the current value from the previous unit to the new unit and vice versa */}
                                    {/* <InputGroup.Text>°F</InputGroup.Text> */}
                                {/* </InputGroup> */}
                                    <CollapsedRadioGroup as={Col} xs={12} name='flowsheetPmSkinTempGroup' exposedOptions={99} options={[{label: 'Warm', value: 'warm'}, {label: 'Cool', value: 'cool'}, {label: 'Hot', value: 'hot'}]} state={props.state.flowSheet.pm.skin.temperature} setState={(x: any)=>props.setFormProp('flowSheet.pm.skin.temperature', x)} />
                            </td>
                        </tr>
                    </>

                    <tr><td colSpan={3} style={tableSeparatorStyle}>URINARY/OUTPUT</td></tr>
                    <>
                        <tr>
                            <td style={labelCellStyle}>Voiding Q/S</td>
                            <td>
                                <InputGroup as={Col} xs={6}>
                                    <Form.Control type="number" min={0} max={20} name="flowSheet.skin.temperature" />
                                    {/* Later can make this a button that changes and auto-converts the current value from the previous unit to the new unit and vice versa */}
                                    <InputGroup.Text>mL/s</InputGroup.Text>
                                </InputGroup>
                            </td>
                            <td>
                                <InputGroup as={Col} xs={6}>
                                    <Form.Control type="number" min={0} max={20} name="flowSheet.skin.temperature" />
                                    {/* Later can make this a button that changes and auto-converts the current value from the previous unit to the new unit and vice versa */}
                                    <InputGroup.Text>mL/s</InputGroup.Text>
                                </InputGroup>
                            </td>
                        </tr>
                        <tr>
                            <td style={labelCellStyle}>Catheterization</td>
                            <td>
                                <Form.Control type="text" />
                            </td>
                            <td>
                                <Form.Control type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td style={labelCellStyle}>ADL's</td>
                            <td>
                                <Form.Control type="text" />
                            </td>
                            <td>
                                <Form.Control type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td style={labelCellStyle}>Diapers</td>
                            <td>
                                <CollapsedRadioGroup as={Col} xs={12} name='flowsheetAmDiapersGroup' exposedOptions={4} options={nums(0, 20).map((x, i) => {return {label: x == 0 ? 'None' : `${x}`, value: `${x}`}})} dropdownDefaultLabel='More' state={props.state.flowSheet.am.urinaryOutput.diapers} setState={(x: any)=>props.setFormProp('flowSheet.am.urinaryOutput.diapers', x)} />
                            </td>
                            <td>
                                <CollapsedRadioGroup as={Col} xs={12} name='flowsheetPmDiapersGroup' exposedOptions={4} options={nums(0, 20).map((x, i) => {return {label: x == 0 ? 'None' : `${x}`, value: `${x}`}})} dropdownDefaultLabel='More' state={props.state.flowSheet.pm.urinaryOutput.diapers} setState={(x: any)=>props.setFormProp('flowSheet.pm.urinaryOutput.diapers', x)} />
                            </td>
                        </tr>
                        <tr>
                            <td style={labelCellStyle}>Emesis</td>
                            <td>
                                <Form.Control type="number" min={1} max={20} />
                            </td>
                            <td>
                                <Form.Control type="number" min={1} max={20} />
                            </td>
                        </tr>
                    </>

                    <tr><td colSpan={3} style={tableSeparatorStyle}>EQUIPMENT</td></tr>
                    <>
                        <tr>
                            <td style={labelCellStyle}>Glasses</td>
                            <td>
                                <Form.Control type="text" />
                            </td>
                            <td>
                                <Form.Control type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td style={labelCellStyle}>Splints/Orthotics</td>
                            <td>
                                <Form.Control type="text" />
                            </td>
                            <td>
                                <Form.Control type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td style={labelCellStyle}>Monitors</td>
                            <td>
                                <Form.Control type="text" />
                            </td>
                            <td>
                                <Form.Control type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td style={labelCellStyle}>Feeding Pump</td>
                            <td>
                                <Form.Control type="text" />
                            </td>
                            <td>
                                <Form.Control type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td style={labelCellStyle}>Portable Suction</td>
                            <td>
                                <Form.Control type="text" />
                            </td>
                            <td>
                                <Form.Control type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td style={labelCellStyle}>Hearing Aid</td>
                            <td>
                                <Form.Control type="text" />
                            </td>
                            <td>
                                <Form.Control type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td style={labelCellStyle}>Oxygen</td>
                            <td>
                                <Form.Control type="text" />
                            </td>
                            <td>
                                <Form.Control type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td style={labelCellStyle}>Wheelchair</td>
                            <td>
                                <Form.Control type="text" />
                            </td>
                            <td>
                                <Form.Control type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td style={labelCellStyle}>Nebulizer</td>
                            <td>
                                <Form.Control type="text" />
                            </td>
                            <td>
                                <Form.Control type="text" />
                            </td>
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