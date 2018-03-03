import React, {Component} from 'react';
import CompanyAPI from '../Company/CompanyAPI';
import StudentAPI from '../Student/StudentAPI';
import TutorAPI from '../Tutor/TutorAPI';

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

    handleChange = (event) => {
        this.setState({sendMessageContent:event.target.value});
        //console.log(this.state.sendMessageContent);
    }

    onClickReply = (sender) => {
        console.log(this.state.sendMessageContent);
        console.log(sender);
        var senderId, senderType, message;
        const newMessage = {
            senderId: sender.senderId,
            senderType: sender.senderType,
            message: this.state.sendMessageContent
        }

        switch(this.state.senderType){
            case('c'):{
                CompanyAPI.addMail(parseInt(this.state.userId),newMessage);
                break;       
            }
            case('s'):{
                StudentAPI.addMail(parseInt(this.state.userId),newMessage);
                break;
            }
            default:{
                TutorAPI.addMail(parseInt(this.state.userId),newMessage);
                break;
            }
        }

    }

    componentWillMount() {
        this.setState({allCompanies:CompanyAPI.all()});
        this.setState({allStudents:StudentAPI.all()});
        this.setState({allTutors:TutorAPI.all()});
        this.setState({userType:localStorage.getItem('userType')});
        this.setState({userId:localStorage.getItem('userId')});
    }

    populateInbox() {
        //console.log(this.state);
        let currUser = null;
        var tempMessages = [];
        var tempSenders = [];
        switch(this.state.userType){
            case('s'): {
                currUser = StudentAPI.get(this.state.userId);
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
                            }
                        }
                    }
                }
                break;
            }
        }
        this.messages = tempMessages;
        this.senders = tempSenders;
    }

    render() {
        this.populateInbox();
        //console.log(this.state);
        var tempMessages = this.messages.slice();
        var tempSenders = this.senders.slice();

        return(
            <div>
                {tempMessages.map((message,i) => (
                    <div className="panel panel-default" style={{marginTop:"3em"}}>
                        <h4>{tempSenders[i].name}</h4>
                        <div className="panel-body">
                            <p>{message}</p>
                            <textarea className="form-control" onChange={this.handleChange}></textarea>
                            <button className="btn btn-primary" onClick={this.onClickReply(tempSenders[i])}
                                    style={{float:"right",marginTop:"10px",width:"5em"}}>Reply
                            </button>
                        </div>
                    </div>
                ))
                }
            </div>        
        )
    }
}

export default Inbox;