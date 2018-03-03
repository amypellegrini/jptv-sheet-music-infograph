import React from 'react';
import createInfograph from './infograph';
import renderer from 'react-test-renderer';

test('Infograph render', () => {
  const Infograph = createInfograph(React);
  const infographRender = renderer.create(
    <Infograph />
  );

  let tree = infographRender.toJSON();

  expect(tree).toMatchSnapshot();
});
