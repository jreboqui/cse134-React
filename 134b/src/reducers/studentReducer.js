import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function studentReducer(state = initialState.courses, action) {
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

    default:
      return state;
  }
}
