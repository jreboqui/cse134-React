import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function companyReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_COMPANIES_SUCCESS:
      console.log("[REDUCER: LOAD_COMPANIES_SUCCESS]");
      //console.log(action.companies);
      return action.companies;

      // let currStudent = null;
      // for(var i = 0; i <action.allStudents.length;i++){
      //     if(action.allStudents[i].number === action.sid){
      //       currStudent = Object.assign({},action.allStudents[i]);
      //       break;
      //     }
      // }
      
      // //currStudent.applications.push(action.position);
      // //currStudent.applications = [...currStudent.applications, action.position];  
      // currStudent.name = "FUCK ISIS";

      // return state.map((student,i) => {
      //   if(student.number === action.sid){
      //     return Object.assign({},student,currStudent)
      //   }
      //   return student;
      // })

      default:
      return state;
  }
}