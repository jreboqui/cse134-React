import delay from './delay';

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

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const tutors = [
  {
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
];

// function replaceAll(str, find, replace) {
//   return str.replace(new RegExp(find, 'g'), replace);
// }

//This would be performed on the server in a real app. Just stubbing in.
// const generateId = (course) => {
//   return replaceAll(course.title, ' ', '-');
// };

class TutorApi {
  static getAllTutors() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("In getAllTutors");
        console.log(tutors);
        resolve(Object.assign([], tutors));
      }, delay);
    });
  }

//   static saveCourse(course) {
//     course = Object.assign({}, course); // to avoid manipulating object passed in.
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         // Simulate server-side validation
//         const minCourseTitleLength = 1;
//         if (course.title.length < minCourseTitleLength) {
//           reject(`Title must be at least ${minCourseTitleLength} characters.`);
//         }

//         if (course.id) {
//           const existingCourseIndex = courses.findIndex(a => a.id == course.id);
//           courses.splice(existingCourseIndex, 1, course);
//         } else {
//           //Just simulating creation here.
//           //The server would generate ids and watchHref's for new courses in a real app.
//           //Cloning so copy returned is passed by value rather than by reference.
//           course.id = generateId(course);
//           course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
//           courses.push(course);
//         }

//         resolve(course);
//       }, delay);
//     });
//   }

//   static deleteCourse(courseId) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const indexOfCourseToDelete = courses.findIndex(course => {
//           return course.courseId == courseId;
//         });
//         courses.splice(indexOfCourseToDelete, 1);
//         resolve();
//       }, delay);
//     });
//   }
}

export default TutorApi;
