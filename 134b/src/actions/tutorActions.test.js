import expect from 'expect';
import * as courseActions from './courseActions';
import * as studentActions from './studentActions';
import * as tutorActions from './tutorActions';

import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

// describe('actions', () => {
//     it('should create an action to handle submit', () => {
//       const sid = 1;
//       const newInfo = "";
//       const expectedAction = {
//         type: types.ON_SUBMIT,
//         sid,
//         newInfo
//       }
//       expect(studentActions.onSubmit(sid,newInfo)).toEqual(expectedAction)
//     })
//   });

//   describe('another action', () => {
//     it('should create an action for ON_APPLY', () => {
//       const sid = 1;
//       const position = "";
//       const expectedApply = {
//         type: types.ON_APPLY,
//         sid,
//         position
//       }
//       expect(studentActions.onApply(sid,position)).toEqual(expectedApply)
//     })
//   })
  
  describe('Tutor load success test', () => {
    it('should create an action for LOAD_TUTOR_SUCCESS', () => {
      const tutors = "";
      const expectedTutorApply = {
        type: types.LOAD_TUTORS_SUCCESS,
        tutors
      }
      expect(tutorActions.loadTutorsSuccess(tutors)).toEqual(expectedTutorApply)
    })
  })


