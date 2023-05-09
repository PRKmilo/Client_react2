import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Container,Row,Col } from 'react-bootstrap'
import { GRADUATED_ENDPOINT } from '../helpers/endpoints';


export default  function StudentList(){
  const [usuarios, setUsuarios]= useState([]);
  const [tablaUsuarios, setTablaUsuarios]= useState([]);
  const [busqueda, setBusqueda]= useState("");

  const peticionGet=async()=>{
    await axios.get(GRADUATED_ENDPOINT)
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
      || elemento.company.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
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
          <text>buscar</text>
        </button>
        </div>
    <div className="card-list">
      {usuarios.map((card, index) => (
        <Card key={index}>
          <Card.Body>
            <Card.Title>{card?.name}</Card.Title>
            <Card.Text>{card?.company?.name}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
    </div>
  );
}
