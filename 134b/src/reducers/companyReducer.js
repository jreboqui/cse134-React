import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function companyReducer(state = initialState.companies, action) {
  switch (action.type) {
    case types.LOAD_COMPANIES_SUCCESS:
      console.log("[REDUCER: LOAD_COMPANEIS_SUCCESS]");
      console.log(action.companies);
      return action.companies;

    default:
      return state;
  }
}