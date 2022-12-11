import React from "react"; 
import Navbar from "./Navbar";
import { Route, Switch } from "react-router-dom";
import Resume from "./Resume";
import Home from "./Home";
import ProjectList from "./ProjectList";


function App(){

    const projects = [
        {
            id: 1, 
            name: "Greek Mythology", 
            description: "An application for the ancient Greece lover! Created with a React frontend and a Rails backend, this app allows you to add/delete your favorite greek characters and information about them.",
            image: "https://scontent-den4-1.xx.fbcdn.net/v/t39.30808-6/319509687_2035394189994137_3505637945790826824_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=NK0QNkIC8PYAX9HBObF&_nc_ht=scontent-den4-1.xx&oh=00_AfDAlymoLqcS0DSAIGMvZlhK7MdM-XGg6vCM0sNm5eusPw&oe=639A847E", 
            link: "https://greekfrontend.herokuapp.com/"
        }, 
        {
            id: 2, 
            name: "Memory Tracker", 
            description: "An application to help you hang on to those family memories! Created with a React frontend and a Rails backend, this app showcases full C.R.U.D capabilities. ",
            image: "https://scontent-den4-1.xx.fbcdn.net/v/t39.30808-6/319502108_2035394359994120_2079325722534895815_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=UlJErvT5T6IAX9hk07e&_nc_ht=scontent-den4-1.xx&oh=00_AfDXurIVk9sED9A-b8HWItu7p38zWl1OVHCNstWXiPR0vw&oe=639A93C0",
            link: "https://pure-earth-70536.herokuapp.com/"
        }, 
        {
            id: 3, 
            name: "The Informer", 
            description: "A real estate app that lets you post the lesser known, but just as important, details before puschasing a home. This app focuses on authentication, and authorization through a Rails backend, and uses a React frontend. ", 
            image: "https://scontent-den4-1.xx.fbcdn.net/v/t39.30808-6/319447671_2035393966660826_3990185311603833727_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=-qmPv5jCF78AX8sK_d7&_nc_ht=scontent-den4-1.xx&oh=00_AfDhBMCYgJAS5ouZQjdbcTpHfT44Yh7L1Qs3LrRgNQDuNw&oe=639AE7E4", 
            link: "https://damp-beyond-33023.herokuapp.com/"
        }
    ]


    return(
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/resume">
                    <Resume />
                </Route>
                <Route exact path="/projects">
                    <ProjectList projects={projects} />
                </Route>
            </Switch>
        </div>
        
    )
}

export default App; 