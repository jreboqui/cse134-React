import delay from './delay';

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

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const students = [
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
      }
];

// function replaceAll(str, find, replace) {
//   return str.replace(new RegExp(find, 'g'), replace);
// }

//This would be performed on the server in a real app. Just stubbing in.
// const generateId = (course) => {
//   return replaceAll(course.title, ' ', '-');
// };

class StudentApi {
  static getAllStudents() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], students));
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

export default StudentApi;
