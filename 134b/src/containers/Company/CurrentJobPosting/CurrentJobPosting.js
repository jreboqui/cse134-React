import React, {Component} from 'react';

import Company from '../Company';
import CompanyAPI from '../CompanyAPI';
import JobDetails from './JobDetails';
import CompanyAbout from './CompanyAbout';
import styles from './CurrentJobPosting.css';
import localAPI from '../../../Shared/localAPI';
import ApplicationInfo from '../../../Shared/ApplicationInfo';
import StudentAPI from '../../Student/StudentAPI';
import ApplicantsList from './ApplicantsList';

class CurrentJobPosting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currCompany: null,
            bannerPath: "",
            currJobPosting: ""
        };
    }

    componentWillMount(){
        //this.userType = localStorage.getItem('userType');
        this.userType = localAPI.all().userType;
        let retrievedCompanies = CompanyAPI.all();
        console.log(retrievedCompanies);
        //console.log(this.props.match.params.positionId);
        const companyId = this.props.match.params.companyId;
        const positionId = this.props.match.params.positionId;
        for (var i = 0; i < retrievedCompanies.length; i++){
            if(companyId == retrievedCompanies[i].id){
                this.setState({currCompany: retrievedCompanies[i]});
                this.setState({bannerPath: "'../../Shared/Images/" + retrievedCompanies[i].bannerURL + "'"});
                break;
            }
        }

        for (var j = 0; j < retrievedCompanies[i].openPositions.length; j++){
            if(retrievedCompanies[i].openPositions[j].id == this.props.match.params.positionId){
                this.setState({currJobPosting: retrievedCompanies[i].openPositions[j]});
                break;
            }
        }
    }

    onClickApply = () => {
        var status = "Under Review";
        const newApplication = new ApplicationInfo(
            this.state.currCompany.id, this.state.currCompany.name,this.state.currJobPosting.title,this.state.currJobPosting.positionId,status);
        
        StudentAPI.apply(parseInt(localAPI.all().userId),newApplication);
        alert("Success! " + newApplication.positionTitle + " with " + newApplication.companyName + " has been added to your application list.");
        this.props.history.push("/student/" + localAPI.all().userId);
        
    }

    render() {
        //console.log(this.state.currJobPosting);
        return(
            <div>
                <div id="id-banner" className="jumbotron jumbotron-fluid"></div>
                <div>
                    <div id="id-curr-job-title" className="curr-job-title" style={{paddingLeft: "1%"}}>
                        <h1>{this.state.currJobPosting.title}</h1>
                    </div>

                    <div style={{paddingTop: "15px"}} className="extra-buttons">

                        <button style={{width: "6em", paddingLeft:"15px", paddingRight: "15px", paddingTop:"10px", paddingBottom:"10px"}} 
                                    className="btn btn-success" type="button" onClick={this.onClickApply}>Apply</button>
                        <button style={{width: "6em", paddingLeft:"15px", paddingRight: "15px", paddingTop:"10px", paddingBottom:"10px"}} 
                                    className="btn btn-primary" type="button">Edit</button>
                        <button style={{width: "6em", paddingLeft:"15px", paddingRight: "15px", paddingTop:"10px", paddingBottom:"10px"}} 
                                    className="btn btn-danger" type="button">Remove</button> 
                    </div>
                </div>

                <hr style={{clear:"both"}}></hr>
                <JobDetails 
                    description={this.state.currJobPosting.description}
                    reqs={this.state.currJobPosting.reqs}
                />

                <div className="extra">
                    <CompanyAbout 
                        hq={this.state.currCompany.hq} 
                        size={this.state.currCompany.size}
                        industry={this.state.currCompany.Industry}
                        website={this.state.currCompany.website}
                    />
                    {/* <h4>Company Details:</h4>
                    <ul id="id-comp-details">
                    </ul> */}
                    <hr></hr>
                    <div className="photos">
                        <h4>Photos:</h4>
                        <div>
                            <ul id="id-ul-photos" className="ul-photo-list">
                            </ul>
                        </div>
                    </div>    
                </div>
                
                <ApplicantsList companyId={this.props.match.params.companyId}
                positionId={this.props.match.params.positionId}/>
                
            </div>
        )
    }
}

export default CurrentJobPosting;