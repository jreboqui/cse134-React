import * as types from './actionTypes';

export function onCheck(sid) {
    return {
      type: types.ON_CHECK,
      sid,
    }
  }