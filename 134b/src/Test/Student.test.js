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
import { expect } from 'chai';

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

 it('renders without crashing', () => {
  
  shallow(<Player match={match1}/>);
   
});
//Some editProfile testings


describe('<form />', () => {
  it('renders a form crashing', () => {
    const eProfile = shallow(<EditProfile location={location1}/>);
    expect(eProfile.find('form').length).to.equal(1);
  });
  
  it('`<form>` element should have an `<input />` element', () => {
    const eProfile = shallow(<EditProfile location={location1}/>);
    expect(eProfile.find('input').exist);
  });
  it('`<form>` element should have an `<label />` element', () => {
    const eProfile = shallow(<EditProfile location={location1}/>);
    expect(eProfile.find('label').exist);
  });
  it('`<form>` element should have 8 `<input />` element', () => {
    const eProfile = shallow(<EditProfile location={location1}/>);
    expect(eProfile.find('input').length).to.equal(8);
  });
  it('`<form>` element should have textarea element', () => {
    const eProfile = shallow(<EditProfile location={location1}/>);
    expect(eProfile.find('textarea').exist);
  });
  it('`<form>` element should have textarea element', () => {
    const eProfile = shallow(<EditProfile location={location1}/>);
    expect(eProfile.find('textarea').length).to.equal(1);
  });
  it('`<form>` element should have 2 button elements', () => {
    const eProfile = shallow(<EditProfile location={location1}/>);
    expect(eProfile.find('button').length).to.equal(2);
  });





})



  

