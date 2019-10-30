import React from 'react';
import { shallow } from 'enzyme';
import RandomColor from './RandomColor';

describe('Random Color component', () => {
  it('renders randomcolor', () => {
    const wrapper = shallow(<RandomColor />);
    expect(wrapper).toMatchSnapshot();
  });
});
