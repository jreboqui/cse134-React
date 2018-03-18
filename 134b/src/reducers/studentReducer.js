import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function studentReducer(state = initialState.students, action) {
  switch (action.type) {
    case types.LOAD_STUDENTS_SUCCESS:
      console.log("[REDUCER: ON_STUDENTS_SUCCESS]");
      return action.students;

    case types.ON_APPLY:
      console.log("[REDUCER: ON_APPLY]");
      let currStudent = null;
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
      
    default:
      return state;
  }
}
