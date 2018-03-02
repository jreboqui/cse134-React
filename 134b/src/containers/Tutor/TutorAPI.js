
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
          mentees: [],
          username: "ss",
          password: "kp12345",
          mailing: []
        }
    ],
    all: function() { return this.tutors},
    get: function(id) {
        const isTutor = t => t.tutorId === id
        return this.tutors.find(isTutor)
    }
}

export default TutorAPI