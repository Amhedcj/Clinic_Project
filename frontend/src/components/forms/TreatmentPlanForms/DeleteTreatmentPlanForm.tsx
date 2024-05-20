import React from 'react'
import { Container, Row, Form, FloatingLabel, Button } from 'react-bootstrap'

function DeleteTreatmentPlanForm() {
    return (
        <Container className='mb-3' fluid>
            <Row><h3>Delete Treatment Plan</h3></Row>

            <Form id="deleteTreatmentPlanForm">
                <FloatingLabel controlId="floatingInput" label="Plan ID" className=" mb-3">
                    <Form.Control type="number" id="plan_id" placeholder='' required /><br />
                </FloatingLabel>

                <Button type="submit" variant="danger">Delete Treatment Plan</Button>
            </Form>
        </Container>
    )
}

export default DeleteTreatmentPlanForm