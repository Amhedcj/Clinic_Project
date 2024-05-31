import Table from 'react-bootstrap/Table';
import { Form, Button, Row, Col, Container, FloatingLabel, InputGroup, ListGroup, Badge, ButtonGroup, ToggleButton } from 'react-bootstrap';
import { useState } from 'react';

function PrecautionsTable() {
    const [data, setData] = useState([{ procedure: '0' as String }]);

    const size = undefined;

    const removeAtAndCopy = (data: Array<any>, idx: Number) => {
        idx = Math.round(Number(idx));
        const newData: Array<any> = [];

        for (let i = 0; i < data.length; i++) {
            if (i != idx) {
                newData.push(data[i]);
            }
        }

        return newData;
    };

    const CheckButton = (props: any) => {
        const [b, setB] = useState(false);

        return (
            <ToggleButton id='' type='checkbox' value='' checked={b} onClick={() => { setB(!b) }} variant='outline-primary'>
                {props.children}
            </ToggleButton>
        );
    };

    const buttonGroupStyle: any = {
        display: 'flex',
        flexDirection: 'column',
        gap: 0, // No gap between the button groups
        width: '100%', // Ensure the ButtonGroup takes full width
      };
      
      const horizontalButtonGroupStyle = {
        display: 'flex',
        width: '100%',
      };
      
      const flexButtonStyle = {
        flex: '1 1 auto', // Flex grow, shrink, and basis
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px', // Ensure the button contents are centered and padded
        margin: 0, // Remove any default margin
        overflow: 'hidden', // Hide overflow text
        whiteSpace: 'nowrap', // Prevent text wrapping
        textOverflow: 'ellipsis', // Add ellipsis for overflow text
      };

    return (
        <>
            {/* <Table striped bordered hover>
        <thead>
            <tr>
                <th colSpan={8} style={{ textAlign: 'center', fontSize: '1.25rem' }}>
                    Precautions
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><Form.Check type='checkbox'/></td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle', fontSize: '1.1rem' }}>U -- Universal</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><Form.Check type='checkbox'/></td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle', fontSize: '1.1rem' }}>AT -- Aseptic Technique</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><Form.Check type='checkbox'/></td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle', fontSize: '1.1rem' }}>ST -- Sterile technique</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><Form.Check type='checkbox'/></td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle', fontSize: '1.1rem' }}>S -- Safety</td>
            </tr>
            <tr>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><Form.Check type='checkbox'/></td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle', fontSize: '1.1rem' }}>W -- Wheelchair Lockers</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><Form.Check type='checkbox'/></td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle', fontSize: '1.1rem' }}>CP -- Clear Pathway</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><Form.Check type='checkbox'/></td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle', fontSize: '1.1rem' }}>SK -- Skin Integrity</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><Form.Check type='checkbox'/></td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle', fontSize: '1.1rem' }}>F -- Fall</td>
            </tr>
            <tr>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><Form.Check type='checkbox'/></td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle', fontSize: '1.1rem' }}>EH -- Elevated Head of Bed</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><Form.Check type='checkbox'/></td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle', fontSize: '1.1rem' }}>FP -- Fowler Position</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><Form.Check type='checkbox'/></td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle', fontSize: '1.1rem' }}>SR -- Said Rails Up</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><Form.Check type='checkbox'/></td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle', fontSize: '1.1rem' }}>B -- Bed Locker</td>
            </tr>
            <tr>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><Form.Check type='checkbox'/></td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle', fontSize: '1.1rem' }}>Cardiac</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><Form.Check type='checkbox'/></td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle', fontSize: '1.1rem' }}>R -- Reflux</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><Form.Check type='checkbox'/></td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle', fontSize: '1.1rem' }}>A -- Aspiration</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><Form.Check type='checkbox'/></td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle', fontSize: '1.1rem' }}>G -- Gastronomy</td>
            </tr>
        </tbody>
    </Table> */}

            {/* <InputGroup size='lg'>
                <CheckButton as={Col} xs={3}>
                    Universal
                </CheckButton>
                <CheckButton as={Col} xs={3}>
                    Aseptic Technique
                </CheckButton>
                <CheckButton as={Col} xs={3}>
                    Sterile Technique
                </CheckButton>
                <CheckButton as={Col} xs={3}>
                    Safety
                </CheckButton>
            </InputGroup> */}

            <ButtonGroup vertical as={Col} xs={12} className='mb-3'>
                <ButtonGroup size={size} as={Col} xs={12}>
                    <CheckButton as={Col} xs={3}>
                        <Badge>U</Badge> Universal
                    </CheckButton>
                    <CheckButton as={Col} xs={3}>
                        <Badge>AT</Badge> Aseptic Technique
                    </CheckButton>
                    <CheckButton as={Col} xs={3}>
                        <Badge>ST</Badge> Sterile Technique
                    </CheckButton>
                    <CheckButton as={Col} xs={3}>
                        <Badge>S</Badge> Safety
                    </CheckButton>
                </ButtonGroup>

                <ButtonGroup size={size}>
                    <CheckButton>
                        <Badge>W</Badge> Wheelchair Lockers
                    </CheckButton>
                    <CheckButton>
                        <Badge>CP</Badge> Clear Pathway
                    </CheckButton>
                    <CheckButton>
                        <Badge>SK</Badge> Skin Integrity
                    </CheckButton>
                    <CheckButton>
                        <Badge>F</Badge> Fall
                    </CheckButton>
                </ButtonGroup>

                <ButtonGroup size={size}>
                    <CheckButton>
                        <Badge>EH</Badge> Elevated Head of Bed
                    </CheckButton>
                    <CheckButton>
                        <Badge>FP</Badge> Fowler Position
                    </CheckButton>
                    <CheckButton>
                        <Badge>SR</Badge> Said Rails Up
                    </CheckButton>
                    <CheckButton>
                        <Badge>B</Badge> Bed Locker
                    </CheckButton>
                </ButtonGroup>

                <ButtonGroup size={size}>
                    <CheckButton>
                        Cardiac
                    </CheckButton>
                    <CheckButton>
                        <Badge>R</Badge> Reflux
                    </CheckButton>
                    <CheckButton>
                        <Badge>A</Badge> Aspiration
                    </CheckButton>
                    <CheckButton>
                        <Badge>G</Badge> Gastronomy
                    </CheckButton>
                </ButtonGroup>
            </ButtonGroup>


        </>
    )
}

export default PrecautionsTable