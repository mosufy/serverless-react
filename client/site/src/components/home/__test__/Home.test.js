import React from 'react';
import renderer from 'react-test-renderer';

import Home from '../Home';

describe('home.Home component testing', () => {
  it('it renders correctly', () => {
    const tree = renderer.create(
      <Home />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});