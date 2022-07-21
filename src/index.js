import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FireworksAll from './Components/fireworksAll';
import NewInvForm from './Components/NewInvForm';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = document.getElementById('root')
const ReactRoot = ReactDOM.createRoot(root)
ReactRoot.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path=":fwid" element={<FireworksAll />} />
      <Route path="new" element={<NewInvForm />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
);
