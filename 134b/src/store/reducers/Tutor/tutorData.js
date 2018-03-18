import * as actionTypes from '../actions';

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

  
const TutorData = {
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
    currTutor: null
}

const tutorReducer = (state, actions) => {
    switch (action.type) {
        case actionTypes.GET_SINGLE_TUTOR: 
            const isTutor = state.tutors.filter(tutor => tutor.tutorId == action.tutorId)
            return {
                ...state,
                currTutor: isTutor[0]
            }
            break;
    }
}

export default reducer;