import * as React from 'react';
import * as renderer from 'react-test-renderer';
import App from '../src/App';

it('render correctly', () => {
  const app = renderer.create(<App />).toJSON();
  expect(app).toMatchSnapshot();
});
