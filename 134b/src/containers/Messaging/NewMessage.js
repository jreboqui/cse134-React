import React, {Component} from 'react';
import StudentAPI from '../Student/StudentAPI';
import CompanyAPI from '../Company/CompanyAPI';
import TutorAPI from  '../Tutor/TutorAPI';
import mail from '../../Shared/mail';
import localAPI from '../../Shared/localAPI';

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
            recipientId: 1,
            message: "" 
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    recipients = [];
    rType = '';
    rId = 0;

    componentWillMount() {
        let localStore = localAPI.all();
        this.setState({allCompanies:CompanyAPI.all()});
        this.setState({allStudents:StudentAPI.all()});
        this.setState({allTutors:TutorAPI.all()});
        this.setState({userType: localStore.userStype});
        this.setState({userId: localStore.userId});
        //this.setState({userType:localStorage.getItem('userType')});
        //this.setState({userId:localStorage.getItem('userId')});
    }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: event.target.value
        });
    }

    handleChangeRecipient = (event) => {
        const target = event.target;
        const name = target.name;
        //console.log("currently selected user:" + event.target.value);
        //console.log(name);
        this.setState({
            [name]: event.target.value
        });
        document.getElementById("recipient")
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
                //console.log("in handleChangeDropdown c");
                this.recipients = CompanyAPI.all();
                this.setState = "c";
                break;
            }
            case("s"):{
                this.setState({sendTo: this.state.allStudents});
                this.recipients = StudentAPI.all();
                this.rType = "s";
                break;
            }
            default:{
                this.setState({sendTo: this.state.allTutors});
                this.recipients = TutorAPI.all();
                this.rType="t";
                break;
            }
        }
    }
    
    handleSubmit = (event) => {

        const newMessage = new mail(parseInt(this.state.userId),this.state.userType,this.state.message);
        //console.log(newMessage);
        //console.log(this.state.toType);

        switch(this.state.toType){
            case("c"):{
                CompanyAPI.addMail(parseInt(this.state.recipientId),newMessage);
                //console.log(CompanyAPI.all());
                //alert("Reply Succesfully Sent!");
                break;       
            }
            case("s"):{
                StudentAPI.addMail(parseInt(this.state.recipientId),newMessage);
                //console.log(StudentAPI.all());
                //alert("Reply Succesfully Sent!");
                break;
            }
            default:{
                TutorAPI.addMail(parseInt(this.state.recipientId),newMessage);
                //console.log(TutorAPI.all());
                //alert("Reply Succesfully Sent!");
                break;
            }
        }
        alert("Message Succesfully Sent!");
        event.preventDefault();
    }

    render () {
        //console.log(this.state);
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
                    <select id="recipient" className="form-control" name="recipientId" onChange={this.handleChangeRecipient}>
                        {(() => {
                                //console.log(this.state.sendTo);
                                //console.log(this.state.sendTo.length);
                                if(this.state.sendTo.length != 0){
                                    document.getElementById("recipient").length = 0;
                                    {this.state.sendTo.map((rcp,i) => {
                                        var opt = document.createElement('option');
                                        var selectedIndex = -1;
                                        switch(this.state.toType){
                                            case("c"):{
                                                if(this.state.recipientId == rcp.id){
                                                    selectedIndex = i;
                                                }
                                                opt.value= rcp.id;
                                                break;
                                            }
                                            case("s"):{
                                                if(this.state.recipientId == rcp.number){
                                                    selectedIndex = i;
                                                }
                                                opt.value = rcp.number;
                                                break;
                                            }
                                            default:{
                                                opt.value = rcp.tutorId;
                                                if(this.state.recipientId == rcp.tutorId){
                                                    selectedIndex = i;
                                                }
                                            }
                                        }
                                        opt.text = rcp.name;
                                        //console.log(selectedIndex);
                                        document.getElementById("recipient").appendChild(opt);
                                        if(selectedIndex !== -1)
                                            document.getElementById("recipient").options[selectedIndex].selected = true;
                                    })}
                                }
                        })()}
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