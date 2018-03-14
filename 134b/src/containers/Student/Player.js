import React from 'react';
import {Link} from 'react-router-dom';
import StudentAPI from './StudentAPI';
import CompanyListings from './CompanyListings';
import ApplicationTable from './ApplicationTable';
import localAPI from '../../Shared/localAPI';
//import Sidebar from './Sidebar';
//import {kpan, pp1} from './Images';
//import { Company } from '../../Shared/Objects';
import './resume.css';
import './resume.min.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//import * as courseActions from '../../actions/courseActions';
import * as studentActions from '../../actions/studentActions';
//import CourseList from './CourseList';
//import {browserHistory} from 'react-router';


export class Player extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         userId: '',
    //         profileImg: '',
    //         sname: '',
    //         schoolname: '',
    //         year: '',
    //         major: '',
    //         status: '',
    //         gpa: '',
    //         intern: ''
    //     };
    // // }
    onClickLogout = () => {
        this.props.history.push('/login');
    }

    handleEditProfile = () => {
        this.props.history.push('/editprofile/student/' + this.props.match.params.number);
    }

    handleMessaging = () => {
        this.props.history.push('/messaging');
    }
        constructor(props){
            super(props);
        }
        
    render(){
        console.log(this.props);
        console.log(this.props.allStudents[0]);
        let localStore = localAPI.all();
        let userType = localStore.userType;
        let userId = localStore.userId;
        let i;
        console.log(userType);
        console.log(userId);
        let player;
        //find userId in allStudents
        for (i = 0; i < this.props.allStudents.length; i++){
            if (this.props.allStudents[i].number == userId){
                player = this.props.allStudents[i];
                break;
            }
        }
        console.log(player);
        //const player = StudentAPI.get(
           // parseInt(this.props.match.params.number, 10)
        //)
        //console.log("Number is:" + player.number);
        //StudentAPI.set(1);
        //console.log(player.number);

        // if (!player){
        //     return <div> Sorry, player not found </div>
        // }

        return (
            <div>
                <div id="sidebar"> 
                    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="sideNav" style={{"backgroundColor":"#bd5d38"}}>
                        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" alt="none" 
                        src={require(`${player.pic}`)}
                        height="200px"
                        width="200px"/>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">  <h3> {player.name}</h3> </li>
                                <li className="nav-item"> School: {player.school} </li>
                                <li className="nav-item"> Major: {player.major} </li>
                                <li className="nav-item"> GPA: {player.GPA} </li>
                                <li className="nav-item"> Year: {player.year} </li>
                                <li className="nav-item">  Status: {player.status}</li>
                            </ul>
                        </div>
                       
                        <button className="btn btn-primary" style={{"width": "50%"}} onClick={this.handleEditProfile}> Edit Profile </button>
                        <br/>
                        <button className="btn btn-warning" style={{"width": "50%"}} onClick={this.handleMessaging}> Messaging </button>
                        <br/>
                        <button className="btn btn-danger" style={{"width": "50%"}} onClick={this.onClickLogout}> Logout </button>
                    </nav>
                </div>
               
                <ApplicationTable studentObject={player}/>
                <CompanyListings />
            </div>
        )

    }
}
export default Player;