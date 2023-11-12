import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//const root = document.querySelector('#root')
//const div = React.createElement('div')
//ReactDOM.createRoot(root).render(div)
