import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function allReducer(state = initialState, action) {
  switch (action.type) {
    case types.ON_CHECK:
        console.log("[ON CHECK]");
        console.log(state);
        return state;
    default:
      return state;
  }
}
