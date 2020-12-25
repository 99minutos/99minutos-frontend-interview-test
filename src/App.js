import { Switch, Route } from 'react-router-dom';
import Launches from './components/Launches';
import Header from './components/Header';
import LaunchDetail from './components/LaunchDetail';
import Container from 'react-bootstrap/Container';

const App = () => {
  return (
    <Switch>
      <>
        <Container>
          <Header />
          <Route exact path='/' component={Launches} />
          <Route exact path='/:id' component={LaunchDetail} />
        </Container>
      </>
    </Switch>
  );
};

export default App;
