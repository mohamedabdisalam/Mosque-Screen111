import React from 'react';
import ReactDOM from 'react-dom';
import View3 from './View3';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<View3 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
