import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import tutorApi from '../api/mockTutorApi';

export function loadTutorsSuccess(tutors) {
  return { type: types.LOAD_TUTORS_SUCCESS, tutors};
}

export function createCourseSuccess(course) {
  return {type: types.CREATE_COURSE_SUCCESS, course};
}
  
export function updateCourseSuccess(course) {
  return {type: types.UPDATE_COURSE_SUCCESS, course};
}


export function loadTutors() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return tutorApi.getAllTutors().then(tutors => {
      dispatch(loadTutorsSuccess(tutors));
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
  
  