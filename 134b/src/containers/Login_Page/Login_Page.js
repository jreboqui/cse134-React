import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';

import styles from './Login_Page.css';
import {Company, Positions, applicationInfo, mentee, allCompanies, 
    allStudents, allTutors, Student, Tutor, mail} from  './../../Shared/Objects';
import CompanyAPI from '../Company/CompanyAPI';
import StudentAPI from '../Student/StudentAPI';
import TutorAPI from '../Tutor/TutorAPI';

class Login_Page extends Component {

    //Add constructor for pages that contain forms
    constructor(props){ 
        super(props); //dont forget to always include this in the constructor!
        this.state = {
            username: '',
            password: '',
            userType: 's' 
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        let valid = false;
        switch(this.state.userType){
            case('c'): {
                const retrivedCompanies = CompanyAPI.all();
                for(var i = 0; i < retrivedCompanies.length; i++){
                    if(this.state.username == retrivedCompanies[i].username &&
                        this.state.password == retrivedCompanies[i].password){
                            alert("Sign in Successful!");
                            localStorage.setItem("userType", 'c');
                            localStorage.setItem("userId",retrivedCompanies[i].id);
                            valid = true;
                            this.props.history.push(`/company/${retrivedCompanies[i].id}`);
                            break;
                    }
                }
                break;
            }
            case('s'): {
                const retrivedStudents = StudentAPI.all();
                for(var i = 0; i < retrivedStudents.length; i++){
                    if(this.state.username == retrivedStudents[i].username &&
                        this.state.password == retrivedStudents[i].password){
                            alert("Sign in Successful!");
                            localStorage.setItem("userType", 's');
                            localStorage.setItem("userId",retrivedStudents[i].number);
                            valid = true;
                            this.props.history.push(`/student/${retrivedStudents[i].number}`);
                            break;
                    }
                }
                break;
            }
            case('t'): {
                const retrivedTutors = TutorAPI.all();
                for(var i = 0; i < retrivedTutors.length; i++){
                    if(this.state.username == retrivedTutors[i].username &&
                        this.state.password == retrivedTutors[i].password){
                            alert("Sign in Successful!");
                            localStorage.setItem("userType", 't');
                            localStorage.setItem("userId",retrivedTutors[i].tutorId);
                            valid = true;
                            this.props.history.push(`/tutor/${retrivedTutors[i].tutorId}`);
                            break;
                    }
                }
                break;
            }
            default: {

                break;
            }    
        }

        if(!valid){
            alert("Invalid Username and Password Combination!");
            event.preventDefault();
        }

    }

    render() {
        return (
            <div>
                <div className="container">
                    <h2>3-Days-Rush</h2><hr></hr>
                    <form onSubmit={this.handleSubmit}>
                        <label><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="username"
                                value={this.state.username} onChange={this.handleChange} required>
                        </input>

                        <label><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="password"
                                value={this.state.password} onChange={this.handleChange} required>
                        </input>
                        
                        <label><b>Login as:</b></label>
                        <br></br>
                        <select value={this.state.userType} onChange={this.handleChange} name="userType">
                            <option value='s'>Student</option>
                            <option value='t'>Tutor</option>
                            <option value='c'>Company</option>
                        </select>
                    
                        <input className="btn btn-success" style={{width:"100%", marginTop: "20px", marginBottom:"20px"}} type="submit" value="Login"/>
                    </form>
                    
                    <button className="btn btn-primary" style={{width:"100%"}}>Register</button>
                </div>
            </div>
        );
    }
}

export default Login_Page;