import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import students from './studentReducer';
import companies from './companyReducer';

const rootReducer = combineReducers({
  students,
  companies
});

export default rootReducer;