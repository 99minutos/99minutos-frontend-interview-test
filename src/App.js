
import SpaceProvider from './context/SpaceProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_LAUNCHES_PAST } from './graphql/query/getLaunchesPast';
import { useEffect, useState } from 'react';
import Article from './pages/Articles/Article';
import Home from './pages/Home';

function App() {

  const {data, error, loading} = useQuery(GET_LAUNCHES_PAST);
  const [launches, setLaunches] = useState([]);
  

  useEffect(()=>{
    if(data){
      setLaunches(data.launchesPast);
    }
    if(error){
      setLaunches([]);
    }
  },[data, error])
  
  return (
      <SpaceProvider data={launches}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/launches/:id'>
            <Article/>
          </Route>
        </Switch>
      </Router>
      </SpaceProvider>
  );
}

export default App;
