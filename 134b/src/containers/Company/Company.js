import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';

import styles from './Company.css';
import CompanyAPI from './CompanyAPI';
import JobOpening from './JobOpening/JobOpening'
//import CurrentJobPosting from './CurrentJobPosting/CurrentJobPosting';

class Company extends Component {
    
    state = {
        currCompany: null,
        userType: '',
        renderPositions: false,
        bannerPath: ""
    }

    componentWillMount(){
        this.userType = localStorage.getItem('userType');
        let retrievedCompanies = CompanyAPI.all();
        console.log(retrievedCompanies);
        //console.log(this.props.match.params);
        if(this.props.match.params.positionId != null)
            this.setState({renderPositions: true})
        const companyId = this.props.match.params.companyId;
        for (var i = 0; i < retrievedCompanies.length; i++){
            if(companyId == retrievedCompanies[i].id){
                this.setState({currCompany: retrievedCompanies[i]});
                this.setState({bannerPath: "'../../Shared/Images/" + retrievedCompanies[i].bannerURL + "'"});
                break;
            }
        }
    }

    render(){
        if(!this.state.renderPositions){
            //bannerPath = "'../../Shared/Images/" + this.state.currCompany.bannerURL + "'";
            //style={{backgroundImage: "url("+ require(this.state.bannerPath) + ")" }}
            return (
                <div>
                    <div className="jumbotron jumbotron-fluid">
                    </div>
                    <div className="open-jobs">
                        <div id ="id-about" style={{ paddingLeft: '1%'}}></div>
                        <hr></hr>
                        <div style={{paddingLeft:'1%'}}>
                            <JobOpening positions={this.state.currCompany.openPositions}/>
                        </div>
                        <div style={{paddingLeft:'2%'}}>
                            {/* <button id="btn-add" onClick="addNewPosition(1)" className="btn btn-success" type="button" style="float: left">Add</button> */}
                        </div>   
                    </div>
                </div>
            );
        } else {
            return (<div>
                        <Route path="/company/:companyId/position/:positionId"/>
                    </div>);
        }
    } 
}

export default Company;