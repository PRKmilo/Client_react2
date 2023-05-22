import React from 'react'
import { GRADUATED_ENDPOINT } from '../helpers/endpoints'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'


export function Graduado  ({id_graduado})  {
    const [graduado, setGradudo] = React.useState([])
    console.log(useParams('id'))
    const{id} = useParams()
    useEffect(() => {
        obtenerDatos()
    },[])

    const obtenerDatos = async () =>{
        const data = await fetch(GRADUATED_ENDPOINT+'/'+id)
        const grad = await data.json()
        setGradudo(grad)
    }
    console.log(graduado.company?.name)
    return (
        <>   
            <div>
                <h1>{graduado.name}</h1>
                <span>{graduado.company?.name}</span>
                <br/>
                <span>{graduado.username}</span>
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