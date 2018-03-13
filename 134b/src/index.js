import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';

import companyDataReducer from './store/reducers/companyData';

const rootReducer = combineReducers({
    companyData: companyDataReducer
    //Combine all reducers here..
});

ReactDOM.render(<Provider><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
