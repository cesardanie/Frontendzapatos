import React,{useState,Fragment} from 'react';
import PaginaAdmi from '../Paginas/PaginaAdmi';
import { Router ,Route } from 'react-router-dom';
import Home from '../Paginas/Home';

const Rutas=()=>
{
    return(
        <>
        <Router>
           
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/PaginaAdmi" component={PaginaAdmi}></Route>
            <Route path="*" component={Error} />
            
        </Router></>
       
    );
    
}
export default Rutas;