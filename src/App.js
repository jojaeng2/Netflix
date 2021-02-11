import React, { Component } from "react";
import Home from "./routes/Home.js";
import About from "./routes/About.js";
import Navigation from "./components/Navigation.js";
import Detail from "./routes/Detail.js"; 
import { HashRouter, Route } from "react-router-dom";

function App(){
    return(
    <HashRouter>
        <Navigation />
        <Route path="/" component={Home} exact/>
        <Route path="/about" component={About} exact />
        <Route path="/movie-detail" component={Detail} exact /> 
    </HashRouter>
    )
}

export default App;
