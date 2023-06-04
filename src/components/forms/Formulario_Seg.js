import React, { useState } from 'react';
import { 
  
  Form,
  Button,
  Card,
  CardGroup,

} from 'react-bootstrap';
import { API_UPDATE_EGRESADOS } from '../../helpers/endpoints';
import axios from 'axios';


const FormularioSeguimiento = () => {
  const [respuestas, setRespuestas] = useState({

    trabajotitulo: '',
    trabajodescripcion: '',
    carreraPrograma: '',
    estadoCivil: '',
    nivelEducativo: '',
    trabajocargo: '',
    trabajocompany: '',
    trabajofecha: '',
    premio: '',
    anioPremio: '',
    entidadPremio: '',
    descripcionPremio: '',
    acontecimientotitulo: '',
    descriocionAcontecimiento: '',
    fechaAcontecimiento: '',
    entidadPreLaboral: '',
    ubicacionpremio: '',
    trabajoubicacion: '',
    descripcionPreLaboral: '',
    cc:''
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setRespuestas((prevState) => ({ ...prevState, [name]: newValue }));
  };

  // const [error, setError] = useState('');
  const handleSubmit = (event) => {
    const token=localStorage.getItem('secret_token');

    const headers = {
      Authorization: `Bearer ${token}`
    }
    event.preventDefault();
    // Aquí puedes enviar las respuestas a través de una API o realizar cualquier acción adicional
    console.log('respuestas por medio de console')
    console.log(respuestas);
    respuestas.cc=localStorage.getItem('current_user_cedula')

    axios.post(API_UPDATE_EGRESADOS,respuestas,{headers}).then(response => {

      console.log(response)
   }).catch(error => {
       alert(error)
       console.log('pasando por action')
       
   })

  };

  // if (
    
  //   respuestas.nombreEstudiante === '' || 
  //   respuestas.anioGraduacion === '' || 
  //   respuestas.carreraPrograma === '' ||    
  //   respuestas.estadoCivil === '' ||
  //   respuestas.nivelEducativo === '' ||
  //   respuestas.correoPersonal === '' ||
  //   respuestas.numeroTelefono ==='' ||
  //   respuestas.redesSociales === ''||
  //   respuestas.premio === '' ||
  //   respuestas.anioPremio === '' ||
  //   respuestas.entidadPremio === '' ||
  //   respuestas.descripcionPremio === '' ||
  //   respuestas.premioLaboral === '' ||
  //   respuestas.nombrePreLaboral ==='' ||
  //   respuestas.anioPreLaboral === '' ||
  //   respuestas.entidadPreLaboral === '' ||
  //   respuestas.descripcionPreLaboral === '' ) {
  //   setError('Por favor, complete todos los campos');
  //   return;
  // }
  
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group  control="Preguntas_seg">
        <br/>
            <Card className="border-dark bg-light mb-4">
              <br/>
              <h5 class="card-title">
                Agradecemos tu disposición para compartir información importante sobre tus logros y reconocimientos posteriores a tu graduación. 
                La siguiente encuesta nos ayudará a recopilar datos relevantes para reconocer tus premios y prestigios obtenidos desde que finalizaste tus estudios en nuestra universidad. 
                Tu participación es fundamental para mantener actualizada nuestra base de datos y resaltar tus logros.
              </h5>
              
              <br/>
              
              <br/>
            <h5 class="card-title">Por favor, dinos si has tenido un trabajo del cual quiera contarnos.Si es asi dinos el nombre</h5>
            <br/>
            <div>
              <input
              type="text"
              id="trabajotitulo"
              name="trabajotitulo"
              class="col-sm-5" 
              placeholder="Nombre del premio o reconocimiento."
              value={respuestas.trabajotitulo }
              onChange={handleChange}
            />
            </div>
            <br/>
              
              <br/>
              <br/>
            <h5 class="card-title">Nos puedes compartir un poco una breve descripcion de lo que haces en un trabajo</h5>
            <br/>
            <div>
              <input
              type="text"
              id="trabajodescripcion"
              name="trabajodescripcion"
              class="col-sm-5" 
              placeholder="Nombre del premio o reconocimiento."
              value={respuestas.trabajodescripcion}
              onChange={handleChange}
            />
            </div>
            <br/>
              
              
              <br/>
              
              <br/>
            <h5 class="card-title">Nos puedes decir el cargo de tu trabajo</h5>
            <br/>
            <div>
              <input
              type="text"
              id="trabajocargo"
              name="trabajocargo"
              class="col-sm-5" 
              placeholder="Nombre del premio o reconocimiento."
              value={respuestas.trabajocargo}
              onChange={handleChange}
            />
            </div>
            <br/>
              
              <br/>
              
              <br/>
            <h5 class="card-title">Nos puedes decir el nombre  de la compañia</h5>
            <br/>
            <div>
              <input
              type="text"
              id="trabajocompany"
              name="trabajocompany"
              class="col-sm-5" 
              placeholder="Nombre del premio o reconocimiento."
              value={respuestas.trabajocompany}
              onChange={handleChange}
            />
            </div>
            <br/>
               <h5 class="card-title">En que pais se encuentra ubicada</h5>
            <br/>
            <div>
              <input
              type="text"
              id="trabajoubicacion"
              name="trabajoubicacion"
              class="col-sm-5" 
              placeholder="Nombre del premio o reconocimiento."
              value={respuestas.trabajoubicacion}
              onChange={handleChange}
            />
            </div>
            <br/>
              <br/>
              
              <br/>
            <h5 class="card-title">Nos puedes escribir la fecha en donde consegiste el trabajo</h5>
            <br/>
            <div>
              <input
              type="text"
              id="trabajofecha"
              name="trabajofecha"
              class="col-sm-5" 
              placeholder="Nombre del premio o reconocimiento."
              value={respuestas.trabajofecha}
              onChange={handleChange}
            />
            </div>
              
              <br/>
              
          </Card>
          <Card className="border-dark bg-light mb-4">
            <br/>
            <h5 class="card-title">Por favor, proporciona detalles sobre cualquier premio o reconocimiento que hayas recibido desde tu graduación.</h5>
            <br/>
            <div>
              <input
              type="text"
              id="premio"
              name="premio"
              class="col-sm-5" 
              placeholder="Nombre del premio o reconocimiento."
              value={respuestas.premio}
              onChange={handleChange}
            />
            </div>
            <br/>
            <div>
              <input
              type="text"
              id="anioPremio"
              name="anioPremio"
              class="col-sm-5" 
              placeholder="Año en el que fue otorgado."
              value={respuestas.anioPremio}
              onChange={handleChange}
            />
            </div>
            <br/>
            <div>
              <input
              type="text"
              id="entidadPremio"
              name="entidadPremio"
              class="col-sm-5" 
              placeholder="Institución, organización o entidad que otorgó el premio."
              value={respuestas.entidadPremio}
              onChange={handleChange}
            />
            </div>
            <br/>
            <br/>
            <div>
              <input
              type="text"
              id="ubicacionpremio"
              name="ubicacionpremio"
              class="col-sm-5" 
              placeholder="Pais en donde recibio el premio."
              value={respuestas.ubicacionpremio}
              onChange={handleChange}
            />
            </div>
            <br/>
            <div>
              <br/>
              <textarea
              id="descripcionPremio" 
              name="descripcionPremio" 
              class="col-sm-5" 
              placeholder="Breve descripción del premio o reconocimiento."
              value={respuestas.descripcionPremio}
              onChange={handleChange}
              rows="4" 
              cols="50"></textarea>
            </div>
            <br/>
          </Card>
          <Card className="border-dark bg-light mb-4">
            <br/> 
            <h5 class="card-title">Tambien si queires cuantanos acerca de algun acontecimiento que haya pasado en tu vida</h5>
            <br/>
            <div>
              <input
              type="text"
              id="acontecimientotitulo"
              name="acontecimientotitulo"
              class="col-sm-5" 
              placeholder="Acontecmiento personal."
              value={respuestas.acontecimientotitulo}
              onChange={handleChange}
            />
            </div>
            <br/>
            <div>
              <input
              type="text"
              id="fechaAcontecimiento"
              name="fechaAcontecimiento"
              class="col-sm-5" 
              placeholder="Dinos cuando paso este acontecimiento ."
              value={respuestas.fechaAcontecimiento}
              onChange={handleChange}
            />
            </div>
            <br/>
          
            <br/>
            <div>
              <br/>
              <textarea
              id="descriocionAcontecimiento" 
              name="descriocionAcontecimiento" 
              class="col-sm-5" 
              placeholder="Describenos como te fue en este acontecimiento ."
              value={respuestas.descriocionAcontecimiento}
              onChange={handleChange}
              rows="4" 
              cols="50"></textarea>
            </div>
            
            <br/>
                    

          </Card>
          <div>
            <br/>
            <Button type="submit">Enviar respuestas</Button>
          </div>
      </Form.Group>
    </Form>
  );
};

export default FormularioSeguimiento;