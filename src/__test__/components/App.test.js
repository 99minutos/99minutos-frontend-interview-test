import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import App from '../../components/App';

describe('<App />', () => {
  const app = shallow(<App />);
  test('Component Render App', () => {
    expect(app.length).toEqual(1);
  });
});

describe('App Snapshot', () => {
  test('Verify the component App UI', () => {
    const app = create(<App />);
    expect(app.toJSON()).toMatchSnapshot();
  });
});