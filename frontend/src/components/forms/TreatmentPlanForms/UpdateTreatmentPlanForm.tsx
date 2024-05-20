import React from 'react'
import { Container, Row, Form, FloatingLabel, Button } from 'react-bootstrap'

function UpdateTreatmentPlanForm() {
    return (
        <Container className='mb-3' fluid>
            <Row><h3>Update Treatment Plan</h3></Row>

            <Form id="updateTreatmentPlanForm">
                <FloatingLabel controlId="floatingInput" label="Plan ID" className=" mb-3">
                    <Form.Control type="number" id="plan_id" placeholder='' required /><br />
                </FloatingLabel>

                <FloatingLabel controlId="floatingInput" label="New Patient ID" className=" mb-3">
                    <Form.Control type="number" id="new_patient_id" placeholder='' required /><br />
                </FloatingLabel>

                <FloatingLabel controlId="floatingInput" label="New Clinician ID" className=" mb-3">
                    <Form.Control type="number" id="new_clinician_id" placeholder='' required /><br />
                </FloatingLabel>

                <Button type="submit">Update Treatment Plan</Button>
            </Form>
        </Container>
    )
}

export default UpdateTreatmentPlanForm