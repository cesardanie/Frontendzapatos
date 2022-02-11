import React,{Fragment} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, NavLink
  } from "react-router-dom";

  const Menu=()=>{

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
         <NavLink exact to="/" className="espaciodos" activeClassName="active">Iniciar Sesion</NavLink>
        </nav>
    );

  };
  export default Menu;