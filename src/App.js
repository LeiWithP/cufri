import React from 'react';
import Login from './Login/Login';
import Main from './MainPage/MainPage';
import Dates from './Dates/Dates'; 
import Patients from './Patients/Record/Familiarantecedents';
import Usuers from './Users/Users';
import Stats from './Statistics/Statistics';
import Videos from './Videos/Videos';
import { Route, BrowserRouter as Router, Switch  } from 'react-router-dom';

export default function App() {
  return(
      <Router>
          <Switch>
              <Route exact path="/">
                  <Login/>
              </Route>
              <Route exact path="/Home">
                  <Main/>
              </Route>
              <Route exact path="/Dates">
                  <Dates/>
              </Route>
              <Route exact path="/Patients">
                  <Patients/>
              </Route>
              <Route exact path="/Users">
                  <Usuers/>
              </Route>
              <Route exact path="/Stats">
                  <Stats/>
              </Route>
              <Route exact path="/Videos">
                  <Videos/>
              </Route>
              <Route render={() => <h1>404 Error</h1>} />
          </Switch>
      </Router>
  );
}
