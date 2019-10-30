import React from 'react';
import { shallow } from 'enzyme';
import ColorDisplay from './ColorDisplay';

describe('Color Display', () => {

  it('renders color display component', () => {
    const wrapper = shallow(<ColorDisplay />);
    expect(wrapper).toMatchSnapshot();
  });

});
