import React, { useState } from 'react';
import { 
  
  Form,
  Button,
  Card,
  CardGroup,

} from 'react-bootstrap';


const FormularioSeguimiento = () => {
  const [respuestas, setRespuestas] = useState({

    nombreEstudiante: '',
    anioGraduacion: '',
    carreraPrograma: '',
    correoPersonal: '',
    numeroTelefono: '',
    redesSociales: '',
    premio: '',
    anioPremio: '',
    entidadPremio: '',
    descripcionPremio: '',
    premioLaboral: '',
    nombrePreLaboral: '',
    anioPreLaboral: '',
    entidadPreLaboral: '',
    descripcionPreLaboral: ''
  });

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
  };


  
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group  control="Preguntas_seg">
        <br/>
            <Card class="border-dark bg-light mb-4">
              <h5 class="card-title">
                Agradecemos tu disposición para compartir información importante sobre tus logros y reconocimientos posteriores a tu graduación. 
                La siguiente encuesta nos ayudará a recopilar datos relevantes para reconocer tus premios y prestigios obtenidos desde que finalizaste tus estudios en nuestra universidad. 
                Tu participación es fundamental para mantener actualizada nuestra base de datos y resaltar tus logros.
              </h5>
              
              <br/>
              
              <div>
                <input
                  type="text"
                  id="nombreEstudiante"
                  name="nombreEstudiante"
                  class="col-sm-5" 
                  placeholder="Nombre Completo"
                  value={respuestas.nombreEstudiante}
                  onChange={handleChange}
                />
              </div>
              
              <br/>
              
              <div>
                <input
                  type="text"
                  id="anioGraduacion"
                  name="anioGraduacion"
                  class="col-sm-5" 
                  placeholder="Año de graduación."
                  value={respuestas.anioGraduacion}
                  onChange={handleChange}
                />
              </div>
              
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
                />
              </div>
              
              <br/>
              
              <div>
                <input
                  type="text"
                  id="numeroTelefono"
                  name="numeroTelefono"
                  class="col-sm-5" 
                  placeholder="Número de teléfono."
                  value={respuestas.numeroTelefono}
                  onChange={handleChange}
                />
              </div>
              
              <br/>
              
              <div>
                <input
                  type="text"
                  id="redesSociales"
                  name="redesSociales"
                  class="col-sm-5" 
                  placeholder="Redes sociales (opcional)."
                  value={respuestas.redesSociales}
                  onChange={handleChange}
                />
              </div>
              
              <br/>
              
              <div>
                <select
                  id="carreraPrograma"
                  name="carreraPrograma"
                  value={respuestas.carreraPrograma}
                  onChange={handleChange}
                >
                  <option value="">Carrera o programa de estudios.</option>
                  <option value="1">Carrera 1</option>
                  <option value="2">Carrera 2</option>
                  <option value="3">Carrera 3</option>
                  <option value="4">Carrera 4</option>
                  <option value="5">Carrera 5</option>
                </select>
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
            <h5 class="card-title">Si has obtenido alguna distinción o has sido reconocido(a) por tu destacada labor en tu campo profesional, 
                académico o en tu comunidad, por favor, descríbelo aquí.</h5>
            <br/>
            <div>
              <input
              type="text"
              id="premioLaboral"
              name="premioLaboral"
              class="col-sm-5" 
              placeholder="Nombre de la distinción o reconocimiento."
              value={respuestas.premioLaboral}
              onChange={handleChange}
            />
            </div>
            <br/>
            <div>
              <input
              type="text"
              id="anioPreLaboral"
              name="anioPreLaboral"
              class="col-sm-5" 
              placeholder="Año en el que fue otorgado."
              value={respuestas.anioPreLaboral}
              onChange={handleChange}
            />
            </div>
            <br/>
            <div>
              <input
              type="text"
              id="entidadPreLaboral"
              name="entidadPreLaboral"
              class="col-sm-5" 
              placeholder="Institución, organización o entidad que otorgó la distinción."
              value={respuestas.entidadPreLaboral}
              onChange={handleChange}
            />
            </div>
            <br/>
            <div>
              <br/>
              <textarea
              id="descripcionPreLaboral" 
              name="descripcionPreLaboral" 
              class="col-sm-5" 
              placeholder="Breve descripción del prestigio o reconocimiento."
              value={respuestas.descripcionPreLaboral}
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