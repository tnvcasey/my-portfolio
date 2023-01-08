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
            image: "https://scontent-den4-1.xx.fbcdn.net/v/t39.30808-6/319509687_2035394189994137_3505637945790826824_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=ffEZbfwLy3cAX9ItVCH&_nc_ht=scontent-den4-1.xx&oh=00_AfADxJRlfagRU4YxZnVAk2z-YV8xqY1ek1ThxmUJGGElMA&oe=63C0173E", 
            link: "https://greekfrontend.herokuapp.com/"
        }, 
        {
            id: 2, 
            name: "Memory Tracker", 
            description: "An application to help you hang on to those family memories! Created with a React JS frontend and a Rails backend, this app showcases full C.R.U.D capabilities. ",
            image: "https://scontent-den4-1.xx.fbcdn.net/v/t39.30808-6/320888289_1838470959833868_5277504167270404134_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=Hq7_f55uas4AX89JIhC&_nc_ht=scontent-den4-1.xx&oh=00_AfAXKhEilXPzevgFnFz17CMDN6FCUuTrHmFkQhhWBJeJ0g&oe=63BE6439",
            link: "https://pure-earth-70536.herokuapp.com/"
        }, 
        {
            id: 3, 
            name: "The Informer", 
            description: "A real estate app that lets you post the lesser known, but just as important, details before puschasing a home. This app focuses on authentication, and authorization through a Rails backend, and uses a React JS frontend. ", 
            image: "https://scontent-den4-1.xx.fbcdn.net/v/t39.30808-6/320059980_673197777684409_1140011154830140851_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=RZaX0KTD4S0AX8FDEpn&_nc_ht=scontent-den4-1.xx&oh=00_AfCPlbMVwPDUXHxzpOJBB7xAgjBWrIGe7A82Mpgx6EQi2A&oe=63BF8FC6", 
            link: "https://damp-beyond-33023.herokuapp.com/"
        },
        {
            id: 4, 
            name: "Sam's Sweet Shop", 
            description: "A simple sweet shop app dislpaying your favorite sweets! Created with a React JS frontend and a Rails backend.",
            image: "https://scontent-den4-1.xx.fbcdn.net/v/t39.30808-6/320173013_514633007396705_3079855972047229465_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=KO5ZDySXlG4AX8yYtFC&_nc_ht=scontent-den4-1.xx&oh=00_AfCiO_RN9HOu-QXxingfsnG6BAYJm91Jk3VNvK3emCLEBA&oe=63BE8611",
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