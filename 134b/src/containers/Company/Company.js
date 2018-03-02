import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import styles from './Company.css';
import CompanyAPI from './CompanyAPI';
import JobOpening from './JobOpening/JobOpening'
import CurrentJobPosting from './CurrentJobPosting/CurrentJobPosting';
import CompanyAbout from './CurrentJobPosting/CompanyAbout';

class Company extends Component {
    
    state = {
        currCompany: null,
        userType: '',
        bannerPath: ""
    }

    componentWillMount(){
        this.userType = localStorage.getItem('userType');
        let retrievedCompanies = CompanyAPI.all();
        console.log(retrievedCompanies);
        //console.log(this.props.match.params);
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
                        <JobOpening companyId={this.state.currCompany.id}
                            positions={this.state.currCompany.openPositions}/>
                    </div>
                    <div style={{paddingLeft:'2%'}}>
                        {/* <button id="btn-add" onClick="addNewPosition(1)" className="btn btn-success" type="button" style="float: left">Add</button> */}
                    </div>   
                </div>

                <div className="extra">
                    <CompanyAbout 
                            hq={this.state.currCompany.hq} 
                            size={this.state.currCompany.size}
                            industry={this.state.currCompany.Industry}
                            website={this.state.currCompany.website}
                    />

                    <hr></hr>

                    <div className="photos">
                        <h4>Photos:</h4>
                        <div>
                        <ul id="id-ul-photos" className="ul-photo-list">
                        </ul>
                        </div>
                    </div>

                    <br></br>
                    <button className="btn btn-primary" 
                        style={{width: "6.5em", paddingLeft:"15px", paddingRight: "15px", paddingTop:"10px", paddingBottom:"10px"}}>Messaging</button>
                    <button className="btn btn-danger" 
                        style={{width: "6em", paddingLeft:"15px", paddingRight: "15px", paddingTop:"10px", paddingBottom:"10px", marginLeft:"10px"}}>Logout</button> 

                </div>

            </div>
        ); 
    } 
}

export default Company;