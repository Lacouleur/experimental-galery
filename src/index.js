import React from 'react';
import { render } from 'react-dom';
import App from './Components/App/App';

const rootComponent = (
  <App />
);


render(rootComponent, document.getElementById('root'));