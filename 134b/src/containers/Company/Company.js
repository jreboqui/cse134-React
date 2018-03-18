import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as companyActions from '../../actions/companyActions';
import * as actionType from '../../actions/actionTypes'

import styles from './Company.css';
import CompanyAPI from './CompanyAPI';
import localAPI from '../../Shared/localAPI';
import JobOpening from './JobOpening/JobOpening'
import CurrentJobPosting from './CurrentJobPosting/CurrentJobPosting';
import CompanyAbout from './CurrentJobPosting/CompanyAbout';
import PhotoList from './PhotoList';
import Banner from './Banner';

export class Company extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currCompany: null,
            userType: '',
            bannerPath: "",
        };
    }
    
    newBannerPath;

    componentWillMount(){
        // console.log("[COMPONENTWILLMOUNT]");
        // console.log(this.props);
        // console.log(this.props.allCompanies);

        
        let retrievedCompanies = this.props.allCompanies;
        let localStore = localAPI.all();
        this.userType = localStore.userType;
        //console.log(retrievedCompanies);
        const companyId = this.props.match.params.companyId;
        for (var i = 0; i < retrievedCompanies.length; i++){
            if(companyId == retrievedCompanies[i].id){
                
                this.setState({currCompany: retrievedCompanies[i]});
                //this.setState({bannerPath: "../../Shared/Images/" + retrievedCompanies[i].bannerURL});
                this.setState({bannerPath: retrievedCompanies[i].bannerURL});
                //console.log();
                this.newBannerPath = retrievedCompanies[i].bannerURL;
                break;
            }
        }
    }

    // componentWillReceiveProps(nextProps){
    //     console.log("[COMPONENTWILLRECEIVEPROPS] ");
    //     console.log(nextProps.allCompanies);
    //     console.log(nextProps);
    //     //nextProps.dispatch(actionType.LOAD_COMPANIES_SUCCESS);
    //     // nextProps.dispatch(nextProps.actions.loadCompanies());

    //     let localStore = localAPI.all();
    //     this.userType = localStore.userType;
    //     let retrievedCompanies = nextProps.allCompanies;
    //     //console.log(retrievedCompanies);
    //     const companyId = this.props.match.params.companyId;
    //     for (var i = 0; i < retrievedCompanies.length; i++){
    //         if(companyId == retrievedCompanies[i].id){
                
    //             this.setState({currCompany: retrievedCompanies[i]});
    //             //this.setState({bannerPath: "../../Shared/Images/" + retrievedCompanies[i].bannerURL});
    //             this.setState({bannerPath: retrievedCompanies[i].bannerURL});
    //             //console.log();
    //             this.newBannerPath = retrievedCompanies[i].bannerURL;
    //             break;
    //         }
    //     }
    // }

    onClickLogout = () => {
        this.props.history.push('/login');
    }

    onClickMessage = () => {
        this.props.history.push('/messaging');
    }

    onClickAddPosition = () => {
        this.props.history.push('/company/newposition/' + this.props.match.params.companyId);
    }

    handleEditCompanyProfile = () => {
        this.props.history.push('/editprofile/company/' + this.props.match.params.companyId);
    }

    render(){
        //console.log(this.props.allCompanies);
        //bannerPath = "'../../Shared/Images/" + this.state.currCompany.bannerURL + "'";
        //console.log(this.state.bannerPath);
        //console.log(this.newBannerPath);
        //style={{backgroundImage: "url("+ this.state.bannerPath + ")" }}
        //style={{backgroundImage: "url(./"+ this.newBannerPath +")"}}
        //console.log("backgroundImage: url(${require('./'+this.state.bannerPath)}");

        let userType = localAPI.all().userType;
        var isCompany = false;
        (userType === "c") ? isCompany = true: isCompany = false;

        if(this.state.currCompany != null){
        return (
            <div>
                <Banner banner={this.state.currCompany.bannerURL}/>
                <div className="open-jobs">
                    <div id ="id-about" style={{ paddingLeft: '1%'}}>
                        <br></br>
                        <h4>{this.state.currCompany.title}</h4>
                        <p>{this.state.currCompany.description}</p>
                    </div>
                    <hr></hr>
                    <div style={{paddingLeft:'1%'}}>
                        <JobOpening companyId={this.state.currCompany.id}
                            positions={this.state.currCompany.openPositions}/>
                    </div>
                    <div style={{paddingLeft:'2%'}}>
                        { isCompany ? ( 
                            <button id="btn-add" onClick={this.onClickAddPosition} className="btn btn-success" style={{float: "left", width:"7.5em", marginTop:"10px"}}>Add Position</button>
                            ):null
                        }
                    </div>   
                </div>

                <div className="extra">
                    <CompanyAbout 
                            hq={this.state.currCompany.hq} 
                            size={this.state.currCompany.size}
                            industry={this.state.currCompany.Industry}
                            website={this.state.currCompany.website}
                    />

                    <hr></hr>

                    <div className="photos">
                        <h4>Photos:</h4>
                        <ul id="id-ul-photos" className="ul-photo-list">
                            {this.state.currCompany.photosURL.map((photo,i)=><PhotoList img={photo} key={i}/>)}
                        {/* <PhotoList photos={this.state.currCompany.photosURL}
                                    logo={this.state.currCompany.logoURL}/> */}
                        </ul>
                    </div>

                    <br></br>
                        
                    {isCompany ? (<div>    
                    <button className="btn btn-primary"  onClick={this.handleEditCompanyProfile}
                        style={{width: "6.5em", paddingLeft:"15px", paddingRight: "15px", paddingTop:"10px", paddingBottom:"10px"}}>Edit Profile</button>
                    <button className="btn btn-warning"  onClick={this.onClickMessage}
                        style={{width: "6.5em", paddingLeft:"15px", paddingRight: "15px", paddingTop:"10px", paddingBottom:"10px"}}>Messaging</button>
                    <button className="btn btn-danger"  onClick={this.onClickLogout}
                        style={{width: "6em", paddingLeft:"15px", paddingRight: "15px", paddingTop:"10px", paddingBottom:"10px", marginLeft:"10px"}}>Logout</button> 
                    </div>):null}
                </div>

            </div>
        );}
        else {
            //this.render();
            
            return null;
        } 
    } 
}

function mapStateToProps(state) {
    return {
      allCompanies: state.companies
    };
  }
  
//Dont need this since we're not dispatching any action from this component.. 
//this component just needs to render the component using the state in the redux store.. 
// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(companyActions, dispatch)
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Company);
export default connect(mapStateToProps, null)(Company);