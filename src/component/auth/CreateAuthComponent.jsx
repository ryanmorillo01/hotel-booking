import React from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const CreateAuthComponent = () => {
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col></Col>
      </Row>
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
        <Col>
        
          <Form><Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
            <Form.Label>Create Account</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
            <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Password</Form.Label>
              <Form.Control size='lg' type="password" placeholder="Enter password" />
            </Form.Group>
            <Button as="input" type="submit" value="Sign up" />{' '}
            <Link to="/login" className="btn-btn-link">Login</Link>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}


export default CreateAuthComponent