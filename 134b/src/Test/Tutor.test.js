import React from 'react';
import ReactDOM from 'react-dom';

import Tutor from '../containers/Tutor/Tutor';

import Enzyme from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import { expect } from 'chai';
import { CompanyListings } from '../containers/Student/CompanyListings';

Enzyme.configure({ adapter: new Adapter() });

let match1 = {
    params: { number:1}
  }

it('renders without crashing', () => {
  
    shallow(<Tutor match={match1}/>);
     
  });

  describe('< Tutor />', () => {
    it('should render', () => {
      const wrapper = shallow(<Tutor match={match1} name="Example" />);
      expect(wrapper).to.have.length(1);
    });
    describe('check props', ()=> {
      const wrapper = shallow(<Tutor match={match1} name="Example" />);
      console.log(wrapper.instance().props);
    });
    it('should render buttons', () => {
        const wrapper = shallow(<Tutor match={match1} name="Example" />);
        expect(wrapper.find('button')).to.exist;
    })
    it('should contain CompanyListings', () => {
        const mywrapper = shallow(<Tutor match={match1}/>)
        const  compList = mywrapper.find(CompanyListings);
        expect(compList).to.exist;
      });
    it('should contain ApplicationTable', () => {
        const mywrapper = shallow(<Tutor match={match1}/>)
        const  AppTab = mywrapper.find('ApplicationTable');
        expect(AppTab).to.exist;
    });
  })
  ;
