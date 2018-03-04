import React from 'react';
import { browserRouter, Link, Route } from 'react-router-dom';
import CompanyAPI from '../Company/CompanyAPI';
import '../Student/EditProfile.css';

class EditCompanyProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            logoURL: '',
            bannerURL: '',
            cname: '',
            hq: '',
            size: '',
            industry: '',
            website: '',
            title: '',
            description: ''
        };
    }


    componentDidMount() {
        const company = CompanyAPI.get(
            parseInt(this.props.location.pathname[this.props.location.pathname.length-1], 10)
        )

        console.log(company);
        
        this.setState({
            logoURL: company.logoURL,
            bannerURL: company.bannerURL,
            cname: company.name,
            hq: company.hq,
            size: company.size,
            industry: company.Industry,
            website: company.website,
            title: company.title,
            description: company.description
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
            logoURL: '',
            bannerURL: '',
            cname: '',
            hq: '',
            size: '',
            industry: '',
            website: '',
            title: '',
            description: ''
        });
    }

    handleCancel = () => {
        this.props.history.push('/company/' + this.props.location.pathname[this.props.location.pathname.length-1]);
    }

    handleSubmit = () => {
        CompanyAPI.setAll(parseInt(this.props.location.pathname[this.props.location.pathname.length-1], 10), this.state);
        this.props.history.push('/company/' + this.props.location.pathname[this.props.location.pathname.length-1]);
    }

    render() {
    
        return (
            <div class ="profile">
                <h1>Edit Company Profile</h1>
                <hr />    
                <form name="profile">
                    <label for="logoURL">Enter Image URL:</label>
                    <input name="logoURL" type="text" value={this.state.logoURL} onChange={this.handleChange} />

                    <label for="bannerURL">Enter Banner URL:</label>
                    <input name="bannerURL" type="text" value={this.state.bannerURL} onChange={this.handleChange} />

                    <label for="cname">Company name:</label>
                    <input name="cname" type="text" value={this.state.cname} onChange={this.handleChange} />

                    <label for="hq">Headquarters:</label>
                    <input name="hq" type="text" value={this.state.hq} onChange={this.handleChange} />

                    <label for="size">Size:</label>
                    <input name="size" type="text" value={this.state.size} onChange={this.handleChange} />

                    <label for="industry">Industry:</label>
                    <input name="industry" type="text" value={this.state.industry} onChange={this.handleChange} />

                    <label for="website">Website:</label>
                    <input name="website" type="text" value={this.state.website} onChange={this.handleChange} />

                    <label for="title">Title:</label>
                    <input name="title" type="text" value={this.state.title} onChange={this.handleChange} />

                    <label for="description">Description:</label>
                    <textarea name="description" class="companydescription" value={this.state.description} onChange={this.handleChange} />
               
                    <input type="reset" value="Reset" onClick={this.handleReset} />
                    <button class="button-cancel" type="button" onClick={this.handleCancel}>Cancel</button>
                    <button class="button-submit" type="button" onClick={this.handleSubmit}>Save Changes</button>
                    
                </form>
            </div>  
        );
      }
}

export default EditCompanyProfile;
