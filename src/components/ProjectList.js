import React from "react";
import Project from "./Project";

function ProjectList({projects}){
    
    return (
        <section className="hero">
            <h1 className="projectHeader">My Personal Projects</h1>
            <div className="container">
                <Project projects={projects}/>
             </div>
        </section>

    )

}

export default ProjectList;
