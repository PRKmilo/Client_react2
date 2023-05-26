import React, { useState } from 'react';
import { Form,Button } from 'react-bootstrap';

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
    console.log(respuestas);
  };


  
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group  control="Preguntas_seg">
        <br/>
        <h5>
        Agradecemos tu disposición para compartir información importante sobre tus logros y reconocimientos posteriores a tu graduación. 
        La siguiente encuesta nos ayudará a recopilar datos relevantes para reconocer tus premios y prestigios obtenidos desde que finalizaste tus estudios en nuestra universidad. 
        Tu participación es fundamental para mantener actualizada nuestra base de datos y resaltar tus logros.
        </h5>
        <br/>
        <div>
          <label htmlFor="nombreEstudiante">Nombre completo. </label>
          <input
          type="text"
          id="nombreEstudiante"
          name="nombreEstudiante"
          value={respuestas.nombreEstudiante}
          onChange={handleChange}
        />
        </div>
        <br/>
        <div>
          <label htmlFor="anioGraduacion">Año de graduación. </label>
          <input
          type="text"
          id="anioGraduacion"
          name="anioGraduacion"
          value={respuestas.anioGraduacion}
          onChange={handleChange}
        />
        </div>
        <br/>
        <div>
          <label htmlFor="carreraPrograma">Carrera o programa de estudios. </label>
          <select
            id="carreraPrograma"
            name="carreraPrograma"
            value={respuestas.carreraPrograma}
            onChange={handleChange}
          >
            <option value="">Seleccione una asignatura</option>
            <option value="1">Carrera 1</option>
            <option value="2">Carrera 2</option>
            <option value="3">Carrera 3</option>
            <option value="4">Carrera 4</option>
            <option value="5">Carrera 5</option>
          </select>
        </div>
        <br/>
        <div>
          <label htmlFor="correoPersonal">Correo Personal. </label>
          <input
          type="text"
          id="correoPersonal"
          name="correoPersonal"
          value={respuestas.correoPersonal}
          onChange={handleChange}
        />
        </div>
        <br/>
        <div>
          <label htmlFor="numeroTelefono">Número de teléfono. </label>
          <input
          type="text"
          id="numeroTelefono"
          name="numeroTelefono"
          value={respuestas.numeroTelefono}
          onChange={handleChange}
        />
        </div>
        <br/>
        <div>
          <label htmlFor="redesSociales">Redes sociales (opcional). </label>
          <input
          type="text"
          id="redesSociales"
          name="redesSociales"
          value={respuestas.redesSociales}
          onChange={handleChange}
        />
        </div>
        <br/>
        <h5>Por favor, proporciona detalles sobre cualquier premio o reconocimiento que hayas recibido desde tu graduación.</h5>
        <br/>
        <div>
          <label htmlFor="premio">Nombre del premio o reconocimiento. </label>
          <input
          type="text"
          id="premio"
          name="premio"
          value={respuestas.premio}
          onChange={handleChange}
        />
        </div>
        <br/>
        <div>
          <label htmlFor="anioPremio">Año en el que fue otorgado.</label>
          <input
          type="text"
          id="anioPremio"
          name="anioPremio"
          value={respuestas.anioPremio}
          onChange={handleChange}
        />
        </div>
        <br/>
        <div>
          <label htmlFor="entidadPremio">Institución, organización o entidad que otorgó el premio. </label>
          <input
          type="text"
          id="entidadPremio"
          name="entidadPremio"
          value={respuestas.entidadPremio}
          onChange={handleChange}
        />
        </div>
        <br/>
        <div>
          <label htmlFor="descripcionPremio">Breve descripción del premio o reconocimiento. </label>
          <br/>
          <textarea
           id="descripcionPremio" 
           name="descripcionPremio" 
           value={respuestas.descripcionPremio}
           onChange={handleChange}
           rows="4" 
           cols="50"></textarea>
        </div>
        <br/>
        <h5>Si has obtenido alguna distinción o has sido reconocido(a) por tu destacada labor en tu campo profesional, 
            académico o en tu comunidad, por favor, descríbelo aquí.</h5>
        <br/>
        <div>
          <label htmlFor="premioLaboral">Nombre de la distinción o reconocimiento. </label>
          <input
          type="text"
          id="premioLaboral"
          name="premioLaboral"
          value={respuestas.premioLaboral}
          onChange={handleChange}
        />
        </div>
        <br/>
        <div>
          <label htmlFor="anioPreLaboral">Año en el que fue otorgado.. </label>
          <input
          type="text"
          id="anioPreLaboral"
          name="anioPreLaboral"
          value={respuestas.anioPreLaboral}
          onChange={handleChange}
        />
        </div>
        <br/>
        <div>
          <label htmlFor="entidadPreLaboral">Institución, organización o entidad que otorgó la distinción. </label>
          <input
          type="text"
          id="entidadPreLaboral"
          name="entidadPreLaboral"
          value={respuestas.entidadPreLaboral}
          onChange={handleChange}
        />
        </div>
        <br/>
        <div>
          <label htmlFor="descripcionPreLaboral">Breve descripción del prestigio o reconocimiento. </label>
          <br/>
          <textarea
           id="descripcionPreLaboral" 
           name="descripcionPreLaboral" 
           value={respuestas.descripcionPreLaboral}
           onChange={handleChange}
           rows="4" 
           cols="50"></textarea>
        </div>
        
        <br/>
                
        <div>
        <Button type="submit">Enviar respuestas</Button>
        </div>
        
      </Form.Group>
    </Form>
  );
};

export default FormularioSeguimiento;