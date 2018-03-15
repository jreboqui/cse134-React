import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function studentReducer(state = initialState.students, action) {
  switch (action.type) {
    case types.LOAD_STUDENTS_SUCCESS:
      return action.students;

    case types.CREATE_COURSE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.student)
      ];

    case types.UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter(student => student.id !== action.student.id),
        Object.assign({}, action.student)
      ];

    case types.ON_APPLY:
      console.log("[REDUCER: ON_APPLY]");
      console.log(action);
      // const newStudentsState = [...state] //clone the state in the store
      // const newStudentsState = Object.assign([],state);
      let newStudentsState = state.map(student => Object.assign({},student)); //clone the state in the store
      let studentIndex = 0;
      for(var i = 0; i <newStudentsState.length;i++){
        if(newStudentsState[i].number === action.sid){
          newStudentsState[i].applications.push(action.position);
          break;
        }
      }
      console.log(newStudentsState);
      //return newStudentsState;
      return Object.assign([],newStudentsState);

      // const newStudentsState = [...state] //clone the state in the store
      // console.log(newStudentsState);
      // // const currStudent = newState.findIndex(student=>{
      // //   return student.number === action.id;
      // // });
      // const currStudent = state.filter(student => student.number === action.sid);
      // console.log(currStudent);
      // currStudent.applications.push(action.postion);
      
      // return {
      //   ...state,
      //   students: state.students.map(
      //     student => student.number === action.sid ?
      //        {...student, applications: student.applications.push(action.position)} : student
      //   )
      // };
      
    default:
      return state;
  }
}
