import React,{useEffect, useState} from 'react'
import { Card, Container,Row,Col } from 'react-bootstrap'
import SignInForm from '../components/forms/SignInForm'
import { useDispatch } from 'react-redux';
import { isObjEmpty } from '../helpers/helpers';
import validator from 'validator';
import { loginUser } from '../actions/authActions';



export default function Signin() {

  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {

  });


  const login = ({email,password}) => {
    const errors = {};
    setErrors(errors);
    console.log("pasa linea 25")
    if (!validator.isEmail(email)){
      errors.email="No es un correo electronico";
    }

    if (validator.isEmpty(password)){
      errors.password="la contraseña no puede estar vacia";
    }

    if (!isObjEmpty(errors)){
      setErrors(errors);
      return;
    }
    dispatch(loginUser({ email,password})).then(response => {
      console.log('pasa por login user')
    }).catch(err => {
     
    })
  }
  return (
    <Container className="mt-5">
      <Row>
        <Col sm="12" md={{ span: 8,offset: 2}} lg={{ span: 6, offset:3}}></Col>
        <Card body>
          <h3>Iniciar Sesión</h3>
          <SignInForm errors={errors} onSubmitCallback={login}></SignInForm>
        </Card>
      </Row> 
    </Container>
   
  )
}
