import React, {Component} from 'react';
import { browserRouter, Link, Route } from 'react-router-dom';
import CompanyAPI from '../Company/CompanyAPI';

class NewPosition extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            location: '',
            description: '',
            requirements: ''
        };
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
            title: '',
            location: '',
            description: '',
            requirements: ''
        });
    }

    handleCancel = () => {
        //this.props.history.push('/student/' + this.props.location.pathname[this.props.location.pathname.length-1]);
    }

    handleSubmit = () => {
    
    }


    render() {

        return (
            <div class="new_job">
                <h1>New Position</h1>
                <hr />

                <form>
			        <label for="title">Job Title:</label>
			        <input name="title" type="text" placeholder="Position.." value={this.state.title} onChange={this.handleChange} />

                    <label for="city">Location:</label>
                    <textarea name="city" class="jobcity" value={this.state.location} onChange={this.handleChange} />
			    
			        <label for="description">Job Description:</label>
			        <textarea name="description" class="jobdescription" placeholder="Enter job description here.." value={this.state.description} onChange={this.handleChange} />

			        <label for="requirement">Requirements</label>
			        <textarea name="requirement" id="jobrequirement" value={this.state.requirements} onChange={this.handleChange} />
			
                    <input type="reset" value="Reset" onClick={this.handleReset} />
                    <button class="button-cancel" type="button" onClick={this.handleCancel}>Cancel</button>
                    <button class="button-submit" type="button" onClick={this.handlePost}>Post</button>

		        </form>

            </div>  
        );
    }
}

export default NewPosition; 