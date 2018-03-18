import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function companyReducer(state = initialState.companies, action) {
  switch (action.type) {
    case types.LOAD_COMPANIES_SUCCESS:
      //console.log("[REDUCER: LOAD_COMPANIES_SUCCESS]");
      //console.log(action.companies);
      return action.companies;

    // case types.ON_APPLY:
    //   console.log("[REDUCER: ON_APPLY]");
    //   console.log(action);
    //   console.log(state);
    //   const newState = [...state] //clone the state in the store
    //   console.log(newState);
    //   const currStudent = newState.students.findIndex(student=>{
    //     return student.number === action.id;
    //   });
    //   currStudent.applications.push(action.postion);
    //   console.log(newState);
    //   return newState;

    
      // const index = state.students.findIndex(student => {
      //   return student.number === action.id;
      // });
      // const applyingStudent = state.students.slice()
      // return [
      //   ...state.students.filter(student =>)
      // ]

    case types.ON_POST:
    console.log("[REDUCER: ON_POST]");
      
    let currCompany = null;
    for(var i = 0; i < state.length; i++){
        if(state[i].id === action.companyId){
          currCompany = Object.assign({},state[i]);
          break;
        }
    }
    
    currCompany.openPositions = [...currCompany.openPositions, action.newPosition];  

    return state.map((company,i) => {
      if(company.id === action.companyId){
        return Object.assign({},company,currCompany)
      }
      return company;
    });
  
    break;
      

    default:
      return state;
  }
}