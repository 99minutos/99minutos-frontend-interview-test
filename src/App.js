import './App.css';
import {Switch, Route} from "react-router-dom"
import Dashboard from "./routes/Dashboard/Dasboard"
import Mission from "./routes/Mission/Mission"
import Home from "./routes/Home/Home"

function App() {
  return (
    <div className="app">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/mission/:missionId" component={Mission}/>
        </Switch>
    </div>
  );
}

export default App;
