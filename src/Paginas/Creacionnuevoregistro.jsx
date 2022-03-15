import React,{Fragment,useState} from 'react'
import { Formik } from 'formik';
import '../Estilos/EstilosActivosSeguimiento.css'

const Creacionnuevoregistro=()=>{

    const [Formularioenviado,cambiarformulario]=useState(false);
    return(
        <Fragment>
            <h2 className='titulo_uno'>Creacion de nuevo Registro Calificado</h2>
            <div className='derecha_pantallados'> Cuadro </div>
        <Formik
        initialValues={{
             correo:'',
             contraseña:'',
           
            
        }}
        validate={(valores)=>{
            let errores={};
           
            if(!valores.correo)
            {
                errores.correo="por favor ingresa un nombre";
            

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
            //var a=Enviarusuario(valores);
           
            ///reseteo el formulario
            resetForm();
            ///imprimo el formulario 
            console.log("Formulario enviado");
           
            
           
        }}
        >
            {({values, touched,errors,handleSubmit,handleChange, handleBlur})=>(
            <form onSubmit={handleSubmit}>
                <div className='acomodar'>
              
                    
                    <br/>
                        <p className="card-text text-secundary">
                            
                            <div className="form-group ">
                             
                                <label htmlFor="correo" className="text-secondary">Sede</label>
                                <br/>
                                <br/>
                                <input className="col-sm-6 " onBlur={handleBlur} onChange={handleChange} type="text" id="correo" name="correo" placeholder="Nombre de la sede el cual pertenece el decano"value={values.correo}/>
                                <br/>
                                {touched.correo &&  errors.correo &&<div className="text-danger">{errors.correo}</div>}
                                <br/>
                                <label className="text-secondary">Division</label>
                                <br/>
                                <br/>
                                <input className="col-sm-6" onBlur={handleBlur} onChange={handleChange} type="text" id="contraseña" name="contraseña" placeholder="digite la division a la que pertenece el decano"value={values.contraseña}/>
                                <br/>
                                {touched.contraseña &&  errors.contraseña &&<div className="text-danger">{errors.contraseña}</div>}
                                <br/>
                                <br/>
                                <label className="text-secondary">Facultad</label>
                                <br/>
                                <br/>
                                <input className="col-sm-6" onBlur={handleBlur} onChange={handleChange} type="text" id="contraseña" name="contraseña" placeholder="Nombre de la Facultadad la que pertenece el decano"value={values.contraseña}/>
                                <br/>
                                {touched.contraseña &&  errors.contraseña &&<div className="text-danger">{errors.contraseña}</div>}
                                <br/>
                                <label className="text-secondary">Nombre del Nuevo Programa</label>
                                <br/>
                                <br/>
                                <input className="col-sm-6" onBlur={handleBlur} onChange={handleChange} type="text" id="contraseña" name="contraseña" placeholder="Nombre de la Facultadad la que pertenece el decano"value={values.contraseña}/>
                                <br/>
                                {touched.contraseña &&  errors.contraseña &&<div className="text-danger">{errors.contraseña}</div>}
                                <br/>
                                <br/>
                                <input className="form-check-input" onBlur={handleBlur} onChange={handleChange} type="checkbox" id="Registro_unico" name="Registro_unico" placeholder="Nombre de la Facultadad la que pertenece el decano"value={values.contraseña}/>
                                <label className="text-dark">Registro Unico</label>    
                                <br/>
                                <br/>
                                <label className="text-secondary">Modalidad</label> 
                                <br/>
                                <br/>
                                <select onBlur={handleBlur} onChange={handleChange}  className="col-sm-6" id="Banco" name="Banco" value={values.Banco}>
                                <option>Seleccione una opcion</option>
                                <option>Presencial</option>
                                <option>Distancia</option>
                                <option>Virtual</option>
                                <option>Dual</option>
                                <option>Presencial-Virtual</option>
                                <option>Presencial-Distancia</option>
                                <option>Presencial-Dual</option>
                                <option>Virtual-Distancia</option>
                                <option>Virtual-Dual</option>
                                <option>Distancia-Dual</option>
                                </select>
                                <br/>

                                <br/>
                                <label className="text-secondary">Numero de Creditos</label>
                                <br/>
                                <br/>
                                <input className="col-sm-6" onBlur={handleBlur} onChange={handleChange} type="text" id="contraseña" name="contraseña" placeholder="Numero de creditos de 0 a 160"value={values.contraseña}/>
                                <br/>
                                {touched.contraseña &&  errors.contraseña &&<div className="text-danger">{errors.contraseña}</div>}
                                <br/>
                                
                                <label className="text-secondary">ENCARGADO DE LA UDCFD</label> 
                                <br/>
                                <br/>
                                <select onBlur={handleBlur} onChange={handleChange}  className="col-sm-6" id="Banco" name="Banco" value={values.Banco}>
                                <option>Seleccione una opcion</option>
                                <option>Presencial</option>
                                <option>Distancia</option>
                                <option>Virtual</option>
                                <option>Dual</option>
                                <option>Presencial-Virtual</option>
                                <option>Presencial-Distancia</option>
                                <option>Presencial-Dual</option>
                                <option>Virtual-Distancia</option>
                                <option>Virtual-Dual</option>
                                <option>Distancia-Dual</option>
                                </select>
                                <br/>
                                <br/>
                              
                                
                                <button type="submit"className="btn btn-success" >Crear</button>
                                
                                
                                <br/>
                                 {Formularioenviado && <div className="text-success" >Datos Enviados Con Exito</div>}
                                </div>
                            </p>
                        </div>
                 
                
            </form>

            )}
           
                
        </Formik>
        
        
        </Fragment>


    );

}
export default Creacionnuevoregistro