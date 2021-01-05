import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// Pages
import Dashboard from "ui/pages/Dashboard";
import Mission from "ui/pages/Mission";
import NotFound from "ui/pages/NotFound";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/mission/:id" component={Mission} />
        <Route exact path="/mission" render={() => <Redirect to="/" />} />
        <Route exact path="/" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
