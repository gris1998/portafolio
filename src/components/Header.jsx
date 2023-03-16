import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'



function Header() {
  return (
    <Navbar bg="dark" expand= "sm" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img className="mylogo" src="/src/assets/mylogo.jpg" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">


            <Nav.Link as={Link} to={'/'}>Home
            </Nav.Link>
            <Nav.Link as={Link} to={'/Studies'}>Studies
            </Nav.Link>
            <Nav.Link as={Link} to={'/Experience'}>Experience
            </Nav.Link>
            <Nav.Link as={Link} to={'/MyProyect'}>Proyect
            </Nav.Link>
            <Nav.Link as={Link} to={'/Contacto'}>Contacto
            </Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header