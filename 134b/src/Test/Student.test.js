import React from 'react';
import ReactDOM from 'react-dom';

import Student from '../containers/Student/Student';
import CompanyListings from '../containers/Student/CompanyListings';
import ApplicationTable from '../containers/Student/ApplicationTable';
import FullRoster from '../containers/Student/FullRoster';
import { Player } from '../containers/Student/Player';
import { EditProfile } from '../containers/Student/EditProfile';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import { expect } from 'chai';

import Provider from 'react-redux';
import configureStore11 from 'redux-mock-store';
import configureStore from '../store/configureStore';
import { loadStudents } from '../actions/studentActions';
import { loadCompanies } from '../actions/companyActions';
import { loadTutors } from '../actions/tutorActions';


Enzyme.configure({ adapter: new Adapter() });
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
class ApplicationInfo {
  constructor(companyId, companyName, positionTitle, positionId, appStatus){
    this.companyId = companyId;
    this.companyName = companyName;
    this.positionTitle = positionTitle;
    this.positionId = positionId;
    this.appStatus  = appStatus;
  }
}

class mail {
  constructor(senderId, senderType, message){
    this.senderId = senderId;
    this.senderType = senderType,
    this.message = message;
  }
}

const app1 = new ApplicationInfo(1, "Amazon Inc.", "Software Development Engineer Intern", 1, "Under Review");
const app2 = new ApplicationInfo(2, "Salesforce.com", "Software Infrastructure Intern", 1, "Under Review");
const app3 = new ApplicationInfo(1, "Amazon Inc.", "Data Science Intern", 3, "Under Review");
const app4 = new ApplicationInfo(3, "Microsoft", "Software Development Engineer Intern", 1, "Under Review");
const app5 = new ApplicationInfo(1, "Amazon Inc.", "Hardware Development Intern", 2, "Under Review");

const mailToKevin1 = new mail(1,"c","Hello, good news, we dould like to invite you to be interning for us for summer 2018 at our headquarter, Seattle, WA");
const mailToKevin3 = new mail(3,"c","Hello, Thank you for applying. While you have a great skill set, however,...");
const mailToKevin2 = new mail(1,"t","Hey, do you want to pass your interview? You better start hiring me as your tutor!");

let allStudents = [
  {
    number: 1, 
        name: "Kevin Pansawira",  
        school: "UCSD", 
        GPA: "3.99", 
        year:"2018", 
        pic: "./kpan.jpg",
        major: "Computer Science", 
        status: "Looking for internship",
        applications: [app1, app2, app5,app4], 
        username: "kp", 
        password: "kp12345", 
        intern: "", 
        mailing: [mailToKevin1, mailToKevin2, mailToKevin3]
  }    
]

let match1 = {
  params: { number:1}
}
//const wrapper = shallow(<Student match={match1}/>);
it('renders without crashing', () => {
  
  shallow(<Student match={match1}/>);
  
});

it('renders without crashing', () => {
  
    shallow(<CompanyListings match={match1}/>);
    
  });

 it('renders without crashing', () => {
  
    shallow(<ApplicationTable/>);
    
 });

 
it('renders without crashing', () => {
  
    shallow(<FullRoster/>);
     
 });

 let location1 = {
  pathname: "/student/1"
}
it('renders without crashing', () => {
  
    shallow(<EditProfile location={location1} allStudents={allStudents}/>);
     
 });

 it('renders without crashing', () => {
  
  shallow(<Player match={match1} allStudents={allStudents}/>);
   
});
// //Some editProfile testings


describe('<form />', () => {
  it('renders a form crashing', () => {
    const eProfile = shallow(<EditProfile location={location1} allStudents={allStudents}/>);
    expect(eProfile.find('form').length).to.equal(1);
  });
  
  it('`<form>` element should have an `<input />` element', () => {
    const eProfile = shallow(<EditProfile location={location1} allStudents={allStudents}/>);
    expect(eProfile.find('input').exist);
  });
  it('`<form>` element should have an `<label />` element', () => {
    const eProfile = shallow(<EditProfile location={location1} allStudents={allStudents}/>);
    expect(eProfile.find('label').exist);
  });
  it('`<form>` element should have 8 `<input />` element', () => {
    const eProfile = shallow(<EditProfile location={location1} allStudents={allStudents}/>);
    expect(eProfile.find('input').length).to.equal(8);
  });
  it('`<form>` element should have textarea element', () => {
    const eProfile = shallow(<EditProfile location={location1} allStudents={allStudents}/>);
    expect(eProfile.find('textarea').exist);
  });
  it('`<form>` element should have textarea element', () => {
    const eProfile = shallow(<EditProfile location={location1} allStudents={allStudents}/>);
    expect(eProfile.find('textarea').length).to.equal(1);
  });
  it('`<form>` element should have 2 button elements', () => {
    const eProfile = shallow(<EditProfile location={location1} allStudents={allStudents}/>);
    expect(eProfile.find('button').length).to.equal(2);
  });
 })



  

