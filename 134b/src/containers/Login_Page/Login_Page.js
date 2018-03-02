import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';

import styles from './Login_Page.css';
import {Company, Positions, applicationInfo, mentee, allCompanies, 
    allStudents, allTutors, Student, Tutor, mail} from  './../../Shared/Objects';
import CompanyAPI from '../Company/CompanyAPI'


class Login_Page extends Component {

    state = {
        allCompanies
    }

    componentDidMount(){
        localStorage.setItem("userType", "c");
        localStorage.setItem("userId", 1);
        console.log("LOGIN_PAGE - COMPONENT DID MOUNT");
        const retrivedCompanies = CompanyAPI.all();
        console.log(retrivedCompanies);
        this.setState({allCompanies: retrivedCompanies}); 
    }


    onClickLogin = (id,type) => {
        if(type == "c")
            this.props.history.push("/company/" + id);
    }

    render() {
        return (
            <div>
                <h2>3-Days-Rush</h2>

                <div className="container">
                    <label><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" id="uname" name="uname" required></input>

                    <label><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" id="psw" name="psw" required></input>
                    
                    <label for="userType"><b>Login as:</b></label>
                    <br></br>
                    <select id="userType" name="userType">
                        <option value="s">Student</option>
                        <option value="t">Tutor</option>
                        <option value="c">Company</option>
                    </select>
                    
                    <form>
                        <button type="button">Login</button>
                        <button className="button-register" type="button" onClick="location.href='register.html'">Register</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login_Page;