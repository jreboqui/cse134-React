import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Welcome from './containers/Welcome/Welcome'
import Login_Page from './containers/Login_Page/Login_Page'
import Company from './containers/Company/Company';
import Student from './containers/Student/Student';
import Tutor from './containers/Tutor/Tutor';
import CurrentJobPosting from './containers/Company/CurrentJobPosting/CurrentJobPosting';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Switch>      
          <Route path="/" exact component={Welcome}/>
          <Route path="/login" exact component={Login_Page}/>
          <Route path="/company/:companyId" exact component={Company}/>
          <Route path="/company/:companyId/position/:positionId" exact component={CurrentJobPosting}/>
          <Route path="/student" component={Student} />
          <Route path="/tutor/:tutorId" exact component={Tutor} />         
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
