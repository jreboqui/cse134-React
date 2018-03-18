import React from 'react';
import { Switch, Route } from 'react-router-dom'
import CompanyListings from '../Student/CompanyListings';
import ApplicationTable from '../Student/ApplicationTable';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as tutorActions from '../../actions/tutorActions';

import '../Student/resume.css';
import '../Student/resume.min.css';
import './Tutor.css';
import TutorAPI from './TutorAPI';
export class Tutor extends React.Component{
    state = {
        currTutor: null
    }
    componentWillMount(){
        let allTutors = TutorAPI.all();
        //console.log(allTutors);
        //console.log(this.props.match.params);
        const tutorId = this.props.match.params.tutorId;
        this.setState({currTutor: tutorId});
        
    }

    onClickLogout = () => {
        this.props.history.push('/login');
    }
    
    handleEditTutorProfile = () => {
        this.props.history.push('/editprofile/tutor/' + this.props.match.params.tutorId);
    }

    render(){
        // const tuts = TutorAPI.get(
        //     parseInt(this.props.match.params.tutorId, 10)
        // )
        let i;
        let tuts;
        console.log("[Tutor.js]");
        console.log(this.props.allTutors);
        let tutorId = parseInt(this.props.match.params.tutorId,10);
        for (i = 0; i < this.props.allTutors.length; i++){
            if (this.props.allTutors[i].tutorId == tutorId){
                tuts = this.props.allTutors[i];
                break;
            }
        }
        //const {allTutors} = this.props;
        //console.log(allTutors);
        //console.log(tuts);
        //console.log("Tuts was printed");
        if (!tuts){
            return <div> Sorry, tutorId not found </div>
        }
        
        return (
            <div>
            <div id="sidebar"> 
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="sideNav">
                    <img alt="none" 
                    src={require(`${tuts.profilePic}`)}
                    height="200px"
                    width="200px"/>
                    <h2> {tuts.name}</h2>
                    <h5> School: {tuts.school} </h5>
                    <h5> GPA: {tuts.GPA} </h5>
                    <h5> Year: {tuts.year} </h5>
                    <button id="b1" className="btn btn-primary" onClick={this.handleEditTutorProfile}> Edit Profile </button>
                    <br/>
                    <button className="btn btn-warning"> Messaging </button>
                    <br/>
                    <button id="b3" className="btn btn-danger" onClick={this.onClickLogout}> Logout </button>
                </nav>            
            </div>
            <ApplicationTable studentObject={tuts}/>
            <CompanyListings />
        </div>
        );
    };
}

function mapStateToProps(state, ownProps) {
    return {
      allTutors: state.tutors
    };
  }
  
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(tutorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tutor);