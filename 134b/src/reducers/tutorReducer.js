import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function tutorReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.LOAD_TUTORS_SUCCESS:
      console.log("[LOAD_TUTORS_SUCCESS]");
      console.log(action.tutors);
      return action.tutors;

    case types.CREATE_COURSE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.tutor)
      ];

    case types.UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter(tutor => tutor.tutorId !== action.tutor.tutorId),
        Object.assign({}, action.tutor)
      ];

    default:
      return state;
  }
}
