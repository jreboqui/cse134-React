import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import students from './studentReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  students
});

export default rootReducer;