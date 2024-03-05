import React from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';


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
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
              </Nav>
              <Link to="/crud" className="btn-btn-link">Crud</Link>
            </Navbar.Collapse>
          </Navbar>
          <div className="container">
            {/* Your content here */}
          </div>
        </div>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col>
            <h1>Booking Hotel Management System</h1>
          <Form>
            <Form.Group className="mb-4" controlId='text area1'>
              <Form.Label>Name</Form.Label>
            </Form.Group>
            
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group> <br />
            <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Password</Form.Label>
              <Form.Control size='lg' type="password" placeholder="Enter password" />
            </Form.Group> <br />
            <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control size='lg' type="Confirm password" placeholder="Enter your confirm password" />
            </Form.Group>
            <Button as="input" type="submit" value="login" />{' '}
            <Link to="/create" className="btn-btn-link">Create Account</Link>
            <Link to="Crud" className="btn-btn-link">Crud</Link>

          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container >
  )
}


export default LoginAuthComponent