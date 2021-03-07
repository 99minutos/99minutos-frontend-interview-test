import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Mission from './pages/Mission';
import Home from './pages/Home';


const Routes = () => {
    return (
    <Router>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/dash' component={Dashboard}/>
            <Route exact path='/mission/:id' component={Mission}/>
        </Switch>
     </Router>
    )
}

export default Routes
