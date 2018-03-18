import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function tutorReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.LOAD_TUTORS_SUCCESS:
      console.log("[LOAD_TUTORS_SUCCESS]");
      console.log(action.tutors);
      return action.tutors;

    case types.ON_ADD_MESSAGE_TUTOR:
    console.log("[TUTOR REDUCER: ON_ADD_MESSAGE]");
    //console.log(state);
    
    let currTutor = null;
    for(var i = 0; i <state.length;i++){
        if(state[i].tutorId === action.userId){     
          currTutor = Object.assign({},state[i]);
          break;
        }
    }

    console.log(currTutor);      
    currTutor.mailing = [...currTutor.mailing, action.newMessage];  
    console.log(currTutor);

    return state.map((tutor,i) => {
      if(tutor.tutorId === action.userId){
        return Object.assign({},tutor,currTutor)
      }
      return tutor;
    })
      

    default:
      return state;
  }
}
