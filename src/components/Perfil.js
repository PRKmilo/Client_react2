import React from 'react'
import { API_USERS } from '../helpers/endpoints'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import {

    Card,
    CardGroup,
    CardImg,
    Row,
    Col,
 

  } from 'react-bootstrap';

export function Perfil  ({id_perfil})  {
    const [perfil, setPerfil] = React.useState([])
    console.log(useParams('id'))
    const id = localStorage.getItem('current_user_id')
    useEffect(() => {
        obtenerDatos()
    },[])

    const token=localStorage.getItem('secret_token');

  const headers = {
    Authorization: `Bearer ${token}`
  }
    const obtenerDatos = async () =>{
        const data = await fetch(API_USERS+'/'+id,{headers})
        const perf = await data.json()
        setPerfil(perf)
    }
    console.log(perfil.company?.name)
    return (
        <> 

            <div>
                <br/>
                <Card className="border-dark bg-light mb-4">
                    <CardGroup className="text-center">
                    <CardImg
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                        alt="avatar"
                        className="rounded-circle"
                        style={{ width: '200px' }}
                        fluid
                    />
                    <Col sm = "3">
                    <Card.Text className="text-muted mb-2"><h1>{perfil.name}</h1></Card.Text>
                    </Col>
                    <br/>
                    <Col sm = "8">
                    <Card.Text className="text-muted mb-4"><h4>{perfil.address?.street},{perfil.address?.city}</h4></Card.Text>
                    </Col>
                    <div className="d-flex justify-content-center mb-2"></div>
                    </CardGroup>
                </Card>
            </div>
            <div>
                <Card className="border-dark bg-light mb-4">
                <CardGroup>
                    <Row>
                    <Col sm="9">
                        <Card.Text>Nombre Completo</Card.Text>
                    </Col>
                    <Col sm="9">
                        <Card.Text className="text-muted">{perfil.name}</Card.Text>
                    </Col>
                    </Row>
                    <hr />
                    <br/>
                    <Row>
                    <Col sm="9">
                        <Card.Text>Email</Card.Text>
                    </Col>
                    <Col sm="10">
                        <Card.Text className="text-muted">{perfil.email}</Card.Text>
                    </Col>
                    </Row>
                    <hr />
                    <br/>
                    <Row>
                    <Col sm="9">
                        <Card.Text>Teléfono Fijo</Card.Text>
                    </Col>
                    <Col sm="9">
                        <Card.Text className="text-muted">{perfil.telefono}</Card.Text>
                    </Col>
                    </Row>
                    <hr />
                    <br/>
                    <Row>
                    <Col sm="9">
                        <Card.Text>Número Celular</Card.Text>
                    </Col>
                    <Col sm="9">
                        <Card.Text className="text-muted">{perfil.telefono}</Card.Text>
                    </Col>
                    </Row>
                    <hr />
                    <br/>
                    <Row>
                    <Col sm="9">
                        <Card.Text>Dirección</Card.Text>
                    </Col>
                    <Col sm="9">
                        <Card.Text className="text-muted">{perfil.direccion}, {perfil.address?.city}</Card.Text>
                    </Col>
                    </Row>
                    <br/>
                    <Row>
                    <Col sm="9">
                        <Card.Text>Compañía Actual</Card.Text>
                    </Col>
                    <Col sm="9">
                        <Card.Text className="text-muted">{perfil.company?.name}</Card.Text>
                    </Col>
                    </Row>
                </CardGroup>
                </Card>
            </div>
            <div class = "form-outline w-100">
                <Card className="border-dark bg-light mb-4">
                    <CardGroup>
                        <Col sm = "10">
                            <h1>Logros:</h1>
                        </Col>
                        <Col sm = "4">
                            <div class="form-outline">
                                <textarea class="form-control" id="textAreaExample1" rows="4"></textarea>
                            </div>
                        </Col>
                    </CardGroup>
                </Card>

            </div>

        </>
    )
}