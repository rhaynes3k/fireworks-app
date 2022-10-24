import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import NewInvForm from './Components/NewInvForm';

const root = document.getElementById('root')
const ReactRoot = ReactDOM.createRoot(root)
ReactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
