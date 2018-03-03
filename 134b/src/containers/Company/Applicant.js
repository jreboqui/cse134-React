import React from 'react';
import StudentAPI from '../Student/StudentAPI';

class Applicant extends React.Component{
    render(){
        const student = StudentAPI.get(1);
        console.log("On applicant");
        console.log(student);
        console.log(student.pic);
        return(
            <div>
                <h1> Company Page goes here </h1>

                <img className="img-fluid img-profile rounded-circle mx-auto mb-2" alt="none" 
                        src={require(`./${student.pic}`)}
                        height="200px"
                        width="200px"/>
            </div>



        )
    }
}

export default Applicant