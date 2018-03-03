import React, {Component} from 'react';
import StudentAPI from '../Student/StudentAPI';
import CompanyAPI from '../Company/CompanyAPI';
import TutorAPI from  '../Tutor/TutorAPI';

class NewMessage extends Component {
    constructor(props){
        super(props);
        this.state = {
            allCompanies: null,
            allStudents: null,
            allTutors: null,
            userType: '',
            userId: 0,
            //Forms States:
            toType: 's',
            sendTo: [],
            recipient: "",
            message: "" 
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    componentWillMount() {
        this.setState({allCompanies:CompanyAPI.all()});
        this.setState({allStudents:StudentAPI.all()});
        this.setState({allTutors:TutorAPI.all()});
        this.setState({userType:localStorage.getItem('userType')});
        this.setState({userId:localStorage.getItem('userId')});
    }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: event.target.value
        });
    }

    handleChangeDropdown = (event) => {
        
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: event.target.value
        });
        
        switch(event.target.value){
            case("c"):{
                this.setState({sendTo: this.state.allCompanies});
                break;
            }
            case("s"):{
                this.setState({sendTo: this.state.allStudents});
                break;
            }
            default:{
                this.setState({sendTo: this.state.allTutors});
                break;
            }
        }
    }
    
    handleSubmit = (event) => {
        alert("Message Succesfully Sent!");
        event.preventDefault();
    }

    render () {
        console.log(this.state.sendTo);
        return(
            <div className="container">
                <h2>Send New Message</h2>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Send to:</label>
                    <select className="form-control" name="toType" onChange={this.handleChangeDropdown}>
                    <option>Choose..</option>
                    <option value="s">Student</option>
                    <option value="c">Company</option>
                    <option value="t">Tutor</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Recipient:</label>
                    <select className="form-control" name="recipient">
                        {this.state.sendTo.map((rcp,i) => {
                            <option value="x">{rcp[i].name}</option>
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <label>Message:</label>
                    <textarea className="form-control" rows="4" name="message" onChange={this.handleChange}></textarea>
                    <input type="reset" className="btn btn-primary" style={{marginTop: "10px", float: "left"}}/>
                    <button id="btn-send" 
                        style={{width:"6em", marginTop: "10px", float:"right"}} className="btn btn-success">Send</button>
                </div>
                </form>
            </div>
        )
    }
}

export default NewMessage;