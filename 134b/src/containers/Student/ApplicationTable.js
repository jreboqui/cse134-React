import React from 'react';

class ApplicationTable extends React.Component{
    
    render(){
        return(
            <div id="appTable">
                <h1> Application Table goes here </h1>
                <div id="theHead" class="table-header">
                <table class="table table-hover">
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