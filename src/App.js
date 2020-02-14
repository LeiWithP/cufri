import React from 'react';
import Login from './Login/Login';
import { Route, BrowserRouter as Router, Switch  } from 'react-router-dom';

export default function App() {
  return(
      <Router>
          <Switch>
              <Route exact path="/">
                  <Login/>
              </Route>
              <Route render={() => <h1>404 Error</h1>} />
          </Switch>
      </Router>
  );
}
