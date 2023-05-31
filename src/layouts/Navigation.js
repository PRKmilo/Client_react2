import React, { useState } from 'react'
import { Nav,NavDropdown,Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Excel from '../pages/Excel'

export default function Navigation() {
    const mostrar=false;
    const username='miguel Ortiz'
    const [valor,setValor] = useState(false);
    const cambiarValor = () =>{
        console.log('pasa cambiar valor')
        setValor(!valor);
    }
  return (
    <Navbar bg='black' variant='dark' expand='lg'>
        <Navbar.Brand as={NavLink} to={'/home'}>Home</Navbar.Brand>
        <Navbar.Collapse id="main-menu">
            <Nav>


                <NavDropdown title="Eventos" id="menu_eventos-dropdown">
                    <NavDropdown.Item><Nav.Link as={NavLink} to={'/eventos'} className="nav">Ver Eventos</Nav.Link></NavDropdown.Item>
                    <NavDropdown.Item>Agendar Eventos</NavDropdown.Item>
                </NavDropdown>

                {valor &&(<NavDropdown title="Encuestas" id="menu-dropdown">
                    <NavDropdown.Item><Nav.Link as={NavLink} to={'/formulario profesor'} className="nav">Formulario Profesor</Nav.Link></NavDropdown.Item>
                    <NavDropdown.Item><Nav.Link as={NavLink} to={'/Formulario estudiante'} className="nav">Formulario Estudiante</Nav.Link></NavDropdown.Item>
                </NavDropdown>)}
                {valor && (<NavDropdown title="Estudiantes" id="menu_estudiantes-dropdown">
                    <NavDropdown.Item><Nav.Link as={NavLink} to={'/estudiantes'}  className="nav">Ver Estudiantes</Nav.Link></NavDropdown.Item>
                    <NavDropdown.Item>Actualizar Estudiante</NavDropdown.Item>
                    <NavDropdown.Item><Nav.Link as={NavLink} to={'/excel'} className="nav">Subir Archivos</Nav.Link></NavDropdown.Item>
                </NavDropdown>)}

            
                
            </Nav>
            
            <Nav className="mr-auto">
              <NavLink to="/" onClick={cambiarValor}>Cambiar Valor</NavLink>
             </Nav>

            
           
           
            {valor && (<Nav  className="navbar-right">
            <NavDropdown title={username} id="menu-dropdown">
                    <NavDropdown.Item><Nav.Link as={NavLink} to={'/perfil'} className="nav">Perfil</Nav.Link></NavDropdown.Item>
                    <NavDropdown.Item>Cerrar Sesion</NavDropdown.Item>
                </NavDropdown>
                </Nav>)}

        </Navbar.Collapse>
    </Navbar>
  )
}
