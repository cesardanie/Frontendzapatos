import React,{useState,Fragment} from 'react';
import { Formik } from 'formik';
import '../Estilos/StylosHome.css';
import axios from 'axios';
import imagenlogo from'../img/Logo1.PNG';
import Boton from'../Componentes/Boton';
import Registro from '../Paginas/Registro';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";



const IniciarSesion =()=>
{
    const pulsar=()=>
        {   
                console.log("me has pulsado");
        }


    const [Formularioenviado,cambiarformulario]=useState(false);
    return(
        <Fragment>
        <Formik
        initialValues={{
             Correo:'',
             Contraseña:'',
           
            
        }}
        validate={(valores)=>{
            let errores={};
           
            if(!valores.Correo)
            {
                errores.Correo="por favor ingresa un correo";
            

            }
            if(!valores.Contraseña)
            {

                errores.Contraseña="por favor ingresa contraseña";
            }
           
      

            return errores;
        }}
        onSubmit={(valores,{resetForm})=>{
           
           
            ////  cmabio el estado del formulario
            console.log(valores);
          
            var a=Enviarusuario(valores);
            console.log(a);
            cambiarformulario(true);
            a.then((successMessage) => {
               
                console.log(successMessage);

             
           });
            ///reseteo el formulario
            resetForm();
            ///imprimo el formulario 
            console.log("Formulario enviado");
           
            
           
        }}
        >
            {({values, touched,errors,handleSubmit,handleChange, handleBlur})=>(
            <form onSubmit={handleSubmit}>
                <div className="card  text-center "  >
                <div className="card-body ">
                    <h4 className="card-title text-primary"><img src={imagenlogo}/></h4>
                        <p className="card-text text-secundary">
                            
                            <div className="form-group ">
                             
                                <label htmlFor="correo" className="text-primary">Correo</label>
                                <br/>
                                <br/>
                                <input className="col-sm-6 " onBlur={handleBlur} onChange={handleChange} type="text" id="Correo" name="Correo" placeholder="digite su correo"value={values.Correo}/>
                                <br/>
                                {touched.Correo &&  errors.Correo &&<div className="text-danger">{errors.Correo}</div>}
                                <br/>
                                <label className="text-primary">Contraseña</label>
                                <br/>
                                <br/>
                                <input className="col-sm-6" onBlur={handleBlur} onChange={handleChange} type="password" id="Contraseña" name="Contraseña" placeholder="digite su Contraseña"value={values.Contraseña}/>
                                <br/>
                                {touched.Contraseña &&  errors.Contraseña &&<div className="text-danger">{errors.Contraseña}</div>}
                                <br/>
                                <button type="submit"className="btn btn-primary" >Iniciar Sesion</button>
                                
                                
                                <br/>
                                 {Formularioenviado && <div className="text-success" >Datos Enviados Con Exito</div>}
                                </div>
                            </p>
                        </div>
                    </div>
                
            </form>

            )}
           
                
        </Formik>
        
        </Fragment>


    );


}
export default IniciarSesion;
export async function Enviarusuario(Datos){
    try{

      const url='http://localhost:54795/UsuarioMaestro'
      const response= await axios(
          {
             url:`${url}`,
             method: 'POST',
             data: Datos,
   
          }
          
      )
   
     
      return response.data;

    }
    catch(E)
    {

      console.log(E);
    }

}