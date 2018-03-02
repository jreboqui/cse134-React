import React from 'react';
import { Switch, Route } from 'react-router-dom'

import {Player} from './Player';
import {FullRoster} from './FullRoster';
export class Student extends React.Component{
    render(){
        return (
        <div>
           
           <Switch>
                <Route exact path='/student' component={FullRoster}/>
                <Route path='/student/:number' component={Player} />
            </Switch>
        </div>
        );
    };
}

export default Student