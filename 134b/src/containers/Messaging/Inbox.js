import React, {Component} from 'react';
import CompanyAPI from '../Company/CompanyAPI';
import StudentAPI from '../Student/StudentAPI';
import TutorAPI from '../Tutor/TutorAPI';
import localAPI from '../../Shared/localAPI';
import mail from '../../Shared/mail';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as studentActions from '../../actions/studentActions';
import * as companyActions from '../../actions/companyActions';
import * as tutorActions from '../../actions/tutorActions';
import * as actionType from '../../actions/actionTypes';

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
        console.log(this.props);
        event.preventDefault();
        //var senderId, senderType, message;
        // const newMessage = {
        //     senderId: sender.senderId,
        //     senderType: sender.senderType,
        //     message: this.state.sendMessageContent
        // }
        const newMessage = new mail(parseInt(this.state.userId),this.state.userType,this.state.sendMessageContent);

        switch(sender.senderType){
            case("c"):{
                // CompanyAPI.addMail(parseInt(sender.senderId),newMessage);
                // console.log(CompanyAPI.all());
                this.props.companyActions.onAddMailCompany(parseInt(sender.senderId),newMessage);
                alert("Reply Succesfully Sent!");
                break;       
            }
            case("s"):{
                //StudentAPI.addMail(parseInt(sender.senderId),newMessage);
                //console.log(StudentAPI.all());
                this.props.studentActions.onAddMailStudent(parseInt(sender.senderId),newMessage);
                alert("Reply Succesfully Sent!");
                break;
            }
            case("t"):{
                console.log("In case t Reply");
                // TutorAPI.addMail(parseInt(sender.senderId),newMessage);
                // console.log(TutorAPI.all());
                this.props.tutorActions.onAddMailTutor(parseInt(sender.senderId),newMessage);
                alert("Reply Succesfully Sent!");
                break;
            }
        }

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
        console.log("[INBOX]");
        console.log(this.props);
        let currUser = null;
        var tempMessages = [];
        var tempSenders = [];
        var tempNames = [];
        console.log(this.state.userType);
        console.log(this.state.userId);
        switch(this.state.userType){
            case('s'): {
                currUser = this.props.allStudents.filter(student => student.number ===
                     parseInt(this.state.userId))[0];
                //currUser = StudentAPI.get(parseInt(this.state.userId));
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
                currUser = this.props.allCompanies.filter(company => company.id ===
                    parseInt(this.state.userId))[0];
                //currUser = CompanyAPI.get(parseInt(this.state.userId));
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

            case('t'): {
                console.log(currUser);
                console.log(this.props);
                console.log(this.props.allTutors);
                console.log(this.state.userId);
                currUser = this.props.allTutors.filter(tutor => tutor.tutorId ===
                    parseInt(this.state.userId))[0];
                console.log(currUser);
                //currUser = TutorAPI.get(this.state.userId);
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

function mapStateToProps(state) {
    return {
      allCompanies: state.companies,
      allStudents: state.students,
      allTutors: state.tutors
    };
  }

//Need this to dispatch onApply action in the onClickApply() function above.
function mapDispatchToProps(dispatch) {
  return {
    studentActions: bindActionCreators(studentActions, dispatch),
    companyActions: bindActionCreators(companyActions, dispatch),
    tutorActions: bindActionCreators(tutorActions, dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Inbox);