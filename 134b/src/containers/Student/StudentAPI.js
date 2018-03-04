
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

const mailToKevin1 = new mail(1,"c","Hello, good news, we dould like to invite you to be interning for us for summer 2018 at our headquarter, Seattle, WA");
const mailToKevin2 = new mail(1,"t","Hey, do you want to pass your interview? You better start hiring me as your tutor!");

const StudentAPI = {
    players: [
      { number: 1, 
        name: "Kevin Pansawira",  
        school: "UCSD", 
        GPA: "3.99", 
        year:"2018", 
        pic: "./kpan.jpg",
        major: "Computer Science", 
        status: "Looking for internship",
        applications: [app1, app2, app3], 
        username: "kp", 
        password: "kp12345", 
        intern: "", 
        mailing: [mailToKevin1, mailToKevin2]
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
    all: function() { return this.players},
    get: function(id) {
      const isPlayer = p => p.number === id
      return this.players.find(isPlayer)
    },
    setAll: function(id, state) {
      const isPlayer = p => p.number === id
      let x = this.players.find(isPlayer);
      x.pic = state.profileImg;
      x.name = state.sname;
      x.school = state.schoolname;
      x.year = state.year;
      x.major = state.major;
      x.status = state.status;
      x.GPA = state.gpa;
      x.intern = state.intern;
    },
    addMail: function(id,mail) {
      const isStudent = p => p.number === id
      //const mailObject = new mail(mail.senderId,mail.senderType,mail.message); 
      // console.log("id:" + id);
      // console.log(mail);
      // console.log(this.players.find(isStudent));
      this.players.find(isStudent).mailing.push(mail);
    },
    apply: function (id, app) {
      const isStudent = p => p.number === id;
      this.players.find(isStudent).applications.push(app);
    },
    updateStatus: function (sid,jobId,compId,status) {
      //console.log("here!");
      const isStudent = p => p.number === sid;
      let currStudent = this.players.find(isStudent);
      //console.log(currStudent);
      for(var i = 0; i < currStudent.applications.length; i++){
        if(currStudent.applications[i].companyId === compId &&
          currStudent.applications[i].positionId === jobId){
            currStudent.applications[i].appStatus = status;
            //console.log("Found the jobId");
            break;
          }
      }
      //console.log(currStudent);
    }
  }
  
  export default StudentAPI  