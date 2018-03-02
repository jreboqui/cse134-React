import React from 'react';


function JobDetails (props) {
    return (
        <div className="open-jobs curr-job-description">
            <div style={{paddingLeft: "1%", clear:"both"}}>
                        <h2><u>Job Description</u></h2>
                        <p id="id-p-job-description" style={{whiteSpace:"pre-wrap"}}>
                            {props.description}
                        </p>

                        <br></br>
                        <h2><u>Requirements</u></h2>

                        <p id="id-p-requirements" style={{whiteSpace:"pre-wrap"}}>
                            {props.reqs}
                        </p>
            </div>
        </div>
    )
}

export default JobDetails;