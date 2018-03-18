import expect from 'expect';
import studentReducer from './courseReducer';
import * as actions from '../actions/studentActions';

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
  
describe('Student Reducer', () => {
    it('should add application when passed ON_APPLY', () => {
      // arrange
      const initialState = allStudents;
  
      const newApplication = app3;
  
      const action = actions.onApply(app3);
  
      //act
      const newState = studentReducer(initialState, action);
  
      //assert
      expect(newState.length).toEqual(1);
      expect(newState[0].applications.length).toEqual(4);
    });

    it('should UPDATE INFO on application when passed ON_SUBMIT', () => {
        // arrange
        const initialState = allStudents[0];
        //console.log(initialState.name);
        const sid = 1;
        const newInfo = {
            profileImg: '',
            sname: 'abc',
            schoolname: 'wawa',
            year: '1111',
            major: 'ucsd',
            status: 'mmm',
            gpa: '1.3',
            intern: 'nope'
        };
        
        const action = actions.onSubmit(sid,newInfo);
    
        //act
        const newState = studentReducer(initialState, action);
        //console.log(newState);
        //assert
        expect(newState);
      });
  
  
  });
  