
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

const app1 = new ApplicationInfo(1, "Amazon Inc.", "Software Engineering", 1, "Under Review");
const app2 = new ApplicationInfo(1, "Amazon Inc.", "Software Engineering Intern", 2, "Under Review");
const app3 = new ApplicationInfo(1, "Amazon Inc.", "Data Science Intern", 3, "Under Review");

const mailToKevin1 = new mail("1","c","Hello, thank you very much for the invitiation to the interview for the SWE position. I would be availaible...");
const mailToKevin2 = new mail("1","t","Hi, I was supposed to hear back from Amazon last week, but I havent heard back until today regarding position Data Science Intern. I was wondering...");

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
      x.name = state.sname;
      x.school = state.schoolname;
      x.year = state.year;
      x.major = state.major;
      x.status = state.status;
      x.GPA = state.gpa;
      x.intern = state.intern;
    }

  }
  
  export default StudentAPI  