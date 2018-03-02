import React from 'react';

function CompanyAbout (props) {
    return (
        <div>
            <h4>Company Details:</h4>
            <ul id="id-comp-details">
                <li>Headquarter: {props.hq}</li>
                <li>Size: {props.size}</li>
                <li>Industry: 
                    {props.industry.map(ind => (' ' + ind + ', '))}
                </li>
                <li>Website: {props.website}</li>
            </ul>
        </div>
    )
}

export default CompanyAbout;