import React, {Component} from 'react';
import { browserRouter, Link, Route } from 'react-router-dom';
import CompanyAPI from '../Company/CompanyAPI';
import Position from '../../Shared/Position';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as companyActions from '../../actions/companyActions';
import * as actionType from '../../actions/actionTypes'

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
        this.props.history.push('/company/' + this.props.match.params.companyId);
    }

    handlePost = (event) => {
        let {dispatch} = this.props;
        const newPosition = new Position(this.props.allCompanies[this.props.match.params.companyId-1].openPositions.length + 1, this.state.title, 
            this.state.location, this.state.description, this.state.requirements, "Under Review", '');

        this.props.actions.onPost(parseInt(this.props.match.params.companyId), newPosition);
        event.preventDefault();
        this.props.history.push('/company/' + this.props.match.params.companyId);
        
    }


    render() {

        return (
            <div class="new_job">
                <h1>New Position</h1>
                <hr />

                <form>
			        <label for="title">Job Title:</label>
			        <input name="title" type="text" placeholder="Position.." value={this.state.title} onChange={this.handleChange} />

                    <label for="location">Location:</label>
                    <textarea name="location" class="job-location" value={this.state.location} onChange={this.handleChange} />
			    
			        <label for="description">Job Description:</label>
			        <textarea name="description" class="job-description" placeholder="Enter job description here.." value={this.state.description} onChange={this.handleChange} />

			        <label for="requirements">Requirements</label>
			        <textarea name="requirements" id="job-requirement" value={this.state.requirements} onChange={this.handleChange} />
			
                    <input type="reset" value="Reset" onClick={this.handleReset} />
                    <button class="button-cancel" type="button" onClick={this.handleCancel}>Cancel</button>
                    <button class="button-submit" type="button" onClick={this.handlePost}>Post</button>

		        </form>

            </div>  
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
      allCompanies: state.companies
    };
  }
  
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(companyActions, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(NewPosition);
