import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('MyComponent', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Button debug />);
  
    expect(component).toMatchSnapshot();
  });
});