import React from 'react'
import './App.css'
import FireworksContainer from './Components/fireworksContainer'
import FWdetail from './Components/fw-detail'
import NewInvForm from './Components/newInvForm'
import Buttons from './Components/newButton'
import {useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

function App() {

  const [fWorks, setFireworks] = useState([])

  const onAddNew = (newAdd) => {
    setFireworks(fWorks => {
      return [...fWorks, newAdd]
    })
    console.log(onAddNew)
  }

  useEffect(
    () => {
      fetch('http://localhost:3500/fireworks')
      .then(res => {
        return res.json()
      })
      .then(data => {
        const newFetch = data.map(f => f)
        setFireworks(newFetch)
      })
    }, [])
    console.log(fWorks)

  return (
    <div className="App">

      <header className="App-header">
        <h3>Boom Kits</h3>
      </header>
      <Router>
        <section>
          <NavLink to='/'>
            <input type='button' name='cont' value='Home'/>
          </NavLink>
          <NavLink to='fireworks'>
            <input type='button' name='cont' value='All Fireworks'/>
          </NavLink>
          <NavLink to='fireworks/new'>
          <input type='button' name='new' value='New Add'/>
          </NavLink>
        </section>
        <Routes>
          <Route exact path='/' />
          <Route exact path='/fireworks' element= {<FireworksContainer fwks={fWorks} />} />
          <Route exact path='/fireworks/new' element= {<NewInvForm onAddNew={onAddNew}/>} />
          <Route exact path='/fireworks/:id' element= {<FWdetail />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
