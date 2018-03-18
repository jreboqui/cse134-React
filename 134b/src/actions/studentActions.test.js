import expect from 'expect';
import * as courseActions from './courseActions';
import * as studentActions from './studentActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('actions', () => {
    it('should create an action to handle submit', () => {
      const sid = 1;
      const newInfo = "";
      const expectedAction = {
        type: types.ON_SUBMIT,
        sid,
        newInfo
      }
      expect(studentActions.onSubmit(sid,newInfo)).toEqual(expectedAction)
    })
  });

  describe('another action', () => {
    it('should create an action for ON_APPLY', () => {
      const sid = 1;
      const position = "";
      const expectedApply = {
        type: types.ON_APPLY,
        sid,
        position
      }
      expect(studentActions.onApply(sid,position)).toEqual(expectedApply)
    })
  })

  describe('Student load success test', () => {
    it('should create an action for ON_STUDENT_SUCCESS', () => {
      const students = "";
      const expectedApply = {
        type: types.LOAD_STUDENTS_SUCCESS,
        students
      }
      expect(studentActions.loadStudentsSuccess(students)).toEqual(expectedApply)
    })
  })

