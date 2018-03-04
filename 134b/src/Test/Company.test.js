import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';

import Company from '../containers/Company/Company';
import CurrentJobPosting from '../containers/Company/CurrentJobPosting/CurrentJobPosting';
import CompanyAbout from '../containers/Company/CurrentJobPosting/CompanyAbout';
import JobDetails from '../containers/Company/CurrentJobPosting/JobDetails';

Enzyme.configure({ adapter: new Adapter() });
let match1 = {
  params: { number:1}
}
// }
// it('renders without crashing', () => {
  
//     shallow(<Company match={match1}/>);
    
//   });
  const wrapper = shallow(<Company match={match1}/>);
// // it('renders without crashing', () => {
  
// //   shallow(<CurrentJobPosting/>);
    
// // });

// // it('renders without crashing', () => {
  
// //   shallow(<CompanyAbout/>);
  
// // });

// // it('renders without crashing', () => {
  
// //   shallow(<JobDetails />);
// //   // 
// // });






