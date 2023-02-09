import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="./Studies.jsx">Studies</Nav.Link>
            <Nav.Link href="#features">experience</Nav.Link>
            <Nav.Link href="#pricing">My Proyect</Nav.Link>
          </Nav>
        </Container>
      </Navbar> 
    
  )
}

export default Header

