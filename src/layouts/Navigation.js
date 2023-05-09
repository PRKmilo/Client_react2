import React from 'react'
import { Nav,NavDropdown,Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <Navbar bg='success' variant='dark' expand='lg'>
        <Navbar.Brand as={NavLink} to={'/'}>Sala</Navbar.Brand>
        <Navbar.Collapse id="main-menu">
            <Nav className="mr-auto">
                <Nav.Link>create Post</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link as={NavLink} to={'/'}>Home</Nav.Link>
                <Nav.Link as={NavLink} to={'/signin'}>Iniciar sesion</Nav.Link>
                <NavDropdown title="+ opciones list" id="menu-dropdown">
                    <NavDropdown.Item>Post</NavDropdown.Item>
                    <NavDropdown.Item>Cerrar Sesion</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}
