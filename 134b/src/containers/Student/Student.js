import React from 'react';
import { Switch, Route } from 'react-router-dom'
import EditProfile from "./EditProfile";
import {Player} from './Player';
import {FullRoster} from './FullRoster';

export class Student extends React.Component{
    render(){
        return (
        <div>
           
           <Switch>
                <Route exact path='/student' component={FullRoster}/>
                <Route path='/student/:number' exact component={Player} />
                <Route path='/editprofile/student/:number' exact component={EditProfile} />
            </Switch>
        </div>
        );
    };
}

export default Student