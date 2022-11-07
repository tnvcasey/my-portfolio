import React from "react";
import Project from "./Project";

function ProjectList({projects}){
    
    return (
        <section className="hero">
            <div className="container">
                <Project projects={projects}/>
             </div>
        </section>

    )

}

export default ProjectList;
