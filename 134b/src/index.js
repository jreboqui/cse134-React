import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
//import companyDataReducer from './store/reducers/companyData';
import configureStore from './store/configureStore';
import { loadStudents } from './actions/studentActions';
import { loadCompanies } from './actions/companyActions';
// const rootReducer = combineReducers({
//     companyData: companyDataReducer
//     //Combine all reducers here..
// });

//const store = createStore(rootReducer);

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());
store.dispatch(loadStudents());
store.dispatch(loadCompanies());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
