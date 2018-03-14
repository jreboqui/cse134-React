import React from 'react';
import { Switch, Route } from 'react-router-dom'
import EditProfile from "./EditProfile";
import {Player} from './Player';
import {FullRoster} from './FullRoster';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//import * as courseActions from '../../actions/courseActions';
import * as studentActions from '../../actions/studentActions';
//import CourseList from './CourseList';
//import {browserHistory} from 'react-router';

export class Student extends React.Component{
        constructor(props, context) {
          super(props, context);
          //this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
        }
      
    render(){
        // console.log(this.props);
        // const {students} = this.props;
        // console.log(students);
        return (
        <div>
           
           <Switch>
                <Route exact path='/student' component={FullRoster}/>
                {/* <Route path='/student/:number' render={() => <Player allStudents={students}/>} /> */}
                
                <Route path='/editprofile/student/:number' exact component={EditProfile} />
            </Switch>
        </div>
        );
    };
 }
// function mapStateToProps(state, ownProps) {
//     return {
//       students: state.students,
//       //params: ownProps
//     };
//   }
  
// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(studentActions, dispatch)
//   };
// }

export default (Student);