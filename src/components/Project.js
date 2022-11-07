import React from "react";
import { Link } from "react-router-dom"

function Project({projects}){
    return(
       <>
       {projects.map((project) => (
           <div className="card">
               <h1 className="card1">{project.name}</h1>
               <h2 className="card2">{project.description}</h2>
               <img className="cardPic" src={project.image} width="300px" height="300px" /><br/>
               <button className="button"><Link className="view" to={project.href}>View Project</Link></button>
           </div>
       ))}
       </>
    )
}

export default Project; 