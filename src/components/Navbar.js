import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "200px",
    padding: "10px",
    margin: "6px 3px",
    background: "ivory",
    color: "black"
  }; 

function Navbar(){
    return(
        <div>
        <NavLink style={linkStyles} to="/">Home</NavLink>
        <NavLink style={linkStyles} to="/resume">Resume</NavLink>
        <NavLink style={linkStyles} to="/projects">Projects</NavLink>
    </div>
    )
}

export default Navbar;