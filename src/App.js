
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./layouts/Navigation";
import { Container } from "react-bootstrap";
import Signin from "./pages/Signin";
import Posts from "./pages/Posts";
import Home from "./pages/Home";
import Excel from "./pages/Excel";
import { Graduado } from "./components/Graduado";
import {
  BrowserRouter as Router,
  Route,Routes
} from 'react-router-dom';
import store from './store';
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
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
        </Routes>
      </Container>
    </Router>
    </Provider>
    
  );
}

export default App;
