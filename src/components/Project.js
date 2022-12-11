import React from "react";
import { Link } from "react-router-dom"

function Project({projects}){
    return(
       <>
       {projects.map((project) => (
           <div className="card">
               <h1 className="card1">{project.name}</h1>
               <h2 className="card2">{project.description}</h2>
               <img className="cardPic" src={project.image} width="500px" height="300px" /><br/>
               <h2 className="link"><a href={project.link}>View Project</a></h2>
           </div>
       ))}
       </>
    )
}

export default Project; 