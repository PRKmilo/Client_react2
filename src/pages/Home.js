import React from 'react';
import { 
  
  Card,
  

} from 'react-bootstrap';
const Home = () => {
  return (
    
    <Card class="border-dark mb-4">
      <div
        class="p-1 text-center bg-image shadow-1-strong text-white"
        style={{
          backgroundColor: "black",
          backgroundImage: "url('https://mdbootstrap.com/img/new/slides/003.jpg')",
          height: "100vh",
          backgroundSize: "1920px 1000px", 
          backgroundRepeat: "no-repeat"
        }}
        
        
      >

        <h1 class="text-center mb-4 h1">ForestTracker</h1>
      
        <p style={{ fontFamily: "Arial", fontSize: "25px", fontWeight: "1", color: "white", textAlign: "justify" }}>
        ForestTracker, desarrollado por Forest Solutions,
        es una plataforma integral del seguimiento de estudiantes principalmente, creada en colaboración con la prestigiosa Universidad del Bosque.
        Esta plataforma innovadora tiene como objetivo facilitar la supervisión y el progreso académico de los estudiantes en un entorno virtual seguro y eficiente.
        </p>
      </div>
    </Card>
  );
};

export default Home;