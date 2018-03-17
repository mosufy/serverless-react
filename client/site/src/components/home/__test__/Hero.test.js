import React from 'react';
import renderer from 'react-test-renderer';

import Hero from '../Hero';

describe('home.Hero component testing', () => {
  it('it renders correctly', () => {
    const tree = renderer.create(
      <Hero />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});