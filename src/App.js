import './App.css';
import History from './Components/History';
import searchLastTen from './Components/searchLastTen';
import { Router, Switch, Route } from 'react-router-dom';
import seeDatail from './Components/seeDatail';


function App() {
  return (
    <>
      <Router history={ History }>
       <Switch>
        <Route exact path="/" component={searchLastTen}/>
        <Route path="/moredetails" component={seeDatail}/>
       </Switch>
      </Router>
    </>
  );
}

export default App;
