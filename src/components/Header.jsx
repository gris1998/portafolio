import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
function Header() {
  return (

    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img className="mylogo" src="/src/assets/mylogo.jpg" alt="" />
        </Navbar.Brand>
        <Nav className="me-auto">

          <Nav.Link as={Link} to={'/'}>Home
          </Nav.Link>
          <Nav.Link as={Link} to={'/Studies'}>Studies
          </Nav.Link>
          <Nav.Link as={Link} to={'/Experience'}>Experience
          </Nav.Link>
          <Nav.Link as={Link} to={'/MyProyect'}>My Proyect
          </Nav.Link>


        </Nav>
      </Container>
    </Navbar>

  )
}

export default Header

