import Table from 'react-bootstrap/Table';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import AdmissionData, { Procedure } from '../types/AdmissionData';
import { setNestedState } from '../utils/utils';

function ProceduresTable(props: any) {
    const [procedures, setProcedures] = useState([new Procedure()] as Procedure[]);

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

    const handleProcedureChange = (e: any, idx: number) => {
        const { name, value } = e.target;

        const newProcedures = [...procedures];
        const newProcedure = structuredClone(procedures[idx]);
        newProcedures[idx] = newProcedure;

        setNestedState(newProcedure, name, value);

        setProcedures(newProcedures);
        props.setFormProp('procedures', newProcedures);
    };

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Procedure</th>
                        <th>Precautions</th>
                        <th>Comments</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (props.formData as AdmissionData).procedures.map((procedure: Procedure, index: number) => {
                            return (
                                <tr>
                                    <td><Form.Control type="time" name='time' value={procedure.time} onChange={e => handleProcedureChange(e, index)}></Form.Control></td>
                                    <td><Form.Control type="text" name='procedure' value={procedure.procedure} onChange={e => handleProcedureChange(e, index)}></Form.Control></td>
                                    <td><Form.Control type="text"></Form.Control></td>
                                    <td><Form.Control type="text"></Form.Control></td>
                                    <td>
                                        <Button onClick={()=>{ console.log(`rm idx: ${index}`); const newData = removeAtAndCopy(procedures, index); setProcedures(newData); }}>-</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <Button onClick={()=>{ console.log(procedures); setProcedures([...procedures, new Procedure()]); props.setFormProp('procedures', procedures) }}>+</Button>
        </>
    );
}

export default ProceduresTable;