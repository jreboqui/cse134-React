import React from 'react';
import { browserRouter, Link, Route } from 'react-router-dom';
import StudentAPI from '../Student/StudentAPI';
import './EditProfile.css';
import kpan from './kpan.jpg';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as studentActions from '../../actions/studentActions';

class EditProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            profileImg: '',
            sname: '',
            schoolname: '',
            year: '',
            major: '',
            status: '',
            gpa: '',
            intern: ''
        };
    }


    componentDidMount() {
        // const player = StudentAPI.get(
        //     parseInt(this.props.location.pathname[this.props.location.pathname.length-1], 10)
        // )

        console.log(this.props);
        const {allStudents} = this.props;
        let i;
        let player;
        let userId = parseInt(this.props.location.pathname[this.props.location.pathname.length-1], 10);
        //find userId in allStudents
        for (i = 0; i < allStudents.length; i++){
             if (allStudents[i].number == userId){
                 player = allStudents[i];
                 break;
             }
         }
        this.setState({
            profileImg: player.pic,
            sname: player.name,
            schoolname: player.school,
            year: player.year,
            major: player.major,
            status: player.status,
            gpa: player.GPA,
            intern: player.intern
        });


    }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: event.target.value
        });
    }

    handleReset = () => {
        this.setState({
            profileImg: '',
            sname: '',
            schoolname: '',
            year: '',
            major: '',
            status: '',
            gpa: '',
            intern: ''
        });
    }

    handleCancel = () => {
        this.props.history.push('/student/' + this.props.location.pathname[this.props.location.pathname.length-1]);
    }

    handleSubmit = () => {
        //StudentAPI.setAll(parseInt(this.props.location.pathname[this.props.location.pathname.length-1], 10), this.state);
        //call action to change store state
        let userId = parseInt(this.props.location.pathname[this.props.location.pathname.length-1], 10);        
        this.props.actions.onSubmit(userId, this.state);
        this.props.history.push('/student/' + this.props.location.pathname[this.props.location.pathname.length-1]);
    }


    render() {

        return (
            <div class ="profile">
                <h1>Edit Student Profile</h1>
                <hr />   
                
                <img src={this.state.profileImg} />
                <form name="profile">
                    {/* console.log(this.state.profileImg) */}
                    
                    <label for="profileImg">Enter Image URL:</label>
                    <input name="profileImg" type="text" value={this.state.profileImg} onChange={this.handleChange} />

                    <label for="sname">Full name:</label>
                    <input name="sname" type="text" value={this.state.sname} onChange={this.handleChange} />

                    <label for="schoolname">School name:</label>
                    <input name="schoolname" type="text" value={this.state.schoolname} onChange={this.handleChange} />

                    <label for="year">Year:</label>
                    <input name="year" type="text" value={this.state.year} onChange={this.handleChange} />

                    <label for="major">Major:</label>
                    <input name="major" type="text" value={this.state.major} onChange={this.handleChange} />

                    <label for="status">Status:</label>
                    <input name="status" type="text" value={this.state.status} onChange={this.handleChange} />

                    <label for="gpa">GPA:</label>
                    <input name="gpa" type="text" value={this.state.gpa} onChange={this.handleChange} />

                    <label for="internship">Previous Internship:</label>
                    <textarea name="internship" class="profileintern" value={this.state.intern} onChange={this.handleChange} />
               
                    <input type="reset" value="Reset" onClick={this.handleReset} />
                    <button class="button-cancel" type="button" onClick={this.handleCancel}>Cancel</button>
                    <button class="button-submit" type="button" onClick={this.handleSubmit}>Save Changes</button>
                    
                </form>
            </div>  
        );
      }
}
function mapStateToProps(state, ownProps) {
    return {
      allStudents: state.students
    };
  }
  
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(studentActions, dispatch)
  };
}

export default connect(mapStateToProps)(EditProfile);

