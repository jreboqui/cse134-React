import React from 'react';
import StudentAPI from '../Student/StudentAPI';
import CompanyAPI from '../Company/CompanyAPI';
import localAPI from '../../Shared/localAPI';

class Applicant extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            currCompany: null,
            currStudent: null,
            currPosition: null,
            currStudentApp: null,
            displayStatus: null,
            value: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount(){
        const student = StudentAPI.get(parseInt(this.props.match.params.number));
        this.setState({currStudent:student});
        const company = CompanyAPI.get(parseInt(this.props.match.params.companyId));
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
        const student = StudentAPI.get(parseInt(this.props.match.params.number));
        for(var i = 0; i < student.applications.length;i++){
            if(student.applications[i].positionId === parseInt(this.props.match.params.positionId) &&
            student.applications[i].companyId === parseInt(this.props.match.params.companyId)){
                
                StudentAPI.updateStatus(parseInt(this.props.match.params.number),parseInt(this.props.match.params.positionId),
                        parseInt(this.props.match.params.companyId),this.state.value);
                        this.setState({displayStatus:this.state.value});
                break;
            }
        }
        console.log(StudentAPI.all());
        alert("Student Application Status Updated Successfully!");
        event.preventDefault();
    }
    
    render(){
        const student = StudentAPI.get(parseInt(this.props.match.params.number, 10));
        
        let localStore = localAPI.all();
        let userType = localStore.userType;
        console.log(userType);
        
        return(
            <div>
                <div id="id-banner" className="jumbotron jumbotron-fluid"></div>
                <div name="studentProfile">
                    <h1>Applicant Profile</h1>
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
                
                    {/* {userType === "c"

                    } */}
                </div>

                <div>
                    <hr></hr>
                    <h3>Current Status for {this.state.currPosition.title} position:</h3>
                    <h2 style={{textAlign: "center"}}>{this.state.currStudentApp.appStatus}</h2>
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
                    </form>
                </div>
        
            </div>



        )
    }
}

export default Applicant