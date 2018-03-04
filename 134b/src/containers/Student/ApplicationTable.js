import React from 'react';
import {Composite} from 'react-composite';
import localAPI from '../../Shared/localAPI';
class ApplicationTable extends React.Component{
    
    render(){
        let localStore = localAPI.all();
        const userType = localStore.userType;
        console.log(userType);

        if(userType == 's'){
            console.log("This is the student object");
            console.log(this.props);
        // console.log(this.props.studentObject);
            const student = this.props.studentObject;
        // console.log(student);
            console.log("Application info length: " + student.applications.length);
            console.log(student.applications[0]);
            let row = student.applications.length;
            
            var heading = new Array();
            heading[0] = "Company";
            heading[1] = "Position";
            heading[2] = "Status";

            return(
                <div id="appTable">
                    <h4> Current Applications </h4>
                    <div id="theHead" className="table-header">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                            {heading.map((head,i) => <th key={i}>{head}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            
                            {student.applications.map((app,i,j,k,m,n) => 
                                <Composite key={i}>
                                    <tr key={n}>
                                    <th key={i}> {app["companyName"]} </th>
                                    <th key={j}> {app["positionTitle"]} </th>
                                    <th key={k}> {app["appStatus"]} </th>
                                    
                                    </tr>
                                </Composite>
                            )}
                        </tbody>
                    </table>
                    </div>
                </div>

            )
        
        } //end of if statement
        else if (userType == 't'){
            const tutor = this.props.studentObject;
            // console.log(student);
                console.log("Application info length: " + tutor.mentees.length);
                console.log(tutor.mentees[0]);
                let row = tutor.mentees.length;
                
                var heading = new Array();
                heading[0] = "Student";
                heading[1] = "Status";
                heading[2] = "Mock-up date";
               
            return(
                <div id="appTable">
                    <h4> Current Applications </h4>
                    <div id="theHead" className="table-header">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                            {heading.map((head,i) => <th key={i}>{head}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            
                            {tutor.mentees.map((app,i,j,k,m,n) => 
                                <Composite key={i}>
                                    <tr key={n}>
                                    <th key={i}> {app["studentName"]} </th>
                                    <th key={j}> {app["companyName"]} </th>
                                    <th key={k}> {app["date"]} </th>
                                    
                                    </tr>
                                </Composite>
                            )}
                        </tbody>
                    </table>
                    </div>
                </div>

            )
        }
        else {
            return (
                <h1> No mentees yet </h1>
            )
        }
    }//end of render
} //end of class

export default ApplicationTable