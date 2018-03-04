import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import styles from './Company.css';
import CompanyAPI from './CompanyAPI';
import localAPI from '../../Shared/localAPI';
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
        let localStore = localAPI.all();
        //this.userType = localStorage.getItem('userType');
        this.userType = localStore.userType;
        let retrievedCompanies = CompanyAPI.all();
        console.log(retrievedCompanies);
        const companyId = this.props.match.params.companyId;
        for (var i = 0; i < retrievedCompanies.length; i++){
            if(companyId == retrievedCompanies[i].id){
                this.setState({currCompany: retrievedCompanies[i]});
                //this.setState({bannerPath: "../../Shared/Images/" + retrievedCompanies[i].bannerURL});
                this.setState({bannerPath: retrievedCompanies[i].bannerURL});
                break;
            }
        }
    }

    onClickLogout = () => {
        this.props.history.push('/login');
    }

    onClickMessage = () => {
        this.props.history.push('/messaging');
    }

    handleEditCompanyProfile = () => {
        this.props.history.push('/editprofile/company/' + this.props.match.params.companyId);
    }

    render(){
        //bannerPath = "'../../Shared/Images/" + this.state.currCompany.bannerURL + "'";
        console.log(this.state.bannerPath);
        //style={{backgroundImage: "url("+ this.state.bannerPath + ")" }}
        console.log("backgroundImage: url(${require('./'+this.state.bannerPath)}");
        return (
            <div>
                <div className="jumbotron jumbotron-fluid"
                    style={{backgroundImage: `url(${this.state.bannerPath}`}}>
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
                
                    <button className="btn btn-primary"  onClick={this.handleEditCompanyProfile}
                        style={{width: "6.5em", paddingLeft:"15px", paddingRight: "15px", paddingTop:"10px", paddingBottom:"10px"}}>Edit Profile</button>
                    <button className="btn btn-warning"  onClick={this.onClickMessage}
                        style={{width: "6.5em", paddingLeft:"15px", paddingRight: "15px", paddingTop:"10px", paddingBottom:"10px"}}>Messaging</button>
                    <button className="btn btn-danger"  onClick={this.onClickLogout}
                        style={{width: "6em", paddingLeft:"15px", paddingRight: "15px", paddingTop:"10px", paddingBottom:"10px", marginLeft:"10px"}}>Logout</button> 

                </div>

            </div>
        ); 
    } 
}

export default Company;