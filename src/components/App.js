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
            name: "Greeky Mythology", 
            description: "An application for the ancient Greece lover! Created with a React frontend and a Rails backend, this app allows you to add/delete your favorite greek characters and information about them.",
            image: "https://www.realmofhistory.com/wp-content/uploads/2018/05/facts_greek_gods_goddesses_17-min.jpg", 
            link: "https://greekfrontend.herokuapp.com/"
        }, 
        {
            id: 2, 
            name: "Memory Tracker", 
            description: "An application to help you hang on to those family memories! Created with a React frontend and a Rails backend, this app showcases full C.R.U.D capabilities. ",
            image: "https://tse1.mm.bing.net/th?id=OIP.G8tBcAWXGRQrMBbimY-VNgHaHa&pid=Api&P=0",
            link: "https://pure-earth-70536.herokuapp.com/"
        }, 
        {
            id: 3, 
            name: "Chore Board", 
            description: "An application that keeps your family members informed of their chores. Created with a React frontend and a Rails backend, this app showcases full C.R.U.D capabilities, authentication, and authorization. ", 
            image: "https://www.superhealthykids.com/wp-content/uploads/2019/08/il_fullxfull.1978948793_112r.jpg", 
            link: "https://secret-island-48967.herokuapp.com/"
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