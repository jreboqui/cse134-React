import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import studentApi from '../api/mockStudentApi';

export function loadStudentsSuccess(students) {
  return { type: types.LOAD_STUDENTS_SUCCESS, students};
}

export function createCourseSuccess(course) {
  return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function updateCourseSuccess(course) {
  return {type: types.UPDATE_COURSE_SUCCESS, course};
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

export function saveCourse(course) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(course => {
      course.id ? dispatch(updateCourseSuccess(course)) :
        dispatch(createCourseSuccess(course));
    }).catch(error => {
      dispatch(ajaxCallError(error));
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

export function onSubmit(sid, newInfo) {
  return {
    type: types.ON_SUBMIT,
    sid,
    newInfo
  }
}
