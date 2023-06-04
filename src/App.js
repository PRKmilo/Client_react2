
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./layouts/Navigation";
import { Container } from "react-bootstrap";
import Signin from "./pages/Signin";
import Posts from "./pages/Posts";
import Home from "./pages/Home";
import Excel from "./pages/Excel";
import {Events} from "./pages/Events";
import { Graduado } from "./components/Graduado";
import Formulario_Prof from "./components/forms/Formulario_Prof"
import Formulario_Seg from "./components/forms/Formulario_Seg";
import { Perfil } from "./components/Perfil";
import {
  BrowserRouter as Router,
  Route,Routes
} from 'react-router-dom';
import store from './store';
import { Provider } from "react-redux";
import Graduates from "./components/Graduates";
import { Egresado } from "./components/Egresado";
import FormularioEgresado from "./components/forms/Formulario_egresado";

function App() {
  return (
    <Provider store={store} >
      <Router>
      <div>
        <Navigation></Navigation>
      </div>
      <Container>
        <Routes>
          <Route exact path="/estudiantes" element={<Posts />}></Route>
          <Route exact path="/estudiantes/:id" element={<Graduado  />}></Route>
          <Route exact path="/signin" element={<Signin />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/excel" element={<Excel />}></Route>
          <Route exact path="/formulario profesor" element={<Formulario_Prof />}></Route>
          <Route exact path="/formulario estudiante" element={<Formulario_Seg />}></Route>
          <Route exact path="/perfil" element={<Perfil />}></Route>
          <Route exact path="/egresados" element={<Graduates />}></Route>
          <Route exact path="/egresados_form" element={<FormularioEgresado />}></Route>
          <Route exact path="/egresados/:id" element={<Egresado  />}></Route>


        </Routes>
      </Container>
    </Router>
    </Provider>
    
  );
}

export default App;
