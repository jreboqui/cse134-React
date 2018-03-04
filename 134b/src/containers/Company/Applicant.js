import React from 'react';
import StudentAPI from '../Student/StudentAPI';
import localAPI from '../../Shared/localAPI';

class Applicant extends React.Component{
    render(){
        const student = StudentAPI.get(parseInt(this.props.match.params.number, 10));
        
        let localStore = localAPI.all();
        let userType = localStore.userType;
        console.log(userType);
        
        return(
            <div>
                <h1> Company Page goes here </h1><hr /> 

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
                
                    {userType === "c"

        
                        
                    }
                </div>
        
            </div>



        )
    }
}

export default Applicant