import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('Color Picker', () => {

  it('renders color picker component', () => {
    const wrapper = shallow(<ColorPicker colors = {[]} />);
    expect(wrapper).toMatchSnapshot();
  });

});
