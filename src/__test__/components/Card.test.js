import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Card from '../../components/Card';

describe('<Card />', () => {
  const card = shallow(<Card missionName="International station" description="details" launchDateLocal="2015-04-27T19:03:00-04:00" />);
  test('Component Card render', () => {
    expect(card.length).toEqual(1);
  });

  test('It received the props', () => {
    expect(card.find('h2').text()).toBe("International station");
  });
});

describe('Card Snapshot', () => {
  test('Check UI of component Card', () => {
    const card = create(<Card missionName="International station" description="details" launchDateLocal="2015-04-27T19:03:00-04:00" />);
    expect(card.toJSON()).toMatchSnapshot();
  });
});