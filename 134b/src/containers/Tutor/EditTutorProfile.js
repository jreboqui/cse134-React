import React from 'react';
import { browserRouter, Link, Route } from 'react-router-dom';
import TutorAPI from '../Tutor/TutorAPI';
import '../Student/EditProfile.css';

class EditTutorProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tname: '',
            schoolname: '',
            year: '',
            major: '',
            status: '',
            gpa: ''
        };
    }


    componentDidMount() {
        const tuts = TutorAPI.get(
            parseInt(this.props.location.pathname[this.props.location.pathname.length-1], 10)
        )

        console.log(tuts);
        
        this.setState({
            tname: tuts.name,
            schoolname: tuts.school,
            year: tuts.year,
            major: tuts.major,
            status: tuts.status,
            gpa: tuts.GPA
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
            tname: '',
            schoolname: '',
            year: '',
            major: '',
            status: '',
            gpa: ''
        });
    }

    handleCancel = () => {
        this.props.history.push('/tutor/' + this.props.location.pathname[this.props.location.pathname.length-1]);
    }

    handleSubmit = () => {
        TutorAPI.setAll(parseInt(this.props.location.pathname[this.props.location.pathname.length-1], 10), this.state);
        this.props.history.push('/tutor/' + this.props.location.pathname[this.props.location.pathname.length-1]);
    }

    render() {
    
        return (
            <div class ="profile">
                <h1>Edit Tutor Profile</h1>
                <hr />    
                <form name="profile">
                    <label for="tname">Full name:</label>
                    <input name="tname" type="text" value={this.state.tname} onChange={this.handleChange} />

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

                    <input type="reset" value="Reset" onClick={this.handleReset} />
                    <button class="button-cancel" type="button" onClick={this.handleCancel}>Cancel</button>
                    <button class="button-submit" type="button" onClick={this.handleSubmit}>Save Changes</button>
                    
                </form>
            </div>  
        );
      }
}

export default EditTutorProfile;

