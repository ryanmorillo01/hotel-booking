import React from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import NavDropdown from 'react-bootstrap/NavDropdown';



const LoginAuthComponent = () => {
  return (
    <Container>
      <Row>
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">RYAN MORILLO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#">Facebook</Nav.Link>
                <Nav.Link href="#">Instagram</Nav.Link>
                <Nav.Link href="#">Tiktok</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div className="container">

          </div>
        </div>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col>
          <p>BOOKING HOTEL MANAGEMENT SYSTEM</p>
          <Form className='border'>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control placeholder="First name" />
              <Form.Control placeholder="Last name" />
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput2">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Room Type</Form.Label>
              <Form.Control size='lg' type="password" placeholder="Enter room type" />
              <NavDropdown title="Room Number" id="nav-dropdown"/>
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Check in</Form.Label>
              <Form.Control size='lg' type="Check in" placeholder="mm/dd/yy" />
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Check out</Form.Label>
              <Form.Control size='lg' type="Check out" placeholder="mm/dd/yy" />
            </Form.Group>
            <Link to="/create" className="btn-btn-link">Create</Link> <br />
            <Link to="/crud" className="btn-btn-link">Crud</Link>


          </Form>
        </Col>
        <Col></Col>
      </Row >
    </Container >
  )
}


export default LoginAuthComponent