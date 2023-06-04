import axios from "axios"
import { LOGIN_ENDPOINT } from "../helpers/endpoints";
import { Alert } from "react-bootstrap";


export const loginUser =  (userData) => dispatch => {
    console.log('user data')
    console.log(userData);
    console.log('user data')
    console.log(LOGIN_ENDPOINT)
    return new Promise((resolve, reject) =>  {
        axios.post(LOGIN_ENDPOINT,userData,{
            headers: {'Accept': 'application/json', 'Content-type': 'application/json'}
        }).then(response => {

            console.log(response)
            localStorage.setItem('current_user_name',response.data.current_user.name)
            localStorage.setItem('current_user_id',response.data.current_user.id)
            localStorage.setItem('current_user_lastname',response.data.current_user.lastname)
            localStorage.setItem('current_user_email',response.data.current_user.email)
            localStorage.setItem('current_user_id',response.data.current_user.id)
            localStorage.setItem('secret_token',response.data.token)
            localStorage.setItem('current_user_cedula',response.data.current_user.cc)
            console.log('localstorage')
            console.log(localStorage.getItem('current_user_name'))
            console.log('pasando por action 15')

            resolve(response)
            window.location.href = 'http://localhost:3000/estudiantes';
        }).catch(error => {
            alert('contraseña o correo incorrectos')
            console.log('pasando por action')
            reject(error)
        })
    });
}