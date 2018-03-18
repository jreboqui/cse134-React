import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import students from './studentReducer';
import companies from './companyReducer';
import tutors from './tutorReducer';
import all from './allReducer';

const rootReducer = combineReducers({
  students,
  companies,
  tutors,
  all
});

export default rootReducer;