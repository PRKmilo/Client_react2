import React from 'react';
import {Button} from 'react-bootstrap';
import { 
  
  Card,
  

} from 'react-bootstrap';
const Home = () => {
  return (
    <div className='home'>

          <Card className='tarjeta border-dark' style={{ position: 'absolute', top: '150px', left: '400px', width: '550px', height: '450px' }}>
              <h1 className="text">Universidad El Bosque</h1>
              <p className="tipo_letra">
              La Universidad El Bosque ha logrado niveles de calidad suficientes,
              hecho que ha sido reconocido públicamente a través del acto formal de acreditación mediante Resolución 13172 del 17 de julio de 2020 del Ministerio de Educación Nacional.
              </p>
              <a href="https://www.unbosque.edu.co/">Para mas información</a>
          </Card>
          <br/>
          <Card className="tarjeta border-dark" style={{ position: 'absolute', top: '700px', left: '400px', width: '1150px', height: '250px' }}>
            <div>
              <h1 className="text">ForestTracker</h1>
            
              <p className="tipo_letra">
              ForestTracker, desarrollado por Forest Solutions,
              es una plataforma integral del seguimiento de estudiantes principalmente, creada en colaboración con la prestigiosa Universidad del Bosque.
              Esta plataforma innovadora tiene como objetivo facilitar la supervisión y el progreso académico de los estudiantes en un entorno virtual seguro y eficiente.
              </p>
            </div>
          </Card>
          <Card className='tarjeta border-dark' style={{ position: 'absolute', top: '150px', left: '1000px', width: '550px', height: '450px' }}>
            <Card.Img variant="top" src=
                                    "https://www.unbosque.edu.co/sites/default/files/2020-02/IMG_2391%20%281%29.jpg"
                                    background-size = "cover"
                                    background-repeat = "no-repeat"
                                    background-position = "left"
                                    width = "550px"
                                    height = "450px"
                                    border = "none" />

          </Card>

    </div>

);
};

export default Home;