import Table from 'react-bootstrap/Table';
import { Form, Button, Row, Col, Container, FloatingLabel, InputGroup, ListGroup } from 'react-bootstrap';
import { useState } from 'react';

function PrecautionsTable() {
    const [data, setData] = useState([{ procedure: '0' as String }]);

    const removeAtAndCopy = (data: Array<any>, idx: Number) => {
        idx = Math.round(Number(idx));
        const newData: Array<any> = [];
        
        for(let i = 0; i < data.length; i++)
        {
            if(i != idx)
            {
                newData.push(data[i]);
            }
        }

        return newData;
    };

  return (
    <>
    <Table striped bordered hover>
        <thead>
            <tr>
                <th colSpan={8} style={{ textAlign: 'center', fontSize: '1.25rem' }}>
                    Precautions
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><Form.Check type="checkbox"/></td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle', fontSize: '1.1rem' }}>U -- Universal</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><Form.Check type="checkbox"/></td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle', fontSize: '1.1rem' }}>AT -- Aseptic Technique</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><Form.Check type="checkbox"/></td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle', fontSize: '1.1rem' }}>ST -- Sterile technique</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><Form.Check type="checkbox"/></td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle', fontSize: '1.1rem' }}>S -- Safety</td>
            </tr>
            <tr>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><Form.Check type="checkbox"/></td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle', fontSize: '1.1rem' }}>W -- Wheelchair Lockers</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><Form.Check type="checkbox"/></td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle', fontSize: '1.1rem' }}>CP -- Clear Pathway</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><Form.Check type="checkbox"/></td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle', fontSize: '1.1rem' }}>SK -- Skin Integrity</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><Form.Check type="checkbox"/></td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle', fontSize: '1.1rem' }}>F -- Fall</td>
            </tr>
            <tr>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><Form.Check type="checkbox"/></td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle', fontSize: '1.1rem' }}>EH -- Elevated Head of Bed</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><Form.Check type="checkbox"/></td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle', fontSize: '1.1rem' }}>FP -- Fowler Position</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><Form.Check type="checkbox"/></td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle', fontSize: '1.1rem' }}>SR -- Said Rails Up</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><Form.Check type="checkbox"/></td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle', fontSize: '1.1rem' }}>B -- Bed Locker</td>
            </tr>
            <tr>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><Form.Check type="checkbox"/></td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle', fontSize: '1.1rem' }}>Cardiac</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><Form.Check type="checkbox"/></td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle', fontSize: '1.1rem' }}>R -- Reflux</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><Form.Check type="checkbox"/></td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle', fontSize: '1.1rem' }}>A -- Aspiration</td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><Form.Check type="checkbox"/></td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle', fontSize: '1.1rem' }}>G -- Gastronomy</td>
            </tr>
        </tbody>
    </Table>
</>
  )
}

export default PrecautionsTable