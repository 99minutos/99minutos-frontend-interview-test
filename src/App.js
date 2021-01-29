import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'
import Menu from "./Components/Menu";
import Mission from "./Components/Mission";
import React from "react";


function App() {
    return (
        <div className="App" >
            <HashRouter>
                <Menu/>
                <Switch>
                    <Route path="/" exact to={"/"} component={Home}/>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/mission" component={Mission}/>
                </Switch>
            </HashRouter>
        </div>
    );
}

export default App;
