import React from 'react'
import { Container, Row, Form, FloatingLabel, Button } from 'react-bootstrap'

function NewPatientForm() {
  return (
      <Container className='mb-3' fluid>
          <Row><h2>New Patient</h2></Row>

          <Form id="addPatientForm">
              <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
                  <Form.Control type="text" id="name" placeholder="name@example.com" required />
              </FloatingLabel>

              <FloatingLabel controlId="floatingInput" label="Age" className="mb-3">
                  <Form.Control type="number" id="age" placeholder='0' required />
              </FloatingLabel>

              <FloatingLabel controlId="floatingInput" label="Address" className="mb-3">
                  <Form.Control type="text" id="address" placeholder='' required />
              </FloatingLabel>

              <Button type="submit">Add Patient</Button>
          </Form>
      </Container>
  )
}

export default NewPatientForm