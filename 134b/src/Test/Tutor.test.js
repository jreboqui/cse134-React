import React from 'react';
import ReactDOM from 'react-dom';

import Tutor from '../containers/Tutor/Tutor';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import { expect } from 'chai';

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
    })
  })
  