import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import studentApi from '../api/mockStudentApi';

export function loadStudentsSuccess(students) {
  return { type: types.LOAD_STUDENTS_SUCCESS, students};
}

export function loadStudents() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return studentApi.getAllStudents().then(students => {
      dispatch(loadStudentsSuccess(students));
    }).catch(error => {
      throw(error);
    });
  };
}

export function onApply(sid,position) {
  return {
    type: types.ON_APPLY,
    sid,
    position
  }
}

export function onUpdateStatus(sid,newApplications) {
  return {
    type: types.ON_UPDATE_STATUS,
    sid,
    newApplications,
  }
}

export function onSubmit(sid, newInfo) {
  return {
    type: types.ON_SUBMIT,
    sid,
    newInfo
  }
}
