import React from 'react'
import './App.css'
import FireworksContainer from './Components/fireworksContainer'
import FWdetail from './Components/fw-detail'
import NewInvForm from './Components/newInvForm'
import Buttons from './Components/newButton'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Boom Kits</h3>
      </header>
      <Router>
      <section>
        <NavLink to='fireworks/new'>
            <input type='button' name='new' value='New Add'/>
        </NavLink>
        <NavLink to='fireworks'>
            <input type='button' name='cont' value='All Fireworks'/>
        </NavLink>
      </section>
        <Routes>
        <Route exact path='/fireworks' element= {<FireworksContainer />} />
          <Route exact path='/fireworks/:id' element= {<FWdetail />} />
          <Route exact path='/fireworks/new' element= {<NewInvForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
