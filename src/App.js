import React from 'react'
import './App.css'
import FireworksContainer from './Components/fireworksContainer'
import FireworksCards from './Components/fireworksCards'
import FWdetail from './Components/fw-detail'
import NewInvForm from './Components/newInvForm'
import HomeSlider from './Components/homeSlider'

// import Buttons from './Components/newButton'
import {useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

function App() {

  const [fWorks, setFireworks] = useState([])

  const onAdd = (newAdd) => {
    setFireworks([...fWorks, newAdd])
  }

  const onEdit = (updatedAdd) => {
    const newState = fWorks.map(f => {
      if(f.id === updatedAdd.id) {
        return {...f, inStock: updatedAdd.inStock}
      }
      return f
    })
      setFireworks(newState)
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

  return (
    <div className="App">

      <header className="App-header">
        <h1>Boom Kits</h1>
      </header>
      <Router>
        <section>
          <NavLink to='/'>
            <input type='button' name='home' value='Home'/>
          </NavLink>
          <NavLink to='fireworks'>
            <input type='button' name='all' value='All Fireworks'/>
          </NavLink>
          <NavLink to='fireworks/new'>
          <input type='button' name='new' value='New Add'/>
          </NavLink>
        </section>
        <Routes>
          <Route exact path='/' element={<HomeSlider />} />
          <Route exact path='/fireworks' element= {<FireworksContainer fwks={fWorks} onEdit={onEdit} />} />
          <Route exact path='/fireworks/new' element= {<NewInvForm onAdd={onAdd}/>} />
          <Route exact path='/fireworks/:id' element= {<FWdetail fwks={fWorks}/>} />
        </Routes>
      </Router>


    </div>
  )
}

export default App;
