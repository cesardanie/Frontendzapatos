import {React,Fragment,useState,useEffect} from "react";
import axios from 'axios';
import imagen from'../../src/img/Capturatenis.PNG';
import '../Estilos/StylosHome.css';
import { Formik } from "formik";

const PaginaTienda=()=>{
   
    let cantidadlist=[]
    const [Formularioenviado,cambiarformulario]=useState(false);
    const[usuarios,setusuarios]=useState([
        {NombreProducto:"Adidas",Precio:"13000",Descripcion:"Nuevo"}
    ]);
    const pulsar=()=>{
        let cantidad=[]
        cantidad=localStorage.getItem('Cantidad');
        var id=localStorage.getItem('id');
        console.log("Hola Mundo");
        console.log(id);
        console.log(cantidad);
        const permisos={
            Id: id,
           }
        var responseone=Enviar_Valores(permisos);
        console.log(responseone);

    }
    async function Enviar_Valores(Datos){
        try{
    
            
            const url='https://localhost:44306/api/HistoryProducts'
            const response= await axios(
              {
                 url:`${url}`,
                 method: 'POST',
                 data: Datos,
    
              }
              
          )
         
           
          return response;
    
        }
        catch(E)
        {
    
          console.log(E);
        }
    
    }
    async function Recibir_valores(){
        try{
    
            
            const url='https://localhost:44306/api/Productos'
            const response= await axios(
              {
                 url:`${url}`,
                 method: 'GET',
    
              }
              
          )
            console.log(response.data.productoszap);
           setusuarios(response.data.productoszap);
           
          return response.data.productoszap;
    
        }
        catch(E)
        {
    
          console.log(E);
        }
    
    }
    useEffect(()=>{
        var b=Recibir_valores();
       },[]);
     const tasktablerows=()=>{
        return usuarios.map(Producto =>(
            <Fragment>
             <tr key={Producto.id}>
                 <td>{Producto.id}</td>
                 <td>{Producto.nombreProducto}</td>
                 <td>{Producto.precio}</td>
                 <td>{Producto.descripcion}</td> 
                 <td><img src={imagen} className="tamanodosimagen"/></td>
                 <td><Formik
                 initialValues={{
                    Cantidad:'',
                    id:'',
                  
                   
               }}
               validate={(valores)=>{
                let errores={};
               
                if(!valores.Cantidad)
                {
                    errores.Cantidad="por favor ingresa una cantidad";
                }
                if(!valores.id)
                {
                    errores.id="por favor ingrese un id";
                }
               
                return errores;
            }}
            onSubmit={(valores,{resetForm})=>{
                
                console.log(valores);
                
                cantidadlist=valores.Cantidad 
                var listaid=valores.id
                localStorage.setItem('Cantidad',cantidadlist);///guardar informacion en el localstorage
                localStorage.setItem('id',listaid);
                //reseteo el formulario/
                resetForm();
                ///imprimo el formulario 
                console.log("Formulario enviado");
            }}
                 >{({values, touched,errors,handleSubmit,handleChange, handleBlur})=>(
                    <form onSubmit={handleSubmit}>
                        <div className="form-group ">
                                <br/>
                                <input className="col-sm-6 " onBlur={handleBlur} onChange={handleChange} type="text" id="id" name="id" placeholder="id"value={values.id}/>
                                <br/>
                                {touched.id &&  errors.id &&<div className="text-danger">{errors.id}</div>}
                                <br/>
                                <input className="col-sm-6 " onBlur={handleBlur} onChange={handleChange} type="text" id="Cantidad" name="Cantidad" placeholder="cantidad"value={values.Cantidad}/>
                                <br/>
                                {touched.cantidad &&  errors.Cantidad &&<div className="text-danger">{errors.Cantidad}</div>}
                                <br/>
                                <button type="submit"className="btn btn-primary" >Agregar Al carrito</button>
                                {Formularioenviado && <div className="text-success" >Datos Enviados Con Exito</div>}
                         </div>
                    </form> )}</Formik></td></tr>
             </Fragment>
         ))
 }
    return(
        <Fragment>
             <div className='container'>
                <br/>
                <h1 className="text-primary">Bienvenido puede Realizar su compra</h1>
                <br/>
                <div className="card w-75">
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                            <th>id</th>
                            <th>Nombre del Producto</th>
                            <th>Precio</th>
                            <th>descripcion</th>
                            <th>Imagen del producto</th>
                            <th>cantidad a comprar</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            tasktablerows()
                        }
                        
                        </tbody>
                    </table>
                    
                    </div>
                    <br/>
                    <button className="btn btn-dark" onClick={()=>{pulsar()}}>Comprar Productos</button>   
                    <br/>
                    <br/>
             </div>
           
        </Fragment>
    );

}
export default PaginaTienda;