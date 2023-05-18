import React from 'react'

export const IndividualData = ({individualExcelData}) => {
    return (
        <>
            <th>{individualExcelData.Primer_Nombre}</th>
            <th>{individualExcelData.Primer_Apellido}</th>
            <th>{individualExcelData.Identificacion}</th>
            <th>{individualExcelData.Carrera}</th>
            <th>{individualExcelData.Año_De_Graduacion}</th>
            <th>{individualExcelData.Edad}</th>
            <th>{individualExcelData.Logro_Mas_Importante}</th>
        </>
    )
}