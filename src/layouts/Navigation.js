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

                <NavDropdown title="Encuestas list" id="menu-dropdown">
                    <NavDropdown.Item>Post</NavDropdown.Item>
                    <NavDropdown.Item>Cerrar Sesion</NavDropdown.Item>
                    <a href="https://forms.gle/6WqqN5Fms55Gxx426" target="_blank">
                    <button type="button">Encuesta Segimiento</button>
                    </a>
                    <a href="https://forms.gle/mpmwKFWwDtWp5uU48" target="_blank">
                    <button type="button">Evaluación Docente</button>
                    </a>
                </NavDropdown>
                <NavDropdown title="Estudiantes" id="menu_estudiantes-dropdown">
                    <NavDropdown.Item><Nav.Link as={NavLink} to={'/estudiantes'}>Ver Estudiantes</Nav.Link></NavDropdown.Item>
                    <NavDropdown.Item>Actualizar Estudiantes</NavDropdown.Item>
                    <NavDropdown.Item><Nav.Link as={NavLink} to={'/excel'}>Subir Archivos</Nav.Link></NavDropdown.Item>
                </NavDropdown>
                

                
            </Nav>
            
            <Nav className="mr-auto">
                <Nav.Link>create Post</Nav.Link>
            </Nav>

            <Nav>
                <Nav.Link as={NavLink} to={'/signin'}>Iniciar sesion</Nav.Link>
            </Nav>

        </Navbar.Collapse>
    </Navbar>
  )
}
