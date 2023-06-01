import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Container,Row,Col } from 'react-bootstrap'
import { EGRESADO_ENDPONINT } from '../helpers/endpoints';
import { Graduado } from './Graduado';
import { Nav,NavDropdown,Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom';


export default  function Graduates(){
  const [graduates, setGraduates]= useState([]);
  const [tablaGraduates, setTablaGraduates]= useState([]);
  const [busqueda, setBusqueda]= useState("");

  const token=localStorage.getItem('secret_token');

  const headers = {
    Authorization: `Bearer ${token}`
  }
  console.log("esta es la token")
  console.log(token)
  const peticionGet=async()=>{
    await axios.get(EGRESADO_ENDPONINT,{headers})
    .then(response=>{
      setGraduates(response.data);
      setTablaGraduates(response.data);
    }).catch(error=>{
      console.log(error);
    })
  }

  const handleChange=e=>{
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }
  const filtrar=(terminoBusqueda)=>{
    var resultadosBusqueda=tablaGraduates.filter((elemento)=>{
      if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      || elemento.lastname.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ){
        return elemento;
      }
    });
    setGraduates(resultadosBusqueda);
  }

  useEffect(()=>{
    peticionGet();
    },[])

 
    console.log(graduates);
    console.log(graduates.name)

return (
    <div>
        <div>
    <input
          className="form-control inputBuscar"
          value={busqueda}         
          placeholder="Búsqueda por Nombre o  Apellido"
          onChange={handleChange}
        />
         <button className="btn btn-success">
          <text>Buscar</text>
        </button>
        </div>
    <div className="card-list">
      {graduates.map((card, index) => (
        <Card key={index}>
          <Link to={`/egresados/${card.id}` } className="custom-link">
          <Card.Body>
            <Card.Title>{card?.name}</Card.Title>
            <Card.Text>{card?.lastname}</Card.Text>
            <Card.Text>{card?.graduate?.faculty}</Card.Text>
            
          </Card.Body>
          </Link>
        </Card>
      ))}
    </div>
    </div>
  );
}