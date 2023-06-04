import {useState} from 'react'
import * as XLSX from 'xlsx'
import { Data } from '../components/Data';
import axios from 'axios';
import { API_EXCEL_EGRESADOS } from '../helpers/endpoints';

export default function Excel() {
  
  // on change states
  const [excelFile, setExcelFile]=useState(null);
  const [excelFileError, setExcelFileError]=useState(null);  
 
  // submit
  const [excelData, setExcelData]=useState(null);
  // it will contain array of objects

  // handle File
  const fileType=['application/vnd.ms-excel'];
  const fileType2=['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
  const handleFile = (e)=>{
    
    let selectedFile = e.target.files[0];
    if(selectedFile){
       console.log(selectedFile.type);
      if(selectedFile&&fileType.includes(selectedFile.type)  || selectedFile&&fileType2.includes(selectedFile.type)){

        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload=(e)=>{
          setExcelFileError(null);
          setExcelFile(e.target.result);
        } 
      }
      else{
        setExcelFileError('Por favor seleccione solo archivos tipo excel');
        setExcelFile(null);
      }
    }
    else{
      console.log('Por favor seleccione su archivo');
    }
  }

  const token=localStorage.getItem('secret_token');

  const headers = {
    Authorization: `Bearer ${token}`
  }
  // submit function
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(excelFile!==null){
      const workbook = XLSX.read(excelFile,{type:'buffer'});
      const worksheetName = workbook.SheetNames[0];
      const worksheet=workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data);
      data.map ((individualExcelData)=>(
       console.log(individualExcelData.Primer_Nombre)        
      ))
      console.log(API_EXCEL_EGRESADOS)
      console.log(data.Primer_Nombre+ 'Esta es la data del excel')

      axios.post(API_EXCEL_EGRESADOS,data,{headers}).then(response => {

        console.log(response)
     }).catch(error => {
         alert('Se leyeron los datos')
         console.log('pasando por action')
         
     })
    }
    else{
      setExcelData(null);
    }
  }
  
  return (
    <div className="container">

      {/* upload file section */}
      <div className='form'>
        <form className='form-group' autoComplete="off"
        onSubmit={handleSubmit}>
          <label><h5>Subir archivo excel</h5></label>
          <br></br>
          <input type='file' className='form-control'
          onChange={handleFile} required></input>                  
          {excelFileError&&<div className='text-danger'
          style={{marginTop:5+'px'}}>{excelFileError}</div>}
          <button type='submit' className='btn btn-success'
          style={{marginTop:5+'px'}}>Subir</button>
        </form>
      </div>

      <br></br>
      <hr></hr>

      {/* view file section */}
      <h5>Ver archivo excel</h5>
      <div className='viewer'>
        {excelData===null&&<>No hay archivos seleccionados</>}
        {excelData!==null&&(
          <div className='table-responsive'>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>Primer Nombre</th>
                  <th scope='col'>Primer Apellido</th>
                  <th scope='col'>Identificación</th>
                  <th scope='col'>Carrera</th>
                  <th scope='col'>Año de Graduación</th>
                  <th scope='col'>Edad</th>
                  <th scope='col'>Celular</th>
                  <th scope='col'>Telefono</th>
                  <th scope='col'>Titulo despues universidad</th>
                  <th scope='col'>Vida personal</th>
                  <th scope='col'>Trabajos</th>
                </tr>
              </thead>
              <tbody>
                <Data excelData={excelData}/>
              </tbody>
            </table>            
          </div>
        )}       
      </div>

    </div>
  );
}

