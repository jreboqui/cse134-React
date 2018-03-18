import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import tutorApi from '../api/mockTutorApi';

export function loadTutorsSuccess(tutors) {
  return { type: types.LOAD_TUTORS_SUCCESS, tutors};
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

export function onAddMailTutor(userId, newMessage){
  return {
    type: types.ON_ADD_MESSAGE_TUTOR,
    userId,
    newMessage
  }
}

  