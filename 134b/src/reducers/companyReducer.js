import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function companyReducer(state = initialState, action) {
  let currCompany = null;

  switch (action.type) {
    case types.LOAD_COMPANIES_SUCCESS:
      console.log("[REDUCER: LOAD_COMPANIES_SUCCESS]");
      //console.log(action.companies);
      return action.companies;

    case types.ON_POST:
    console.log("[REDUCER: ON_POST]");
      
    
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
      
    case types.ON_ADD_MESSAGE_COMPANY:
        console.log("[COMPANY REDUCER: ON_ADD_MESSAGE]");
        //console.log(state);
        
        for(var i = 0; i <state.length;i++){
            if(state[i].id === action.userId){
              currCompany = Object.assign({},state[i]);
              break;
            }
        }

        //console.log(currCompany);      
        currCompany.mailing = [...currCompany.mailing, action.newMessage];  
        //console.log(currCompany);

        return state.map((company,i) => {
          if(company.id === action.userId){
            return Object.assign({},company,currCompany)
          }
          return company;
        })

    default:
      return state;
  }
}