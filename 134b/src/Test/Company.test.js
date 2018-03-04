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
let match2 = {
  params: { companyId:1}
}

it('renders without crashing', () => {
  
    shallow(<Company match={match2}/>);
  });
 // const wrapper = shallow(<Company match={match1}/>);
// it('renders without crashing', () => {
  
//   shallow(<CurrentJobPosting match={match2}/>);
    
// });
// const wrapper = shallow(<CurrentJobPosting match={match2} />);
// wrapper.setState({currCompany: "Amazon"});
// wrapper.setState({bannerPath: "Nowhere"});

it('renders without crashing', () => {
  
  shallow(<CompanyAbout industry={["Engineering","noice","fortest"]}/>);
  
});

it('renders without crashing', () => {
  
  shallow(<JobDetails />);
  
});






