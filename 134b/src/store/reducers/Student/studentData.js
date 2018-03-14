import * as actionTypes from '../actions';

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
  
  
const StudentData = {
    players: [
      { number: 1, 
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
      },
      { number: 2, 
        name: "Dave Defender", 
        school: "MIT", 
        GPA: "3.99", 
        year:"2019", 
        pic:"./pp1.jpeg",
        major: "Computer Science", 
        status: "",
        applications: [app1, app3], 
        username: "dd", 
        password: "kp12345", 
        intern: "", 
        mailing: [mailToKevin2, mailToKevin1]
      },
      { number: 3, name: "Sam Sweeper",
       school: "UCB",
        GPA: "3.99", 
        year:"2019",
         pic:"./pp1.jpeg",
         major: "Computer Science", 
         status: "",
         applications: [app2, app3], 
         username: "ss", 
         password: "kp12345", 
         intern: "", 
         mailing: [mailToKevin2, mailToKevin1]
        },
      { number: 4,
         name: "Matt Midfielder", 
         school: "UCSD", 
         GPA: "3.99", 
         year:"2019", 
         pic:"./pp1.jpeg",
         major: "Computer Science", 
         status: "",
         applications: [app1, app2], 
         username: "mm", 
         password: "kp12345", 
         intern: "", 
         mailing: [mailToKevin2, mailToKevin1]
        },
      { number: 5,
        name: "William Winger", 
        school: "UCSD",
        GPA: "3.99",
        year:"2019", 
        pic:"./pp1.jpeg",
        major: "Computer Science", 
        status: "",
        applications: [app2, app3], 
        username: "ww", 
        password: "kp12345", 
        intern: "", 
        mailing: [mailToKevin2, mailToKevin1]
      },
      { number: 6, 
        name: "Fillipe Forward", 
        school: "UCSD", 
        GPA: "3.99", 
        year:"2019", 
        pic:"./pp1.jpeg",
        major: "Computer Science", 
        status: "",
        applications: [app3, app1], 
        username: "ff", 
        password: "kp12345", 
        intern: "", 
        mailing: [mailToKevin2, mailToKevin1]
      }
    ],
    currStudent: null
}

const userReducer = (state, actions) => {
    switch (action.type) {
        case actionTypes.GET_SINGLE_USER: 
            const isStudent = state.players.filter(player => player.number == action.number)
            return {
                ...state,
                currStudent: isStudent[0]
            }
            break;
    }
}