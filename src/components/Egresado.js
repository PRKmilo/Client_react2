import React from 'react'
import { EGRESADO_ENDPONINT } from '../helpers/endpoints'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'


export function Egresado  ({id_graduado})  {
    const [graduado, setGradudo] = React.useState([])
    console.log(useParams('id'))
    const{id} = useParams()
    useEffect(() => {
        obtenerDatos()
    },[])

    const token = localStorage.getItem('secret_token')
    const headers = {
        Authorization: `Bearer ${token}`
      }
    const obtenerDatos = async () =>{
        const data = await fetch(EGRESADO_ENDPONINT+'/'+id,{headers})
        const grad = await data.json()
        setGradudo(grad)
    }
    console.log(graduado)
    return (
        <>   
            <div>
                <h1>{graduado.name}</h1>
                <span>{graduado.lastname}</span>
                <br/>
                <span>{graduado.age}</span>
                <br/>
                <span>{graduado.email}</span>
                <br/>
                <span>{graduado.phone}</span>
                <br/>
                <span>{graduado.address?.street}</span>
                <br/>
                <span>{graduado.address?.city}</span>
            </div>
        </>
    )
}