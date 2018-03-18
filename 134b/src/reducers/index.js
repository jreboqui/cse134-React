import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import students from './studentReducer';
import companies from './companyReducer';
import all from './allReducer';
import tutors from './tutorReducer';

const rootReducer = combineReducers({
  students,
  companies,
  tutors,
  all
});

export default rootReducer;