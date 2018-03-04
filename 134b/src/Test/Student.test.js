import React from 'react';
import ReactDOM from 'react-dom';

import Student from '../containers/Student/Student';
import CompanyListings from '../containers/Student/CompanyListings';
import ApplicationTable from '../containers/Student/ApplicationTable';
import FullRoster from '../containers/Student/FullRoster';
import Player from '../containers/Student/Player';
import EditProfile from '../containers/Student/EditProfile';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

let match1 = {
  params: { number:1}
}
//const wrapper = shallow(<Student match={match1}/>);
it('renders without crashing', () => {
  
  shallow(<Student match={match1}/>);
  
});


it('renders without crashing', () => {
  
    shallow(<CompanyListings match={match1}/>);
    
  });

 it('renders without crashing', () => {
  
    shallow(<ApplicationTable/>);
    
 });

 
it('renders without crashing', () => {
  
    shallow(<FullRoster/>);
     
 });

 let location1 = {
  pathname: "/student/1"
}
it('renders without crashing', () => {
  
    shallow(<EditProfile location={location1}/>);
     
 });



  

