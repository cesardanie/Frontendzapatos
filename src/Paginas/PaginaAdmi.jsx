import React,{useState,Fragment} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, NavLink
  } from "react-router-dom";


const PaginaAdmi=()=>
{
    return(
        <Fragment>
            <div className='container'>
                <br/>
                <h1 className="text-primary">Bienvenido al panel Administrador</h1>
                <br/>
                <div className="row">
                    <div className="col-md-4">
                    <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
                    <NavLink exact to="/CreacionProducto" className="espaciodos" activeClassName="active">Crear Producto</NavLink>
                    </nav>
                    </div>
                    <div className="col-md-4">
                    <nav className="navbar navbar-expand-lg navbar-danger bg-danger">
                    <NavLink exact to="/" className="espaciodos" activeClassName="active">Producto mas Comprado</NavLink>
                    </nav>
                    </div>
                    
                   
                   
                </div>
            </div>                            

        </Fragment>
       
    );
    
}
export default PaginaAdmi;