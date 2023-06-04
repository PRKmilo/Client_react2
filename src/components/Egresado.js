import React from 'react'
import { EGRESADO_ENDPONINT } from '../helpers/endpoints'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import {

    Card,
    CardGroup,
    CardImg,
    Row,
    Col,
    ListGroup
 

  } from 'react-bootstrap';


export function Egresado  ({id_graduado})  {
    const [graduado, setGradudo] = React.useState([])
    console.log(useParams('id'))
    const{id} = useParams()
    useEffect(() => {
        obtenerDatos()
    },[])

    const token = localStorage.getItem('secret_token')
    const headers = {
        Authorization: `Bearer ${token}`
      }
    const obtenerDatos = async () =>{
        const data = await fetch(EGRESADO_ENDPONINT+'/'+id,{headers})
        const grad = await data.json()
        setGradudo(grad)
    }
    console.log(graduado);
    graduado.graduate?.life_history.map ( t =>{
        console.log(t.title)
    })
    return (
        <> 

            <div>
            
                <Card className='tarjeta border-dark' style={{ position: 'absolute', top: '150px', left: '150px', width: '850px', height: '300px' }}>
                    <CardGroup className="text-center">
                    <CardImg
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                        alt="avatar"
                        className="rounded-circle"
                        style={{ width: '250px' }}
                        fluid
                    />
                    <Col sm = "3">
                    <Card.Text className="text"><h1>{graduado.name+' '+graduado.lastname}</h1></Card.Text>
                    </Col>
                    <br/>
                    <Col sm = "8">
                    <Card.Text className="text"><h4>{graduado.direccion}.{graduado.address?.city}</h4></Card.Text>
                    </Col>
                    <div className="d-flex justify-content-center mb-2"></div>
                    </CardGroup>
                </Card>
            </div>
            <div>
                <Card className='tarjeta border-dark' style={{ position: 'absolute', top: '500px', left: '150px', width: '850px', height: '250px' }}>
                <CardGroup>
                    <Row>
                    <Col sm="9">
                        <Card.Text className="letra_perfil">Nombre Completo</Card.Text>
                    </Col>
                    <Col sm="9">
                        <Card.Text className="text-muted">{graduado.name+' '+graduado.lastname}</Card.Text>
                    </Col>
                    </Row>
                    <hr />
                    <br/>
                    <Row>
                    <Col sm="9">
                        <Card.Text className="letra_perfil">Email</Card.Text>
                    </Col>
                    <Col sm="10">
                        <Card.Text className="text-muted">{graduado.email}</Card.Text>
                    </Col>
                    </Row>
                    <hr />
                    <br/>
                    <Row>
                    <Col sm="9">
                        <Card.Text className="letra_perfil">Teléfono Fijo</Card.Text>
                    </Col>
                    <Col sm="9">
                        <Card.Text className="text-muted">{graduado.celular}</Card.Text>
                    </Col>
                    </Row>
                    <hr />
                    <br/>
                    <Row>
                    <Col sm="12">
                        <Card.Text className="letra_perfil">Número Celular</Card.Text>
                    </Col>
                    <Col sm="9">
                        <Card.Text className="text-muted">{graduado.telefono}</Card.Text>
                    </Col>
                    </Row>
                    <hr />
                    <br/>
                    <Row>
                    <Col sm="9">
                        <Card.Text className="letra_perfil">Dirección</Card.Text>
                    </Col>
                    <Col sm="9">
                        <Card.Text className="text-muted">{graduado.direccion}, {graduado.direccion}</Card.Text>
                    </Col>
                    </Row>
                    <br/>
                    <Row>
                    <Col sm="9">
                        <Card.Text className="letra_perfil">Compañía Actual</Card.Text>
                    </Col>
                    <Col sm="9">
                        <Card.Text className="text-muted">{graduado.graduate?.faculty}</Card.Text>
                    </Col>
                    </Row>
                    <br/>
                    <Row>
                    <Col sm="9">
                        <Card.Text className="letra_perfil">Facultad</Card.Text>
                    </Col>
                    <Col sm="9">
                        <Card.Text className="text-muted">{graduado.graduate?.faculty}</Card.Text>
                    </Col>
                    </Row>
                </CardGroup>
                </Card>
            </div>
            <div class = "form-outline w-100">
                <Card className='tarjeta border-dark' style={{ position: 'absolute', top: '150px', left: '1050px', width: '650px', height: '600px' }}>
                    <CardGroup>
                        <Col sm = "10">
                            <h1>Logros:</h1>
                        </Col>
                        <Col sm = "4" className="letra_perfil">
                        <ListGroup >
                        {graduado.graduate?.academic_title.map(title => (
                                <ListGroup.Item key={title.id} style={{ position: 'absolute', top: '70px', left: '20px', width: '300px', height: '500px' }}>
                                   <h3 class="d-inline-block text-wrap" style={{maxWidth: '200px'}}>{title.title}</h3>
                                    <p>{title.institucion}</p>
                                    <p>{title.country}</p>
                                    <span className="letra_perfil" style={{maxWidth: '150px'}}>{title.description}</span>
                                 </ListGroup.Item>
                                  ))}
                           
                                </ListGroup>
                        </Col>
                        <ListGroup>
                           {graduado.graduate?.works.map(job => (
                                <ListGroup.Item key={job.id} style={{ position: 'absolute', top: '70px', left: '350px', width: '265px', height: '250px' }}>
                                   <h3>{job.carge}</h3>
                                    <p>{job.company}</p>
                                    <p>{job.country}</p>
                                    <span class="d-inline-block text-wrap" className="letra_perfil" style={{maxWidth: '250px'}}>{job.description}</span>
                                 </ListGroup.Item>
                                  ))}
                                </ListGroup>
                                <ListGroup>
                           {graduado.graduate?.life_history.map(life => (
                                <ListGroup.Item key={life.id}  style={{ position: 'absolute', top: '368px', left: '350px', width: '265px', height: '200px' }}>
                                   <h3>{life.title}</h3>
                                    <p>{life.date}</p>
                                    <span class="d-inline-block text-wrap" style={{maxWidth: '150px'}}>{life.description}</span>
                                 </ListGroup.Item>
                                  ))}
                                </ListGroup>        

                        
                    </CardGroup>
                </Card>

            </div>

        </>
    )
}