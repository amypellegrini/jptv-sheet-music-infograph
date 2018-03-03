import React from 'react';
import ReactDOM from 'react-dom';
import createInfograph from './components/infograph/infograph';

const Infograph = createInfograph(React);

ReactDOM.render(
  <Infograph />,
  document.getElementById('root')
);
