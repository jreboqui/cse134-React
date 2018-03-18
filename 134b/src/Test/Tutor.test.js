import React from 'react';
import ReactDOM from 'react-dom';

import { Tutor } from '../containers/Tutor/Tutor';

import Enzyme from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import { expect } from 'chai';
import { CompanyListings } from '../containers/Student/CompanyListings';

import Provider from 'react-redux';
//import configureStore from 'redux-mock-store';
import configureStore from '../store/configureStore';
import { loadStudents } from '../actions/studentActions';
import { loadCompanies } from '../actions/companyActions';
import { loadTutors } from '../actions/tutorActions';

Enzyme.configure({ adapter: new Adapter() });


let match1 = {
    params: { number:1}
  }

  class mentee {
    constructor(studentName, companyName, date){
        this.studentName = studentName;
        this.companyName = companyName;
        this.date = date;
    }
}

class mail {
    constructor(senderId, senderType, message){
      this.senderId = senderId;
      this.senderType = senderType,
      this.message = message;
    }
  }
  

const mentee1 = new mentee("Gary Professionalism", "Amazon Inc.", "2018-01-20");
const mentee2 = new mentee("Ariwasnap Nivek", "Microsoft", "2018-05-20");
const mentee3 = new mentee("Hao Yang", "Palantir", "2018-06-20");


const mailToSunshine1 = new mail(1,"s","Hi, I need help to pass the Microsoft first round phone interview. I would appreaciate if..");
const mailToSunshine2 = new mail(2,"s","Hi, thanks for your help! I passed my last interview with Amazon and just got an offer from them!");

let allTutors = {
  tutorId: 1,
  name: "Sunshine Supermarket",
  school: "UCSD",
  year: "2019",
  major: "Computer Science",
  GPA: "3.99",
  minor: "Business",
  profilePic: "./tutor2.jpg",
  intern: "Palantir",
  mentees: [mentee1, mentee2, mentee3],
  username: "ss",
  password: "kp12345",
  mailing: [mailToSunshine1, mailToSunshine2]
}

it('renders without crashing', () => {
  
    shallow(
        
        <Tutor match={match1} allTutors={allTutors}/>
        
      
    );
     
  });

  describe('< Tutor />', () => {
    it('should render', () => {
      const wrapper = shallow(<Tutor match={match1} allTutors={allTutors} name="Example" />);
      expect(wrapper).to.have.length(1);
    });
    describe('check props', ()=> {
      const wrapper = shallow(<Tutor match={match1} allTutors={allTutors} name="Example" />);
      console.log(wrapper.instance().props);
    });
    it('should render buttons', () => {
        const wrapper = shallow(<Tutor match={match1} allTutors={allTutors} name="Example" />);
        expect(wrapper.find('button')).to.exist;
    })
    it('should contain CompanyListings', () => {
        const mywrapper = shallow(<Tutor match={match1} allTutors={allTutors}/>)
        const  compList = mywrapper.find(CompanyListings);
        expect(compList).to.exist;
      });
    it('should contain ApplicationTable', () => {
        const mywrapper = shallow(<Tutor match={match1} allTutors={allTutors}/>)
        const  AppTab = mywrapper.find('ApplicationTable');
        expect(AppTab).to.exist;
    });
  })
  ;
