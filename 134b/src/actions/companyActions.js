import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import studentApi from '../api/mockStudentApi';
import companyAPI from '../api/mockCompanyApi';

export function loadCompaniesSuccess(companies) {
    return { type: types.LOAD_COMPANIES_SUCCESS, companies};
}

export function loadCompanies() {
    return function(dispatch) {
      dispatch(beginAjaxCall());
      return companyAPI.getAllCompanies().then(companies => {
        dispatch(loadCompaniesSuccess(companies));
      }).catch(error => {
        throw(error);
      });
    };
}

export function onPost(companyId, newPosition) {
  return {
    type: types.ON_POST,
    companyId,
    newPosition
  }
}

export function onAddMailCompany(userId, newMessage){
  return {
    type: types.ON_ADD_MESSAGE_COMPANY,
    userId,
    newMessage
  }
}
