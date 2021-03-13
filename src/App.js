import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Mission from './pages/Mission';

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route exact path='/mission/:id' component={Mission}/>
        </Switch>
     </Router>
  );
}

export default App;
