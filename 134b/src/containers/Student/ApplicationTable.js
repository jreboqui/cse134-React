import React from 'react';
import {Composite} from 'react-composite';
class ApplicationTable extends React.Component{
    
    render(){
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
    }
}

export default ApplicationTable