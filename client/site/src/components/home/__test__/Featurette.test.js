import React from 'react';
import renderer from 'react-test-renderer';

import Featurette from '../Featurette';

describe('home.Featurette component testing', () => {
  it('it renders correctly', () => {
    const tree = renderer.create(
      <Featurette />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});