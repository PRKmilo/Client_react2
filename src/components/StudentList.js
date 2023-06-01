import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Container,Row,Col } from 'react-bootstrap'
import { API_URL_STUDENTS } from '../helpers/endpoints';
import { Link } from 'react-router-dom';


export default  function StudentList(){
  const [usuarios, setUsuarios]= useState([]);
  const [tablaUsuarios, setTablaUsuarios]= useState([]);
  const [busqueda, setBusqueda]= useState("");

  const token=localStorage.getItem('secret_token');

  const headers = {
    Authorization: `Bearer ${token}`
  }


  const peticionGet=async()=>{
    await axios.get(API_URL_STUDENTS,{headers})
    .then(response=>{
      setUsuarios(response.data);
      setTablaUsuarios(response.data);
    }).catch(error=>{
      console.log(error);
    })
  }

  const handleChange=e=>{
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }
  const filtrar=(terminoBusqueda)=>{
    var resultadosBusqueda=tablaUsuarios.filter((elemento)=>{
      if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      || elemento.lastname.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ){
        return elemento;
      }
    });
    setUsuarios(resultadosBusqueda);
  }

  useEffect(()=>{
    peticionGet();
    },[])

 
    console.log(usuarios);

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
      {usuarios.map((card, index) => (
        <Card key={index}>
          <Link to={`/estudiantes/${card.id}` } className="custom-link">
          <Card.Body>
            <Card.Title>{card?.name}</Card.Title>
            <Card.Text>{card?.lastname}</Card.Text>
            <Card.Text>{card?.student.faculty}</Card.Text>
            <Card.Text>{card?.student.carer}</Card.Text>
          </Card.Body>
          </Link>
        </Card>
      ))}
    </div>
    </div>
  );
}
