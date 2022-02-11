import React,{useState,Fragment} from 'react';
import { Formik } from 'formik';
import '../Estilos/StylosHome.css';
import axios from 'axios';
import imagenlogo from'../img/Logoim.PNG';
import Boton from'../Componentes/Boton';
import Registro from './Registro';
import PaginaAdmi from './PaginaAdmi';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
import IniciarSesion from '../Componentes/IniciarSesion';
import Inicio from '../Componentes/Inicio';
import Menu from '../Componentes/Menu';
import PaginaTienda from './PaginaTienda';
import CreacionProducto from '../Componentes/CreacionProducto';



const Home =()=>
{
    
    return(
       
        <>   
    <Router>
        <Menu/>
        <Switch>
          <Route exact path="/" component={IniciarSesion} />
            <Route exact path="/CreacionProducto" component={CreacionProducto}/>
          <Route exact path="/PaginaAdmi" component={PaginaAdmi}/>
          <Route exact path="/PaginaTienda" component={PaginaTienda}/>
          <Route path="*" component={Error} />
        </Switch>
    </Router>
        </>
     


    );


}
export default Home;

