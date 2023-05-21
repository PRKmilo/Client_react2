import React from 'react'
import { GRADUATED_ENDPOINT } from '../helpers/endpoints'


export function Graduado  ({id_graduado})  {
    
    return (
        <>   
            <h1>{id_graduado.Primer_Nombre}</h1>
            <h2>{id_graduado.Primer_Apellido}</h2>
            <h2>{id_graduado.Identificacion}</h2>
            <h2>{id_graduado.Carrera}</h2>
            <h2>{id_graduado.Año_De_Graduacion}</h2>
            <h2>{id_graduado.Edad}</h2>
            <h2>{id_graduado.Logro_Mas_Importante}</h2>
        </>
    )
}