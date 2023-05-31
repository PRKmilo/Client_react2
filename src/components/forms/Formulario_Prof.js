import React, { useState } from 'react';
import { Form,Button, Card } from 'react-bootstrap';

const FormularioProfesor = () => {
  const [respuestas, setRespuestas] = useState({

    nombreProfesor: '',
    asignaturaProfesor: '',
    departamentoEnsenanza: '',
    pregunta1_menu1: false,
    pregunta2_menu1: false,
    pregunta3_menu1: false,
    pregunta4_menu1: false,
    pregunta5_menu1: false,
    pregunta6_menu1: false,
    pregunta7_menu1: false,
    relevanciaCurso: '',
    cumplimientoObjetivos: '',
    mejorasCurso: '',
    quejaReclamoFelicitacion: ''
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
      <Form.Group  control="Preguntas_prof">
        <br/>
        <Card className="border-dark bg-light mb-4">
          <br/>
          <h5 class="card-title">
          Tu opinión es valiosa para nosotros. Agradecemos tu participación en esta encuesta anónima para recopilar reseñas sobre los profesores de nuestra universidad. Tu retroalimentación nos ayudará a evaluar y mejorar la calidad educativa, 
          así como a proporcionar información útil a futuros estudiantes. 
          Toda la información proporcionada será tratada de manera confidencial y anónima.
          </h5>
          <br/>
          <div>
            <select
              id="nombreProfesor"
              name="nombreProfesor"
              value={respuestas.nombreProfesor}
              onChange={handleChange}
            >
              <option value="">Nombre completo del profesor.</option>
              <option value="1">profesor 1</option>
              <option value="2">profesor 2</option>
              <option value="3">profesor 3</option>
              <option value="4">profesor 4</option>
              <option value="5">profesor 5</option>
            </select>
          </div>
          <br/>
          <div>
            <select
              id="asignaturaProfesor"
              name="asignaturaProfesor"
              value={respuestas.asignaturaProfesor}
              onChange={handleChange}
            >
              <option value="">Curso o Asignatura impartida.</option>
              <option value="1">Asignatura 1</option>
              <option value="2">Asignatura 2</option>
              <option value="3">Asignatura 3</option>
              <option value="4">Asignatura 4</option>
              <option value="5">Asignatura 5</option>
            </select>
          </div>
          <br/>
          <div>
            <select
              id="departamentoEnsenanza"
              name="departamentoEnsenanza"
              value={respuestas.departamentoEnsenanza}
              onChange={handleChange}
            >
              <option value="">Departamento o área de enseñanza.</option>
              <option value="1">Departamento 1</option>
              <option value="2">Departamento 2</option>
              <option value="3">Departamento 3</option>
              <option value="4">Departamento 4</option>
              <option value="5">Departamento 5</option>
            </select>
          </div>
          <br/>
        </Card>
        <Form.Group  control="Preguntas_menu1">
         
          <Card className="border-dark bg-light mb-4">
            <br/>
            <h5 class="card-title">Por favor, califica las siguientes áreas del desempeño del profesor en una escala del 1 al 5, donde 1 es "Deficiente" y 5 es "excelente":</h5>
            <br/>
            <div>
            <select
              id="pregunta1_menu1"
              name="pregunta1_menu1"
              value={respuestas.pregunta1_menu1}
              onChange={handleChange}
            >
              <option value="">Dominio del contenido del curso.</option>
              <option value="1">1 - Deficiente</option>
              <option value="2">2 - Medio</option>
              <option value="3">3 - Satisfactorio</option>
              <option value="4">4 - Muy bueno</option>
              <option value="5">5 - Excelente</option>
            </select>
            </div>
            <br/>
            <div>
            <select
              id="pregunta2_menu1"
              name="pregunta2_menu1"
              value={respuestas.pregunta2_menu1}
              onChange={handleChange}
            >
              <option value="">Claridad en la entrega de las clases.</option>
              <option value="1">1 - Deficiente</option>
              <option value="2">2 - Medio</option>
              <option value="3">3 - Satisfactorio</option>
              <option value="4">4 - Muy bueno</option>
              <option value="5">5 - Excelente</option>
            </select>
            </div>
            <br/>
            <div>
            <select
              id="pregunta3_menu1"
              name="pregunta3_menu1"
              value={respuestas.pregunta3_menu1}
              onChange={handleChange}
            >
              <option value="">Capacidad para mantener el interés de los estudiantes.</option>
              <option value="1">1 - Deficiente</option>
              <option value="2">2 - Medio</option>
              <option value="3">3 - Satisfactorio</option>
              <option value="4">4 - Muy bueno</option>
              <option value="5">5 - Excelente</option>
            </select>
            </div>
            <br/>
            <div>
            <select
              id="pregunta4_menu1"
              name="pregunta4_menu1"
              value={respuestas.pregunta4_menu1}
              onChange={handleChange}
            >
              <option value="">Habilidad para responder preguntas y dudas.</option>
              <option value="1">1 - Deficiente</option>
              <option value="2">2 - Medio</option>
              <option value="3">3 - Satisfactorio</option>
              <option value="4">4 - Muy bueno</option>
              <option value="5">5 - Excelente</option>
            </select>
            </div>
            <br/>
            <div>
            <select
              id="pregunta5_menu1"
              name="pregunta5_menu1"
              value={respuestas.pregunta5_menu1}
              onChange={handleChange}
            >
              <option value="">Retroalimentación y evaluación justa de los estudiantes.</option>
              <option value="1">1 - Deficiente</option>
              <option value="2">2 - Medio</option>
              <option value="3">3 - Satisfactorio</option>
              <option value="4">4 - Muy bueno</option>
              <option value="5">5 - Excelente</option>
            </select>
            </div>
            <br/>
            <div>
            <select
              id="pregunta6_menu1"
              name="pregunta6_menu1"
              value={respuestas.pregunta6_menu1}
              onChange={handleChange}
            >
              <option value="">Disponibilidad para brindar apoyo fuera del horario de clases.</option>
              <option value="1">1 - Deficiente</option>
              <option value="2">2 - Medio</option>
              <option value="3">3 - Satisfactorio</option>
              <option value="4">4 - Muy bueno</option>
              <option value="5">5 - Excelente</option>
            </select>
            </div>
            <br/>
            <div>
            <select
              id="pregunta7_menu1"
              name="pregunta7_menu1"
              value={respuestas.pregunta7_menu1}
              onChange={handleChange}
            >
              <option value="">Organización y estructura del curso.</option>
              <option value="1">1 - Deficiente</option>
              <option value="2">2 - Medio</option>
              <option value="3">3 - Satisfactorio</option>
              <option value="4">4 - Muy bueno</option>
              <option value="5">5 - Excelente</option>
            </select>
            </div>
            <br/>
            </Card>
        </Form.Group>
        <Form.Group>
          
          <Card className="border-dark bg-light mb-4">
            <br/>
            <h5 class="card-title">Responda las preguntas acerca de la relación del docente con el curso.</h5>
            <br/>
            <div>
            <select
              id="relevanciaCurso"
              name="relevanciaCurso"
              value={respuestas.relevanciaCurso}
              onChange={handleChange}
            >
              <option value="">¿Cómo describirías la relevancia del curso para tus estudios?</option>
              <option value="1">1 - Muy poco relevante</option>
              <option value="2">2 - Poco relevante</option>
              <option value="3">3 - Relevante</option>
              <option value="4">4 - Muy relevante</option>
            </select>
            </div>
            <br/>
            <div>
            <select
              id="cumplimientoObjetivos"
              name="cumplimientoObjetivos"
              value={respuestas.cumplimientoObjetivos}
              onChange={handleChange}
            >
              <option value="">¿Consideras que los objetivos del curso se cumplieron satisfactoriamente?</option>
              <option value="1">1 - No</option>
              <option value="2">2 - Muy poco</option>
              <option value="3">3 - Algo</option>
              <option value="4">4 - Si</option>
              <option value="5">5 - Mas de lo necesario</option>
            </select>
            </div>
            <br/>
            <div>
            <textarea
            id="mejorasCurso" 
            name="mejorasCurso" 
            class="col-sm-5" 
            placeholder="¿Qué aspectos del curso consideras que podrían mejorarse?" 
            value={respuestas.mejorasCurso}
            onChange={handleChange}
            rows="4" 
            cols="50"></textarea>
            </div>
            <br/>
            <div>
            <textarea
            id="quejaReclamoFelicitacion" 
            name="quejaReclamoFelicitacion"
            class="col-sm-5" 
            placeholder="¿Alguna queja, reclamo, felicitación o aporte adicional que desee hacer al docente?" 
            value={respuestas.quejaReclamoFelicitacion}
            onChange={handleChange}
            rows="4" 
            cols="50"></textarea>
            </div>
            <br/>
          </Card>
        </Form.Group>
      </Form.Group>
        
        <div>
        <Button type="submit">Enviar respuestas</Button>
        </div>
    </Form>
  );
};

export default FormularioProfesor;