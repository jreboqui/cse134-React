import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Welcome from './containers/Welcome/Welcome'
import Login_Page from './containers/Login_Page/Login_Page'
import Company from './containers/Company/Company';
import Student from './containers/Student/Student';
import Tutor from './containers/Tutor/Tutor';
import CurrentJobPosting from './containers/Company/CurrentJobPosting/CurrentJobPosting';
import Messaging from './containers/Messaging/Messaging';
import EditProfile from './containers/Student/EditProfile';
import Applicant from './containers/Company/Applicant';
import EditTutorProfile from './containers/Tutor/EditTutorProfile';
import EditCompanyProfile from './containers/Company/EditCompanyProfile';
import NewPosition from './containers/Company/NewPosition';
import Player from './containers/Student/Player';
import Magic from './containers/Student/Magic';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Switch>      
          <Route path="/" exact component={Welcome}/>
          <Route path="/login" exact component={Login_Page}/>
          <Route path="/company/:companyId" exact component={Company}/>
          <Route path="/editProfile/company/:companyId" exact component={EditCompanyProfile} />
          <Route path="/company/:companyId/position/:positionId" exact component={CurrentJobPosting}/>
          <Route path="/company/newposition/:companyId" exact component = {NewPosition}/>
          <Route path="/messaging" component={Messaging}/>
          {/* <Route path="/student" component={Student} /> */}
          <Route path='/student/:number' exact component={Player} />
          <Route path="/tutor/:tutorId" exact component={Tutor} />
          <Route path="/editprofile/tutor/:tutorId" exact component={EditTutorProfile} />
          <Route path="/editProfile" component={EditProfile} />
          <Route path="/company/:companyId/posid/:positionId/applicant/:number" exact component={Applicant} />         
          <Route path="/magic" component={Magic} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
