import React from 'react'
import { Container, Row, Form, FloatingLabel, Button } from 'react-bootstrap'

function AddTreatmentPlanForm() {
    return (
        <Container className='mb-3' fluid>
            <Row><h3>Add Treatment Plan</h3></Row>

            <Form id="addTreatmentPlanForm">
                <FloatingLabel controlId="floatingInput" label="Patient ID" className=" mb-3">
                    <Form.Control type="number" id="patient_id" placeholder='' required /><br />
                </FloatingLabel>

                <FloatingLabel controlId="floatingInput" label="Clinician ID" className=" mb-3">
                    <Form.Control type="number" id="clinician_id" placeholder='' required /><br />
                </FloatingLabel>

                <Button type="submit">Add Treatment Plan</Button>
            </Form>
        </Container>
    )
}

export default AddTreatmentPlanForm