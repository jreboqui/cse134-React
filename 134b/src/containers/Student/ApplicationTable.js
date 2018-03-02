import React from 'react';

class ApplicationTable extends React.Component{
    
    render(){
        console.log(this.props.studentObject);
        return(
            <div id="appTable">
                <h4> Current Applications </h4>
                <div id="theHead" className="table-header">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Position</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Amazon</td>
                            <td>SWE</td>
                            <td>Offered</td>
                        </tr>
                        <tr>
                            <td>Amazon</td>
                            <td>Product Management</td>
                            <td>Offered</td>
                        </tr>
                        <tr>
                            <td>Salesforce</td>
                            <td>Software Engineer</td>
                            <td>Offered</td>
                        </tr>
                       
                    </tbody>
                </table>
                </div>
            </div>

        )
    }
}

export default ApplicationTable