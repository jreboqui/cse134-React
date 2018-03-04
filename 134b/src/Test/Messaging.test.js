import React from 'react';
import ReactDOM from 'react-dom';

import Inbox from '../containers/Messaging/Inbox';
import Messaging from '../containers/Messaging/Messaging';
import NewMessage from '../containers/Messaging/NewMessage';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });


// it('renders without crashing', () => {

//     shallow(<Inbox />);
//   });

it('renders without crashing', () => {
  
    shallow(<Messaging/>);
  });

  
// it('renders without crashing', () => {
  
//     shallow(<NewMessage/>);
//   });