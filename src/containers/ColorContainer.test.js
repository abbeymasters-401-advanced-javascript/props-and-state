import React from 'react';
import { shallow } from 'enzyme';
import ColorContainer from './ColorContainer';

describe('Color Container', () => {

  it('renders color container component', () => {
    const wrapper = shallow(<ColorContainer />);
    expect(wrapper).toMatchSnapshot();
  });

});
