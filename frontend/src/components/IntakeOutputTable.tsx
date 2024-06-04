import Table from 'react-bootstrap/Table';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

function IntakeOutputTable() {
    const [data, setData] = useState([{ procedure: '0' as String }]);

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

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th className='text-center'>Time</th>
                        <th className='text-center'>PO</th>
                        <th className='text-center'>G-Tube</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((user: any, index: number) => {
                            return (
                                <tr>
                                    <td><Form.Control type="time"></Form.Control></td>
                                    <td><Form.Control type="text" value={`${data[index].procedure}`}
                                    onChange={(e: any) => { const newData = [...data]; newData[index].procedure = e.target.value; setData(newData); }}
                                    ></Form.Control></td>
                                    <td><Form.Control type="text"></Form.Control></td>
                                    <td className='text-center'>
                                        <Button onClick={()=>{ console.log(`rm idx: ${index}`); const newData = removeAtAndCopy(data, index); setData(newData); }}>-</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <Button onClick={()=>{ console.log(data); setData([...data, { procedure: `${data.length}` }])}}>+</Button>
        </>
    );
}

export default IntakeOutputTable;