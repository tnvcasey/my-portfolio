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
            description: "An application for the ancient Greece lover! Created with a React JS frontend and a Rails backend, this app allows you to add/delete your favorite greek characters and information about them.",
            image: "https://scontent-den4-1.xx.fbcdn.net/v/t39.30808-6/319509687_2035394189994137_3505637945790826824_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=ecacV9Jv8pIAX8L7g2M&_nc_ht=scontent-den4-1.xx&oh=00_AfDjUqLTV9v9TVA715yOlZOdUGkVe1EQgDS4TW-3kfI7og&oe=63C605FE", 
            link: "https://greekfrontend.herokuapp.com/"
        }, 
        {
            id: 2, 
            name: "Memory Tracker", 
            description: "An application to help you hang on to those family memories! Created with a React JS frontend and a Rails backend, this app showcases full C.R.U.D capabilities. ",
            image: "https://scontent-den4-1.xx.fbcdn.net/v/t39.30808-6/320888289_1838470959833868_5277504167270404134_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=kYyd-FVet80AX86gWeg&_nc_ht=scontent-den4-1.xx&oh=00_AfCRLyDQ0rqkP8zGNSXsS7OedNsZP7AqVaV-Oy2La4Aatg&oe=63C64D39",
            link: "https://pure-earth-70536.herokuapp.com/"
        }, 
        {
            id: 3, 
            name: "The Informer", 
            description: "A real estate app that lets you post the lesser known, but just as important, details before puschasing a home. This app focuses on authentication, and authorization through a Rails backend, and uses a React JS frontend. ", 
            image: "https://scontent-den4-1.xx.fbcdn.net/v/t39.30808-6/320059980_673197777684409_1140011154830140851_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=qEsnjnpb_q8AX_oe7Zr&_nc_ht=scontent-den4-1.xx&oh=00_AfBkIr9bP1E6IBR3mhOuB4NMxSm0Hn3OraTjH2ztA9qSoQ&oe=63C778C6", 
            link: "https://damp-beyond-33023.herokuapp.com/"
        },
        {
            id: 4, 
            name: "Sam's Sweet Shop", 
            description: "A simple sweet shop app dislpaying your favorite sweets! Created with a React JS frontend and a Rails backend.",
            image: "https://scontent-den4-1.xx.fbcdn.net/v/t39.30808-6/320173013_514633007396705_3079855972047229465_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=j5c_r-b_p74AX9H8imb&_nc_ht=scontent-den4-1.xx&oh=00_AfAzcELzyaBuZZIDJH3lhFJbb36b7wKLFsHKHDbgHv-2cg&oe=63C66F11",
            link: "https://powerful-forest-01461.herokuapp.com/"
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