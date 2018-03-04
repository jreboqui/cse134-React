import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import StudentAPI from '../../Student/StudentAPI';
import style from './ApplicantsList.css';

class ApplicantsList extends Component {
    State={
        currApplicants: [],
        applicantsStatus: []
    }
    //currApplicants = [];

     componentWillMount() {
        const compId = this.props.companyId;
        const positionId = this.props.positionId;
        const allStudents = StudentAPI.all();
        var applicantsArr = [];
        var statusArr = [];
        for(var i = 0; i < allStudents.length;i++){
            for(var j = 0; j < allStudents[i].applications.length;j++){
                if(allStudents[i].applications[j].companyId === parseInt(compId)
                    && allStudents[i].applications[j].positionId ===  parseInt(positionId)){
                        applicantsArr.push(allStudents[i]);
                        statusArr.push(allStudents[i].applications[j].appStatus);
                }
            }
        }
        console.log(applicantsArr);
        //this.currApplicants = applicantsArr;
        this.setState({currApplicants:applicantsArr});
        this.setState({applicantsStatus:statusArr});
     }

    render() {
        //console.log(this.props.companyId);
        console.log(this.state.currApplicants);
        return (
            <div className="applicants" style={{clear:"both", marginTop:"300px"}}>
                <hr></hr>
                <h2 stle={{paddingLeft: "1%"}}>List of Applicants</h2>
                <ul id="app-list" className="ul-applicants">
                    {this.state.currApplicants.map((app,i) => (
                        <li>
                            <img alt="none" src={require(`${app.pic}`)} />
                            <br></br>{app.name}<br></br>{app.school}<br></br>{app.gpa}
                            {this.state.applicantsStatus[i]}<br></br>
                            <Link to={`/company/${this.props.companyId}/posid/${this.props.positionId}/applicant/${app.number}`}>
                                <button class="btn btn-success" style={{width:"7em"}}>To Profile</button>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ApplicantsList; 