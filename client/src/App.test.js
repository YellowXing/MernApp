import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('renders homepage', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
