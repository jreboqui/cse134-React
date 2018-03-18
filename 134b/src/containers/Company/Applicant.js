import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as studentActions from '../../actions/studentActions';
import * as actionType from '../../actions/actionTypes';

import StudentAPI from '../Student/StudentAPI';
import CompanyAPI from '../Company/CompanyAPI';
import localAPI from '../../Shared/localAPI';
import Banner from './Banner';

export class Applicant extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            currCompany: null,
            currStudent: null,
            currPosition: null,
            currStudentApp: null,
            displayStatus: null,
            value: "",
            currCompany: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount(){
        //const student = StudentAPI.get(parseInt(this.props.match.params.number));
        //const company = CompanyAPI.get(parseInt(this.props.match.params.companyId));
        
        let student = null;
        let company = null;

        let allCompanies = this.props.allCompanies;
        let allStudents = this.props.allStudents;

        for(var i = 0; i < allStudents.length; i++){
            if(allStudents[i].number === parseInt(this.props.match.params.number)){
                student = allStudents[i];
            }
        }
        this.setState({currStudent:student});


        for(var i = 0; i < allCompanies.length; i++){
            if(allCompanies[i].id === parseInt(this.props.match.params.companyId)){
                company = allCompanies[i];
            }
        }
        this.setState({currCompany:company});

        let position = null;
        for(var i = 0; i < company.openPositions.length; i++){
            if(company.openPositions[i].id ===  parseInt(this.props.match.params.positionId)){
                position = company.openPositions[i];
                //console.log(position);
                break;
            }
        }
        this.setState({currPosition:position});
        
        let studentApp = null;
        for(var i = 0; i < student.applications.length;i++){
            if(student.applications[i].positionId === parseInt(this.props.match.params.positionId) &&
            student.applications[i].companyId === parseInt(this.props.match.params.companyId)){
                studentApp = student.applications[i];
                this.setState({displayStatus:student.applications[i].appStatus});
            }
        }
        this.setState({currStudentApp:studentApp});
        
    }

    handleChange(event){
        this.setState({value:event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        //const student = StudentAPI.get(parseInt(this.props.match.params.number));
        console.log("[UPDATEAPPLICATIONSTATUS]");
        //let student = Object.assign({},this.state.currStudent);
        let student = this.state.currStudent
        const company = this.state.currCompany;

        let newApps = null;
        for(var i = 0; i < student.applications.length;i++){
            if(student.applications[i].positionId === parseInt(this.props.match.params.positionId) &&
            student.applications[i].companyId === parseInt(this.props.match.params.companyId)){

                newApps = Object.assign(student);
              
               
                let update = newApps.applications.map((app,index)=>{
                    if(index === i){
                        console.log("In if");
                        return {...app,appStatus:this.state.value}
                    }
                    return app
                })
                
                this.props.actions.onUpdateStatus(this.state.currStudent.number,update);
            
                this.setState({displayStatus:this.state.value});
                //console.log(this.props.allStudents);
                event.preventDefault();
                this.props.history.goBack();
                break;
            }
        }
        //console.log(StudentAPI.all());
        alert("Student Application Status Updated Successfully!");
        
    }

    onClickBack = () => {
        this.props.history.goBack();
    }
    
    render(){
        const student = StudentAPI.get(parseInt(this.props.match.params.number, 10));
        
        let userType = localAPI.all().userType;
        //console.log(userType);
        var isCompany = false;
        (userType === "c") ? isCompany = true: isCompany = false;
        
        return(
            <div>
                <Banner banner={this.state.currCompany.bannerURL}/>
                <div name="studentProfile">
                    <h1>Applicant Profile</h1>
                    <button onClick={this.onClickBack} className="btn btn-danger" style={{float:"right", width:"6em"}}>Go Back</button>
                    <img className="img-fluid img-profile rounded-circle mx-auto mb-2" alt="none" 
                        src={require(`${student.pic}`)}
                        height="200px"
                        width="200px"/>

                    <ul className="navbar-nav">
                        <li className="nav-item">  <h3> {student.name}</h3> </li>
                        <li className="nav-item">  Status: {student.status}</li>
                        <li className="nav-item"> School: {student.school} </li>
                        <li className="nav-item"> Major: {student.major} </li>
                        <li className="nav-item"> GPA: {student.GPA} </li>
                        <li className="nav-item"> Year: {student.year} </li>
                    </ul>
                </div>

                <div>
                    <hr></hr>
                    <h3>Current Status for {this.state.currPosition.title} position:</h3>
                    <h2 style={{textAlign: "center"}}>{this.state.currStudentApp.appStatus}</h2>
                    { isCompany ? (
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <select style={{width:"20em"}} value={this.state.value} onChange={this.handleChange}>
                                <option value="Under Review">{this.state.displayStatus}</option>
                                <option value="Interview Phase I">Interview Phase I</option>
                                <option value="Interview Phase II">Interview Phase II</option>
                                <option value="Interview Phase III">Interview Phase III</option>
                                <option value="Offered">Offered</option>
                                <option value="Rejected">Rejected</option>
                            </select>
                            <input type="submit" style={{marginLeft:"2em", width:"15em", height:"2.8em"}}
                                 className="btn btn-primary" value="Update Application Status"/>
                        </div>
                    </form>): null}
                    <hr></hr>
                    <h3>Connect with this Student!</h3><br></br>
                    <Link to={`/messaging`}>
                        <button className="btn btn-success" style={{width:"20em"}}>Message!</button>
                    </Link>
                </div>
        
            </div>



        )
    }
}

function mapStateToProps(state) {
    return {
      allCompanies: state.companies,
      allStudents: state.students
    };
  }

//Need this to dispatch onApply action in the onClickApply() function above.
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(studentActions, dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Applicant);