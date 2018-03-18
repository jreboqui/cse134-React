import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import { loadStudents } from './actions/studentActions';
import { loadCompanies } from './actions/companyActions';
import { loadTutors } from './actions/tutorActions';
// const rootReducer = combineReducers({
//     companyData: companyDataReducer
//     //Combine all reducers here..
// });

//const store = createStore(rootReducer);

const store = configureStore();
store.dispatch(loadStudents());
store.dispatch(loadCompanies());
store.dispatch(loadTutors());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
