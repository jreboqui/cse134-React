
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
  

const mentee1 = new mentee("Kevin Pansawira", "Amazon Inc.", "2018-01-20");
const mentee2 = new mentee("Ariwasnap Nivek", "Microsoft", "2018-05-20");
const mentee3 = new mentee("Kevin Pansawira", "Palantir", "2018-06-20");


const mailToSunshine1 = new mail("1","c","Hello, thank you very much for the invitiation to the interview for the SWE position. I would be availaible...");
const mailToSunshine2 = new mail("1","t","Hi, I was supposed to hear back from Amazon last week, but I havent heard back until today regarding position Data Science Intern. I was wondering...");

const TutorAPI = {
    tutors: [
        { tutorId: 1,
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
    ],
    all: function() { return this.tutors},
    get: function(id) {
        const isTutor = t => t.tutorId === id
        return this.tutors.find(isTutor)
    }
}

export default TutorAPI