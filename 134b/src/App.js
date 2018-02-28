import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Welcome from './containers/Welcome/Welcome'
import Login_Page from './containers/Login_Page/Login_Page'
import Company from './containers/Company/Company';
import Student from './containers/Student/Student';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Switch>      
          <Route path="/" exact component={Welcome}/>
          <Route path="/login" exact component={Login_Page}/>
          <Route path="/company/:companyId" exact component={Company}/>
          <Route path="/student" component={Student} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
