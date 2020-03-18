import React from 'react';
import Login from './Login/Login';
import Main from './MainPage/MainPage';
import Dates from './Dates/Dates'; 
import Patients from './Patients/Record/Patologicrecord';
import Recordp1 from './Patients/Record/Identification';
import Recordp2 from './Patients/Record/Familiarantecedents';
import Recordp3 from './Patients/Record/Nopatologicantecedents';
import Recordp4 from './Patients/Record/Patologicrecord';
import Recordp5 from './Patients/Record/Ginecoobstetricrecord';
import Recordp6 from './Patients/Record/Generalrecord';
import Recordp7 from './Patients/Record/Physicalexam';
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
              <Route exact path="/Patients/Ficha de identificacion">
                  <Recordp1/>
              </Route>
              <Route exact path="/Patients/Antecedentes familiares">
                  <Recordp2/>
              </Route>
              <Route exact path="/Patients/Antecedentes no patologicos">
                  <Recordp3/>
              </Route>
              <Route exact path="/Patients/Antecedentes patologicos">
                  <Recordp4/>
              </Route>
              <Route exact path="/Patients/Antecedentes Gineco-obstetricos">
                  <Recordp5/>
              </Route>
              <Route exact path="/Patients/Aspectos generales">
                  <Recordp6/>
              </Route>
              <Route exact path="/Patients/Examen físico">
                  <Recordp7/>
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
