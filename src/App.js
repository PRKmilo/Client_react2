
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./layouts/Navigation";
import { Container } from "react-bootstrap";
import Signin from "./pages/Signin";
import Posts from "./pages/Posts";
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
          <Route exact path="/" element={<Posts />}></Route>
          <Route exact path="/signin" element={<Signin />}>
          </Route>
        </Routes>
      </Container>
    </Router>
    </Provider>
    
  );
}

export default App;
