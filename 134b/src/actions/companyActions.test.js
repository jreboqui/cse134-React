import expect from 'expect';
import * as courseActions from './courseActions';
import * as companyActions from './companyActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('Company load success test', () => {
    it('should create an action for LOAD_COMPANIES_SUCCESS', () => {
      const companies = "";
      const expectedComp = {
        type: types.LOAD_COMPANIES_SUCCESS,
        companies
      }
      expect(companyActions.loadCompaniesSuccess(companies)).toEqual(expectedComp)
    })
  })

  describe('Apply action test', () => {
    it('should create an action for ON_POST', () => {
      const companyId = 1;
      const newPosition = "";
      const expectedPOST = {
        type: types.ON_POST,
        companyId,
        newPosition
      }
      expect(companyActions.onPost(companyId,newPosition)).toEqual(expectedPOST)
    })
  })
