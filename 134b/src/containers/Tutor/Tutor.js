import React from 'react';
import { Switch, Route } from 'react-router-dom'
import CompanyListings from '../Student/CompanyListings';
import ApplicationTable from '../Student/ApplicationTable';

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
        console.log(allTutors);
        //console.log(this.props.match.params);
        const tutorId = this.props.match.params.tutorId;
        this.setState({currTutor: tutorId});
        
    }
    render(){
        const tuts = TutorAPI.get(
            parseInt(this.props.match.params.tutorId, 10)
        )
        console.log(tuts);
        console.log("Tuts was printed");
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
                    <h3> School: {tuts.school} </h3>
                    <h3> GPA: {tuts.GPA} </h3>
                    <h3> Year: {tuts.year} </h3>
                    <button className="btn btn-primary"> Edit Profile </button>
                    <br/>
                    <button className="btn btn-warning"> Messaging </button>
                    <br/>
                    <button className="btn btn-danger"> Logout </button>
                </nav>            
            </div>
            <ApplicationTable />
            <CompanyListings />
        </div>
        );
    };
}

export default Tutor