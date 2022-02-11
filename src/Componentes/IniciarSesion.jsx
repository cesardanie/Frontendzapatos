import React,{useState,Fragment} from 'react';
import { Formik } from 'formik';
import '../Estilos/StylosHome.css';
import axios from 'axios';
import imagenlogo from'../img/Logoim.PNG';
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
             correo:'',
             contraseña:'',
           
            
        }}
        validate={(valores)=>{
            let errores={};
           
            if(!valores.correo)
            {
                errores.correo="por favor ingresa un correo";
            

            }
            if(!valores.contraseña)
            {

                errores.contraseña="por favor ingresa contraseña";
            }
           
      

            return errores;
        }}
        onSubmit={(valores,{resetForm})=>{
           
           
            ////  cmabio el estado del formulario    
            cambiarformulario(true);
            var a=Enviarusuario(valores);
            console.log(a);
            a.then((successMessage) => {
               
                console.log(successMessage);
                if(successMessage.tipodeRolAutenticado=="Administrador")
                {
                        window.alert("Bienvenido estas Ingresado como Administrador");
                        window.open("/PaginaAdmi");
                }
                if(successMessage.tipodeRolAutenticado=="Comprador")
                {
                    window.alert("Bienvenido estas Ingresado como Comprador");
                    window.open("/PaginaTienda");
                }
                if(successMessage.validacion===false)
                {   

                    window.alert("Su usuario o Contraseña no conciden");
                    window.open("/");

                }
               
             
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
                                <input className="col-sm-6 " onBlur={handleBlur} onChange={handleChange} type="text" id="correo" name="correo" placeholder="digite su correo"value={values.correo}/>
                                <br/>
                                {touched.correo &&  errors.correo &&<div className="text-danger">{errors.correo}</div>}
                                <br/>
                                <label className="text-primary">Contraseña</label>
                                <br/>
                                <br/>
                                <input className="col-sm-6" onBlur={handleBlur} onChange={handleChange} type="password" id="contraseña" name="contraseña" placeholder="digite su Contraseña"value={values.contraseña}/>
                                <br/>
                                {touched.contraseña &&  errors.contraseña &&<div className="text-danger">{errors.contraseña}</div>}
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

      const url='https://localhost:44306/api/Usuarios'
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