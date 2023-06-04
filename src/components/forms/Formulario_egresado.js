import React, { useState } from 'react';
import { 
  
  Form,
  Button,
  Card,
  CardGroup,

} from 'react-bootstrap';
import axios from 'axios';
import { EGRESADO_ENDPONINT } from '../../helpers/endpoints';
import required from 'react-bootstrap'


const FormularioEgresado = () => {
  const [respuestas, setRespuestas] = useState({

    nombreEstudiante: '',
    anioGraduacion: '',
    carreraPrograma: '',
    correoPersonal: '',
    numeroTelefono: '',
    carrera:'',
    cc: '',
    apellido: '',
    celular: '',
    edad: '',
    direccion: '',
    password: '',
    confirm:''
  });
  const token=localStorage.getItem('secret_token');

  const headers = {
    Authorization: `Bearer ${token}`
  }

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setRespuestas((prevState) => ({ ...prevState, [name]: newValue }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar las respuestas a través de una API o realizar cualquier acción adicional
    console.log('respuestas por medio de console')
    console.log(respuestas);
    axios.post(EGRESADO_ENDPONINT,respuestas,{headers}).then(response => {

       console.log(response)
    }).catch(error => {
        alert(error)
        console.log('pasando por action')
        
    })

  };


  
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group  control="Preguntas_seg">
        <br/>
          <Card className="border-dark bg-light mb-4">
            <h5 class="card-title">
              En este espacio puede registrar al egresado que desee
            </h5>
            
            <br/>
            <label>Nombre</label>
            <br/>
            <div>
              <input
                type="text"
                id="nombreEstudiante"
                name="nombreEstudiante"
                class="col-sm-5" 
                placeholder="Nombre "
                value={respuestas.nombreEstudiante}
                onChange={handleChange}
                required
              />
            </div>
            
            <br/>
            <label>Primer Apellido</label>
            <br/>
            <div>
              <input
              type="text"
              id="apellido"
              name="apellido"
              class="col-sm-5" 
              placeholder="Apellido"
              value={respuestas.apellido}
              onChange={handleChange}
              required
            />
            </div>
            <br/>
            <label>Año de graduacion</label>
            <br/>
            <div>
              <input
                type="number"
                id="anioGraduacion"
                name="anioGraduacion"
                class="col-sm-5" 
                placeholder="Año de graduación."
                value={respuestas.anioGraduacion}
                onChange={handleChange}
              />
            </div>
            
            <br/>
            <label>Correo Personal</label>
            <br/>
            <div>
              <input
                type="text"
                id="correoPersonal"
                name="correoPersonal"
                class="col-sm-5" 
                placeholder="Correo Personal."
                value={respuestas.correoPersonal}
                onChange={handleChange}
                required
              />
            </div>
            
            <br/>
            <label>Numero</label>
            <br/>
            <div>
              <input
                type="number"
                id="numeroTelefono"
                name="numeroTelefono"
                class="col-sm-5" 
                placeholder="Número de teléfono."
                value={respuestas.numeroTelefono}
                onChange={handleChange}
                required
              />
            </div>
            
            <br/>
            <label>Cedula</label>
            <br/>
            <div>
              <input
                type="number"
                id="cc"
                name="cc"
                class="col-sm-5" 
                placeholder="cc"
                value={respuestas.cc}
                onChange={handleChange}
                required
              />
            </div>
            
            <br/>
            <label>Carrera</label>
            <br/>
            <div>
              <select
                id="carreraPrograma"
                name="carreraPrograma"
                value={respuestas.carreraPrograma}
                onChange={handleChange}
              >
                <option value="">Carrera .</option>
                <option value="Ingenieria sistemas">Ingenieria de sistemas</option>
                <option value="Medicina General ">Medicina General</option>
                <option value="Odontologia">Odontologia</option>
                <option value="Psicologia">Psicologia</option>
                <option value="Artes">Artes</option>
              </select>
            </div>
            
            <br/>
            <label>facultad</label>
            <br/>
            <div>
              <select
                id="carrera"
                name="carrera"
                value={respuestas.carrera}
                onChange={handleChange}
              >
                <option value="">facultad.</option>
                <option value="Ingenieria ">Ingenieria</option>
                <option value="Medicina ">Medicina</option>
                <option value="Odontologia">Odontologia</option>
                <option value="Psicologia">Psicologia</option>
                <option value="Artes">Artes</option>
              </select>
            </div>
            
            <br/>
            <label>Edad</label>
            <br/>
            <div>
              <input
                type="number"
                id="edad"
                name="edad"
                class="col-sm-5" 
                placeholder="edad"
                value={respuestas.edad}
                onChange={handleChange}
              />
            </div>
            
            <br/>
            <label>celular</label>
            <br/>
            <div>
              <input
              type="number"
              id="celular"
              name="celular"
              class="col-sm-5" 
              placeholder="celular personal"
              value={respuestas.celular}
              onChange={handleChange}
            />
            </div>
            <br/>
            <label>Direccion</label>
            <br/>
            <div>
              <input
              type="text"
              id="direccion"
              name="direccion"
              class="col-sm-5" 
              placeholder="direccion"
              value={respuestas.direccion}
              onChange={handleChange}
            />
            </div>
            
            <br/>
            <br/>
            <h5 class="card-title">Ingrese una clave segura para este egresado y confirmela</h5>
            <br/>
            <div>
              <input
              type="password"
              id="password"
              name="password"
              class="col-sm-5" 
              placeholder="password"
              value={respuestas.password}
              onChange={handleChange}
              required
            />
            </div>
            <br/>
            <div>
              <input
              type="password"
              id="confirm"
              name="confirm"
              class="col-sm-5" 
              placeholder="password confirm"
              value={respuestas.confirm}
              onChange={handleChange}
              required
            />
            </div>

           
            
          </Card>
          
          
          <div>
            <br/>
            <Button type="submit">Enviar respuestas</Button>
          </div>
      </Form.Group>
    </Form>
  );
};

export default FormularioEgresado;