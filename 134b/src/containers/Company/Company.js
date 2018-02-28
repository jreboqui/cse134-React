import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';

import styles from './Company.css';


class Company extends Component {
    
    state = {
        currCompany: null,
        userType: ''
    }

    componentWillMount(){
        this.userType = localStorage.getItem('userType');
        let retrievedCompanies = localStorage.getItem('allCompanies');
        retrievedCompanies = JSON.parse(retrievedCompanies);
        const companyId = this.props.match.params.companyId;
        for (var i = 0; i < retrievedCompanies.length; i++){
            if(companyId == retrievedCompanies[i].id)
                this.currCompany = retrievedCompanies[i];
        }
        console.log(this.currCompany);
    }

    render(){
    
        return (
            <div>
                <div id="id-banner" className="jumbotron jumbotron-fluid"></div>
                <div className="open-jobs">
                    <div id ="id-about" style={{ paddingLeft: '1%'}}>
                    </div>
                    <hr></hr>
                    <div style={{paddingLeft:'1%'}}>
                        <h2>Currently Open Intern Positions</h2>
                        <ul id="id-list-open-position">
                        </ul>
                    </div>
                    <div style={{paddingLeft:'2%'}}>
                        {/* <button id="btn-add" onClick="addNewPosition(1)" className="btn btn-success" type="button" style="float: left">Add</button> */}
                    </div>   
                </div>
            </div>
        ); 
    }
}

export default Company;