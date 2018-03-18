import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function studentReducer(state = initialState.students, action) {
  let currStudent = null;
  switch (action.type) {
    case types.LOAD_STUDENTS_SUCCESS:
      console.log("[REDUCER: ON_STUDENTS_SUCCESS]");
      return action.students;

    case types.ON_APPLY:
      console.log("[REDUCER: ON_APPLY]");
      
      for(var i = 0; i <state.length;i++){
          if(state[i].number === action.sid){
            currStudent = Object.assign({},state[i]);
            break;
          }
      }
      
      //currStudent.applications.push(action.position);
      currStudent.applications = [...currStudent.applications, action.position];  
  
      return state.map((student,i) => {
        if(student.number === action.sid){
          return Object.assign({},student,currStudent)
        }
        return student;
      })

    case types.ON_SUBMIT:
      console.log("[REDUCER: ON_SUBMIT]");
      console.log(state);

      currStudent = null;
      for(var i = 0; i <state.length;i++){
          if(state[i].number === action.sid){
            currStudent = Object.assign({},state[i]);
            break;
          }
      }
      currStudent.GPA = action.newInfo.gpa;
      currStudent.name = action.newInfo.sname;
      currStudent.intern = action.newInfo.intern;
      currStudent.school = action.newInfo.schoolname;
      currStudent.pic = action.newInfo.profileImg;
      currStudent.status = action.newInfo.status;
      currStudent.year = action.newInfo.year;
      currStudent.major = action.newInfo.major;

    //currStudent.applications.push(action.position);
    //currStudent.applications = [...currStudent.applications, action.position];  

    return state.map((student,i) => {
      if(student.number === action.sid){
        return Object.assign({},student,currStudent)
      }
      return student;
    });


    case types.ON_UPDATE_STATUS:  
        console.log("[REDUCER: ON_UPDATE_STATUS]");
        //console.log(action);

        let curStudent = null;
        for(var i = 0; i <state.length;i++){
            if(state[i].number === action.sid){
              curStudent = Object.assign({},state[i]);
              break;
            }
        }

        //console.log(curStudent);
        
        let updatedApps = null;
        updatedApps = {...curStudent,applications:action.newApplications}
        //console.log(updatedApps);

        return state.map((student,i) => {
          if(student.number === action.sid){
            return Object.assign({},student,updatedApps)
          }
          return student;
        })

      case types.ON_ADD_MESSAGE_STUDENT:
        console.log("[STUDENT REDUCER: ON_ADD_MESSAGE]");
        console.log(state);
        
        for(var i = 0; i <state.length;i++){
            if(state[i].number === action.userId){
              console.log("In if");
              currStudent = Object.assign({},state[i]);
              break;
            }
        }

        //console.log(currStudent);

        currStudent.mailing = [...currStudent.mailing, action.newMessage];  
    
        //console.log(currStudent);

        return state.map((student,i) => {
          if(student.number === action.userId){
            return Object.assign({},student,currStudent)
          }
          return student;
        })

    default:
      return state;
  }
}
