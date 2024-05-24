import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Button, Form } from 'react-bootstrap'

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Form.Switch label='Dark mode'
                onChange={(e: any) => {
                    // if(document.documentElement.getAttribute('data-bs-theme') == 'dark') {
                    if(e.target.checked == false) {
                        document.documentElement.setAttribute('data-bs-theme', 'light')
                    }
                    else {
                        document.documentElement.setAttribute('data-bs-theme', 'dark')
                    }
                }}>
                    
                </Form.Switch>
            </Container>
        </Navbar>
    )
}

export default NavBar