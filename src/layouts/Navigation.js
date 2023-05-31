import React, { useState } from 'react'
import { Nav,NavDropdown,Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Excel from '../pages/Excel'

export default function Navigation() {
    const mostrar=false;
    const username=localStorage.getItem('current_user_name')
    const [valor,setValor] = useState(false);
    const cambiarValor = () =>{
        console.log('pasa cambiar valor')
        setValor(!valor);
    }
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
                </NavDropdown>
                {valor && (<NavDropdown title="Estudiantes" id="menu_estudiantes-dropdown">
                    <NavDropdown.Item><Nav.Link as={NavLink} to={'/estudiantes'}  className="nav">Ver Estudiantes</Nav.Link></NavDropdown.Item>
                    <NavDropdown.Item>Actualizar Estudiante</NavDropdown.Item>
                    <NavDropdown.Item><Nav.Link as={NavLink} to={'/excel'} className="nav">Subir Archivos</Nav.Link></NavDropdown.Item>
                </NavDropdown>)}

                
                {valor && (<NavDropdown title="Egresados" id="menu_estudiantes-dropdown">
                    <NavDropdown.Item><Nav.Link as={NavLink} to={'/egresados'}  className="nav">Ver Egresados</Nav.Link></NavDropdown.Item>
                    <NavDropdown.Item>Actualizar Estudiante</NavDropdown.Item>
                    <NavDropdown.Item><Nav.Link as={NavLink} to={'/excel'} className="nav">Subir Archivos</Nav.Link></NavDropdown.Item>
                </NavDropdown>)}

                <Nav.Link as={NavLink} to={'/signin'}>Log in</Nav.Link>
               
 
                
            </Nav>
            
            <Nav className="mr-auto">
              <NavLink to="/" onClick={cambiarValor}>Cambiar Valor</NavLink>
             </Nav>

            
           
           
            {username != null && (<Nav  className="navbar-right">
            <NavDropdown title={username} id="menu-dropdown">
                    <NavDropdown.Item><Nav.Link as={NavLink} to={'/formulario profesor'} className="nav">Formulario Profesor</Nav.Link></NavDropdown.Item>
                    <NavDropdown.Item><Nav.Link as={NavLink} to={'/Formulario estudiante'} className="nav">Formulario Estudiante</Nav.Link></NavDropdown.Item>
                    <NavDropdown.Item>Cerrar Sesion</NavDropdown.Item>
                </NavDropdown>
                </Nav>)}

        </Navbar.Collapse>
    </Navbar>
  )
}
