import React from 'react'
import './App.css'
import FireworksContainer from './Components/fireworksContainer'
import FWdetail from './Components/fw-detail'
import NewInvForm from './Components/NewInvForm'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Boom Kits</h1>
      </header>
      <Router>
        <Routes>
          <Route exact path='/fireworks' element= {<FireworksContainer />} />
          <Route exact path='/fireworks/:id' element= {<FWdetail />} />
          <Route exact path='/new' element= {<NewInvForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
