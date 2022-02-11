import React,{useState} from 'react'
import { Formik } from 'formik';
import imagen from'../img/imagenregistro.PNG';



const Registro=()=>
{
    const [Formularioenviado,cambiarformulario]=useState(false);
    return(

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
            

            }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo))
            {
                errores.correo='ingrese un correo electronico valido'

            }
            if(!valores.contraseña)
            {

                errores.contraseña="por favor ingresa contraseña";
            }
           
      

            return errores;
        }}
        onSubmit={(valores,{resetForm})=>{
           
            console.log(valores);
            ////  cmabio el estado del formulario    
            cambiarformulario(true);
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
                    <h4 className="card-title text-primary"><img src={imagen}/></h4>
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


    );

}
export default Registro;