import React,{Fragment}from 'react'
import '../Estilos/StylosHome.css';
import Registro from '../Paginas/Registro';
import {Redirect} from 'react-router';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";


const Boton =()=>
{
    return(
        
        <Fragment>
            
             <button type="submit"className="btn btn-primary espacio"  >Crear Usuario</button>
                                
        </Fragment>

    );


}
 const login = () =>{

    
  }
export default Boton;