import React, {Component} from 'react';
import CompanyAPI from '../Company/CompanyAPI';
import StudentAPI from '../Student/StudentAPI';
import TutorAPI from '../Tutor/TutorAPI';
import localAPI from '../../Shared/localAPI';
import mail from '../../Shared/mail';

class Inbox extends Component {
    constructor(props){
        super(props);
        this.state = {
            allCompanies: null,
            allStudents: null,
            allTutors: null,
            userType: '',
            userId: 0,
            sendMessageContent: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    messages;
    senders;
    names;

    handleChange = (event) => {
        this.setState({sendMessageContent:event.target.value});
        //console.log(this.state.sendMessageContent);
    }

    onClickReply = (event,sender) => {
        console.log(this.state.sendMessageContent);
        console.log(sender);
        //var senderId, senderType, message;
        // const newMessage = {
        //     senderId: sender.senderId,
        //     senderType: sender.senderType,
        //     message: this.state.sendMessageContent
        // }
        const newMessage = new mail(parseInt(this.state.userId),this.state.userType,this.state.sendMessageContent);

        switch(sender.senderType){
            case("c"):{
                CompanyAPI.addMail(parseInt(sender.senderId),newMessage);
                console.log(CompanyAPI.all());
                alert("Reply Succesfully Sent!");
                break;       
            }
            case("s"):{
                StudentAPI.addMail(parseInt(sender.senderId),newMessage);
                console.log(StudentAPI.all());
                alert("Reply Succesfully Sent!");
                break;
            }
            default:{
                TutorAPI.addMail(parseInt(sender.senderId),newMessage);
                console.log(TutorAPI.all());
                alert("Reply Succesfully Sent!");
                break;
            }
        }
        
        event.preventDefault();
    }
    

    componentWillMount() {
        let localStore = localAPI.all();
        
        this.setState({allCompanies:CompanyAPI.all()});
        this.setState({allStudents:StudentAPI.all()});
        this.setState({allTutors:TutorAPI.all()});
        //this.setState({userType:localStorage.getItem('userType')});
        this.setState({userType: localStore.userType});
        //this.setState({userId:localStorage.getItem('userId')});
        this.setState({userId: parseInt(localStore.userId)});
    }

    populateInbox() {
        let currUser = null;
        var tempMessages = [];
        var tempSenders = [];
        var tempNames = [];
        switch(this.state.userType){
            case('s'): {
                currUser = StudentAPI.get(parseInt(this.state.userId));
                for(var j = 0; j < currUser.mailing.length;j++){
                    //Mailing loop for student starts from here
                    if(currUser.mailing[j].senderType == 's'){
                        for(var k = 0; k < this.state.allStudents.length; k++){
                            if(currUser.mailing[j].senderId == this.state.allStudents[k].number){
                                tempMessages.push(currUser.mailing[j].message);
                                // tempSenders.push(this.state.allStudents[k].name);
                                tempSenders.push({
                                    senderId: this.state.allStudents[k].number,
                                    senderType: 's'
                                });
                                tempNames.push(this.state.allStudents[k].name);
                                break;
                            }
                        }
                    }
                    else if(currUser.mailing[j].senderType == 'c'){
                        for(var k = 0; k < this.state.allCompanies.length; k++){
                            if(currUser.mailing[j].senderId == this.state.allCompanies[k].id){
                                tempMessages.push(currUser.mailing[j].message);
                                // tempSenders.push(this.state.allCompanies[k].name);
                                tempSenders.push({
                                    senderId: this.state.allCompanies[k].id,
                                    senderType: 'c'
                                });
                                tempNames.push(this.state.allCompanies[k].name);
                                break;
                            }
                        }
                    }
                    else if(currUser.mailing[j].senderType == 't'){
                        for(var k = 0; k < this.state.allTutors.length; k++){
                            if(currUser.mailing[j].senderId == this.state.allTutors[k].tutorId){
                                tempMessages.push(currUser.mailing[j].message);
                                // tempSenders.push(this.state.allTutors[k].name);
                                tempSenders.push({
                                    senderId: this.state.allTutors[k].tutorId,
                                    senderType: 't'
                                });
                                tempNames.push(this.state.allTutors[k].name);
                                break;
                            }
                        }
                    }
                }
                break;
            }


            case('c'): {
                currUser = CompanyAPI.get(parseInt(this.state.userId));
                for(var j = 0; j < currUser.mailing.length;j++){
                    //Mailing loop for student starts from here
                    if(currUser.mailing[j].senderType == 's'){
                        for(var k = 0; k < this.state.allStudents.length; k++){
                            if(currUser.mailing[j].senderId == this.state.allStudents[k].number){
                                tempMessages.push(currUser.mailing[j].message);
                                //tempSenders.push(this.state.allStudents[k].name);
                                tempSenders.push({
                                    senderId: this.state.allStudents[k].number,
                                    senderType: 's'
                                });
                                tempNames.push(this.state.allStudents[k].name);
                                break;
                            }
                        }
                    }
                    else if(currUser.mailing[j].senderType == 'c'){
                        for(var k = 0; k < this.state.allCompanies.length; k++){
                            if(currUser.mailing[j].senderId == this.state.allCompanies[k].id){
                                tempMessages.push(currUser.mailing[j].message);
                                // tempSenders.push(this.state.allCompanies[k].name);
                                tempSenders.push({
                                    senderId: this.state.allCompanies[k].id,
                                    senderType: 'c'
                                });
                                tempNames.push(this.state.allCompanies[k].name);
                                break;
                            }
                        }
                    }
                    else if(currUser.mailing[j].senderType == 't'){
                        for(var k = 0; k < this.state.allTutors.length; k++){
                            if(currUser.mailing[j].senderId == this.state.allTutors[k].tutorId){
                                tempMessages.push(currUser.mailing[j].message);
                                // tempSenders.push(this.state.allTutors[k].name);
                                tempSenders.push({
                                    senderId: this.state.allTutors[k].tutorId,
                                    senderType: 't'
                                });
                                tempNames.push(this.state.allTutors[k].name);
                                break;
                            }
                        }
                    }
                }
                break;
            }

            default: {
                currUser = TutorAPI.get(this.state.userId);
                for(var j = 0; j < currUser.mailing.length;j++){
                    //Mailing loop for student starts from here
                    if(currUser.mailing[j].senderType == 's'){
                        for(var k = 0; k < this.state.allStudents.length; k++){
                            if(currUser.mailing[j].senderId == this.state.allStudents[k].number){
                                tempMessages.push(currUser.mailing[j].message);
                                // tempSenders.push(this.state.allStudents[k].name);
                                tempSenders.push({
                                    senderId: this.state.allStudents[k].number,
                                    senderType: 's'
                                });
                                tempNames.push(this.state.allStudents[k].name);
                                break;
                            }
                        }
                    }
                    else if(currUser.mailing[j].senderType == 'c'){
                        for(var k = 0; k < this.state.allCompanies.length; k++){
                            if(currUser.mailing[j].senderId == this.state.allCompanies[k].id){
                                tempMessages.push(currUser.mailing[j].message);
                                // tempSenders.push(this.state.allCompanies[k].name);
                                tempSenders.push({
                                    senderId: this.state.allCompanies[k].id,
                                    senderType: 'c'
                                });
                                tempNames.push(this.state.allCompanies[k].name);
                                break;
                            }
                        }
                    }
                    else if(currUser.mailing[j].senderType == 't'){
                        for(var k = 0; k < this.state.allTutors.length; k++){
                            if(currUser.mailing[j].senderId == this.state.allTutors[k].tutorId){
                                tempMessages.push(currUser.mailing[j].message);
                                // tempSenders.push(this.state.allTutors[k].name);
                                tempSenders.push({
                                    senderId: this.state.allTutors[k].tutorId,
                                    senderType: 't',
                                });
                                tempNames.push(this.state.allTutors[k].name);
                                break;
                            }
                        }
                    }
                }
                break;
            }
        }
        this.messages = tempMessages;
        this.senders = tempSenders;
        this.names = tempNames;
    }

    render() {
        this.populateInbox();
        //console.log(this.state);
        var tempMessages = this.messages.slice();
        var tempSenders = this.senders.slice();
        var tempNames = this.names.slice();
       
        return(
            <div>
                {tempMessages.map((message,i) => (
                    <div className="panel panel-default" style={{marginTop:"3em"}} key={i}>
                        <h3>{tempNames[i]}</h3>
                        <div className="panel-body">
                            {/* <form onSubmit={this.onClickReply}> */}
                            <form onSubmit={event => this.onClickReply(event, tempSenders[i])}>
                            <p>{message}</p>
                                <textarea className="form-control" onChange={this.handleChange}></textarea>
                                <button type="submit" className="btn btn-primary" 
                                        style={{float:"right",marginTop:"10px",width:"5em"}}>Reply
                                </button>
                            </form>
                        </div>
                    </div>
                ))
                }
            </div>        
        )
    }
}

export default Inbox;