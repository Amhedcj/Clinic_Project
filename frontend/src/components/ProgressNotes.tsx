import React, { FocusEventHandler, SyntheticEvent, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Button, Col, Collapse, Form, InputGroup, Row, Table } from 'react-bootstrap'
import { CSSTransition } from 'react-transition-group';
import AdmissionData from '../types/AdmissionData'
import CheckButton from './CheckButton';
import '../index.css'

function ProgressNotes(props: {state: AdmissionData, setFormProp: Function}) {
    // const textbox = useRef({} as HTMLTextAreaElement);

    // Modified from Stackoverflow (https://stackoverflow.com/a/73487544)
    function adjustHeight(e: SyntheticEvent<HTMLElement>) {
        if(e && e.currentTarget) {
            const target = e.currentTarget;

            target.style.height = "inherit";
            target.style.height = `${target.scrollHeight}px`;
        }
    }

    function hideEllipsesOnFocus(data: any[], setData: any, index: number) {
        const newData = [...data];

        newData[index].isMultiline = false;
        newData[index].isFocused = true;

        setData(newData);
    }

    function onBlur(e: SyntheticEvent<HTMLElement>) {
        if (e && e.target) {
            // Need to use target here because currentTarget will be null
            const target = e.target as HTMLElement;

            setTimeout(
            () => {
                target.style.height = `2rem`;
            }
            , 50);
        }
    }

    function setIsMultilineOnBlur(e: SyntheticEvent<HTMLElement>, data: any[], setData: any, index: number) {
        const convertRemToPixels = (rem: any) => {
            let remValue;
            const pixelsPerRem = parseFloat(getComputedStyle(document.documentElement).fontSize.replace('px', ''));

            // parseFloat can remove px, rem, etc. from strings on its own (e.g. 30px -> 30 and 1rem -> 1)
            remValue = parseFloat(rem);

            return remValue * pixelsPerRem;
        }

        if(e && e.currentTarget) {
            const target = e.currentTarget;

            const newData = [...data];

            // console.log('scrollHeight: ' + target.scrollHeight);
            // console.log('collapsedHeight: ' + convertRemToPixels('2.25rem'));

            // This assumes the default padding and so can easily break unfortunately...
            if(target.scrollHeight > convertRemToPixels('2.25rem')) {
                // setShowEllipsis(true);
                newData[index].isMultiline = true;
            }
            else {
                // setShowEllipsis(false);
                newData[index].isMultiline = false;
            }

            newData[index].isFocused = false;

            setData(newData);
        }
    }

    const textAreaStyle: React.CSSProperties = {
        // width: "95%",
        // padding: "15px",
        // borderRadius: "5px",
        // transition: 'linear',
        outline: "none",
        resize: "none",
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        // whiteSpace: 'nowrap'
        // transition: 'height 0.5s ease'
    };
    
    const plainTextAreaStyle: React.CSSProperties = {
        // padding: "15px",
        // borderRadius: "5px",
        // outline: "none",
        resize: "none",
        overflow: 'hidden',
        width: 'inherit',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        msTextOverflow: 'ellipsis',
        OTextOverflow: 'ellipsis',
    };

    const tableSeparatorStyle: React.CSSProperties = {
        textAlign: 'center',
        fontSize: '1.4rem',
        fontWeight: 'bold',
        backgroundColor: 'var(--bs-secondary-bg)'
    };
    
    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            props.setFormProp(name, checked);
        }
        else {
            props.setFormProp(name, value);
        }
    };

    const [data1, setData1] = useState([{ procedure: '0' as String }]);
    const [data2, setData2] = useState([{ procedure: '0' as String }]);
    const [data3, setData3] = useState([{ procedure: '0' as String }]);

    const removeAtAndCopy = (data: Array<any>, idx: Number) => {
        idx = Math.round(Number(idx));
        const newData: Array<any> = [];
        
        for(let i = 0; i < data.length; i++)
        {
            if(i !== idx)
            {
                newData.push(data[i]);
            }
        }

        return newData;
    };

    const mapData = (x: any, setX: Function) => {
        return (
            <>
            {
                x.map((obj: any, index: number) => {
                    return (
                        <>
                            <tr>
                                {/* <td>
                                {index === 0 && <Form.Control {...(index === 0 ? props1 : {})} value={index === 0 ? props.state.arrival.date : ''} type="date" />}
                                </td> */}
                                <td><Form.Control plaintext type="time"></Form.Control></td>
                                <td>
                                    {/* rows={1} makes it start out at one line tall */}
                                    {/* <Form.Control as="textarea" rows={1} value={`${data[index].procedure}`} onChange={(e: any) => { const newData = [...data]; newData[index].procedure = e.target.value; setData(newData); }} / > */}

                                    {/* This makes it automatically place an ellipsis but maxWidth needs to be hardcoded and the user has to click twice */}
                                    {/* {
                                        obj.isFocused
                                            ?
                                            <Form.Control key={`notes_${index}`} autoFocus id={`notes_${index}`} as='textarea' rows={1} value={obj.notes} onChange={e => { adjustHeight(e); const newData = [...x]; newData[index].notes = e.target.value; setX(newData); }} style={textAreaStyle} onBlurCapture={(e) => { onBlur(e); setIsMultilineOnBlur(e, x, setX, index) }} onFocusCapture={(e) => { adjustHeight(e); hideEllipsesOnFocus(x, setX, index); }} />
                                            :
                                            <p style={{ ...plainTextAreaStyle, maxWidth: '600px' }} onClick={() => hideEllipsesOnFocus(x, setX, index)}>{obj.notes}</p>
                                    } */}
                                    
                                    {/* This makes it only one click (and the cursor is where they clicked automatically), but it does not have an ellipsis (it doesn't work with Form.Control as textarea) to show that there is more content */}
                                    {
                                        obj.isFocused
                                            ?
                                            <InputGroup>
                                                <Form.Control key={`notes_${index}`} autoFocus id={`notes_${index}`} as='textarea' rows={1} value={obj.notes} onChange={e => { adjustHeight(e); const newData = [...x]; newData[index].notes = e.target.value; setX(newData); }} style={textAreaStyle} onBlurCapture={(e) => { onBlur(e); setIsMultilineOnBlur(e, x, setX, index) }} onFocusCapture={(e) => { adjustHeight(e); hideEllipsesOnFocus(x, setX, index); }} />
                                            </InputGroup>
                                            :
                                            <InputGroup>
                                                <Form.Control plaintext key={`notes_${index}`} id={`notes_${index}`} as='textarea' value={obj.notes} rows={1} onChange={adjustHeight} style={plainTextAreaStyle} onBlurCapture={(e) => { onBlur(e); setIsMultilineOnBlur(e, x, setX, index) }} onFocusCapture={(e) => { adjustHeight(e); hideEllipsesOnFocus(x, setX, index); }} />
                                            </InputGroup>
                                    }

                                </td>
                                <td><Form.Control plaintext type="text"></Form.Control></td>
                                {/* <td className='text-center'> */}
                                    {/* <Button onClick={() => { console.log(`rm idx: ${index}`); const newData = removeAtAndCopy(x, index); setX(newData); }}>-</Button> */}
                                    <td style={{verticalAlign: 'middle'}}>
                                        <p onClick={() => { const newData = removeAtAndCopy(x, index); setX(newData); }} style={{pointerEvents: 'auto', userSelect: 'none', cursor: 'pointer', backgroundColor: 'transparent', textAlign: 'center'}}>❌</p>
                                    </td>
                                {/* </td> */}
                            </tr>
                        </>
                    )
                })
            }

            <tr><td colSpan={5}><Button onClick={() => setX([...x, { procedure: `${x.length}` }])}>+</Button></td></tr>

            </>
        );
    };


    useLayoutEffect(()=> adjustHeight(null as any), []);

    return (
        <>
            <h2 className='text-center mt-4'>Progress Notes {props.state.arrival.date ? `${props.state.arrival.date.split('-')[1]}/${props.state.arrival.date.split('-')[2]}/${props.state.arrival.date.split('-')[0]}` : '<no date>'}</h2>
        <>
        <Row>
            <Table bordered hover>
                <thead>
                    <tr>
                        {/* <th className='text-center col-sm-1'>Date</th> */}
                        <th className='text-center col-sm-1'>Time</th>
                        <th className='text-center col-sm-7'>Notes</th>
                        <th className='text-center col-sm-3'>Nurse Signature</th>
                        <th className='text-center'></th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td colSpan={5} style={tableSeparatorStyle}>DAY</td></tr>

                    {mapData(data1, setData1)}
                    
                    <tr><td colSpan={5} style={tableSeparatorStyle}>MID DAY</td></tr>

                    {mapData(data2, setData2)}

                    {/* <tr><td colSpan={5}><Button onClick={() => setData2([...data2, { procedure: `${data2.length}` }])}>+</Button></td></tr> */}

                    <tr><td colSpan={5} style={tableSeparatorStyle}>NIGHT</td></tr>

                    {mapData(data3, setData3)}

                    {/* <tr><td colSpan={5}><Button onClick={() => setData3([...data3, { procedure: `${data3.length}` }])}>+</Button></td></tr> */}
                </tbody>
            </Table>
        </Row>
        </>




            <br />
            <br />
            <br />

            {/* <Form.Group as={Row} id='progressNotes.date'>
                <Form.Label column sm='2'>Date:</Form.Label>
                <Col sm='10'>
                    <Form.Control type='date' name='progressNotes.date' value={props.state.progressNotes?.date} onChange={handleChange} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} id='progressNotes.time'>
                <Form.Label column sm='2'>Time:</Form.Label>
                <Col sm='10'>
                    <Form.Control type='text' name='progressNotes.time' value={props.state.progressNotes?.time} onChange={handleChange} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} id='progressNotes.notes'>
                <Form.Label column sm='2'>Notes:</Form.Label>
                <Col sm='10'>
                    <Form.Control as='textarea' rows={5} name='progressNotes.notes' value={props.state.progressNotes?.notes} onChange={handleChange} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} id='progressNotes.nurseSignature'>
                <Form.Label column sm='2'>Nurse Signature:</Form.Label>
                <Col sm='10'>
                    <Form.Control type='text' name='progressNotes.nurseSignature' value={props.state.progressNotes?.nurseSignature} onChange={handleChange} />
                </Col>
            </Form.Group> */}


<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

        </>
    )
}

export default ProgressNotes