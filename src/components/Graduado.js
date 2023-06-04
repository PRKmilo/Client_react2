import React from 'react'
import { API_URL_STUDENTS } from '../helpers/endpoints'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import {

    Card,
    CardGroup,
    CardImg,
    Row,
    Col,
 

  } from 'react-bootstrap';

export function Graduado  ({id_graduado})  {
    const [graduado, setGradudo] = React.useState([])
    console.log(useParams('id'))
    const{id} = useParams()
    useEffect(() => {
        obtenerDatos()
    },[])
    const token=localStorage.getItem('secret_token');

  const headers = {
    Authorization: `Bearer ${token}`
  }
    const obtenerDatos = async () =>{
        const data = await fetch(API_URL_STUDENTS+'/'+id,{headers})
        const grad = await data.json()
        setGradudo(grad)
    }
    console.log(graduado)
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
                    style={{ width: '150px' }}
                    fluid
                />
                <Col sm = "2">
                <Card.Text className="text-muted mb-1"><h1>{graduado.name}</h1></Card.Text>
                </Col>
                <br/>
                <Col sm = "8">
                <Card.Text className="text-muted mb-4"><h4>{graduado.direccion},{graduado.address?.city}</h4></Card.Text>
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
                        <Card.Text className="text-muted">{graduado.name}</Card.Text>
                    </Col>
                    </Row>
                    <hr />
                    <br/>
                    <Row>
                    <Col sm="9">
                        <Card.Text>Email</Card.Text>
                    </Col>
                    <Col sm="10">
                        <Card.Text className="text-muted">{graduado.email}</Card.Text>
                    </Col>
                    </Row>
                    <hr />
                    <br/>
                    <Row>
                    <Col sm="9">
                        <Card.Text>Teléfono Fijo</Card.Text>
                    </Col>
                    <Col sm="9">
                        <Card.Text className="text-muted">{graduado.telofono}</Card.Text>
                    </Col>
                    </Row>
                    <hr />
                    <br/>
                    <Row>
                    <Col sm="9">
                        <Card.Text>Número Celular</Card.Text>
                    </Col>
                    <Col sm="9">
                        <Card.Text className="text-muted">{graduado.celular}</Card.Text>
                    </Col>
                    </Row>
                    <hr />
                    <br/>
                    <Row>
                    <Col sm="9">
                        <Card.Text>Dirección</Card.Text>
                    </Col>
                    <Col sm="9">
                        <Card.Text className="text-muted">{graduado.direccion}, {graduado.address?.city}</Card.Text>
                    </Col>
                    </Row>
                    <br/>
                    <Row>
                    <Col sm="9">
                        <Card.Text>Facultad</Card.Text>
                    </Col>
                    <Col sm="9">
                        <Card.Text className="text-muted">{graduado.student?.faculty}</Card.Text>
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