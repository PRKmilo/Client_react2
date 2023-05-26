import React from 'react'
import { Nav,NavDropdown,Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Excel from '../pages/Excel'

export default function Navigation() {
  return (
    <Navbar bg='black' variant='dark' expand='lg'>
        <Navbar.Brand as={NavLink} to={'/excel'}>Sala</Navbar.Brand>
        <Navbar.Collapse id="main-menu">
            <Nav>
                <Nav.Link as={NavLink} to={'/home'}>Home</Nav.Link>

                <NavDropdown title="Eventos" id="menu_eventos-dropdown">
                    <NavDropdown.Item>Ver Eventos</NavDropdown.Item>
                    <NavDropdown.Item>Agendar Eventos</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Encuestas" id="menu-dropdown">
                    <NavDropdown.Item><Nav.Link as={NavLink} to={'/formulario profesor'} className="nav">Formulario Profesor</Nav.Link></NavDropdown.Item>
                    <NavDropdown.Item><Nav.Link as={NavLink} to={'/Formulario estudiante'} className="nav">Formulario Estudiante</Nav.Link></NavDropdown.Item>
                    <NavDropdown.Item>Cerrar Sesion</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Estudiantes" id="menu_estudiantes-dropdown">
                    <NavDropdown.Item><Nav.Link as={NavLink} to={'/estudiantes'}  className="nav">Ver Estudiantes</Nav.Link></NavDropdown.Item>
                    <NavDropdown.Item>Actualizar Estudiante</NavDropdown.Item>
                    <NavDropdown.Item><Nav.Link as={NavLink} to={'/excel'} className="nav">Subir Archivos</Nav.Link></NavDropdown.Item>
                </NavDropdown>
                

                
            </Nav>
            
            <Nav className="mr-auto">
                <Nav.Link>create Post</Nav.Link>
            </Nav>

            <Nav>
                <Nav.Link as={NavLink} to={'/signin'}>Iniciar Sesion</Nav.Link>
            </Nav>

        </Navbar.Collapse>
    </Navbar>
  )
}
