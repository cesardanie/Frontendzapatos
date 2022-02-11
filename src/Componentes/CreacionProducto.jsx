import {React,Fragment,useState} from "react";
import { Formik } from 'formik';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, NavLink
  } from "react-router-dom";

const CreacionProducto=()=>{
    const [Formularioenviado,cambiarformulario]=useState(false);
    return(
        <Formik
        initialValues={{
            NombreProducto:'',
            Precio:'',
            Descripcion:''   
        }}
        validate={(valores)=>{
            let errores={};
            if(!valores.NombreProducto)
            {
                errores.NombreProducto="por favor ingresa un nombre de producto";
            

            }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.NombreProducto))
            {
                errores.NombreProducto='el nombre solo puede contener letras y espacios'

            }
           

            return errores;
        }}
        onSubmit={(valores,{resetForm})=>{
           
          
  
            cambiarformulario(true);
            ///reseteo el formulario
            var a=EnviarProducto(valores);
            console.log(a);
            a.then((successMessage) => {
               console.log(successMessage);
                if(successMessage.estado===true)
                {
                    window.alert("Producto Agregado Exitosamente");
                    window.open("/PaginaAdmi");
                }
               
             
           });
            
            resetForm();
            ///imprimo el formulario 
            console.log("Formulario enviado");
           
            
           
        }}
        >
            {({values, touched,errors,handleSubmit,handleChange, handleBlur})=>(
            <form onSubmit={handleSubmit}>
                <div className="card">
                <div className="card-body">
                    <h4 className="card-title text-warning">Creacion de Producto</h4>
                        <p className="card-text text-secundary">
                        <div className="form-group">
                            <label htmlFor="correo" className="text-primary">Nombre del Producto</label>
                        <br/>
                        <br/>
                            <input className="form-control" onBlur={handleBlur} onChange={handleChange} type="text" id="NombreProducto" name="NombreProducto" placeholder="digite un nombre"value={values.NombreProducto}/>
                        <br/>
                            {touched.NombreProducto &&  errors.NombreProducto &&<div className="text-danger">{errors.NombreProducto}</div>}
                        <br/>
                            <label className="text-primary">Precio del Producto</label>
                            <br/>
                            <br/>
                            <input className="form-control" onBlur={handleBlur} onChange={handleChange} type="text" id="Precio" name="Precio" placeholder="digite el precio"value={values.Precio}/>
                            <br/>
                            {touched.Precio &&  errors.Precio &&<div className="text-danger">{errors.Precio}</div>}
                            <br/>
                            <label className="text-primary">Descripcion del Producto</label>
                            <br/>
                            <br/>
                            <input className="form-control" onBlur={handleBlur} onChange={handleChange} type="text" id="Descripcion" name="Descripcion" placeholder="digite una Descripcion"value={values.Descripcion}/>
                            <br/>
                            {touched.Descripcion &&  errors.Descripcion &&<div className="text-danger">{errors.Descripcion}</div>}
                            <br/>
                                <button type="submit"className="btn btn-primary" >Enviar</button>
                                <br/>
                                {Formularioenviado && <div className="text-success" >Formulario enviado con exito</div>}
                                <br/>
                                <br/>
                </div>
                </p>
                </div>
                </div>
                
            </form>

            )}
                
        </Formik>
    );

}
export default CreacionProducto;
export async function EnviarProducto(Datos){
    try{

      const url='https://localhost:44306/api/Productos'
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