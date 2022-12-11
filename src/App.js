import React from 'react'
import './App.css'
import FireworksContainer from './Components/fireworksContainer'
import FWdetail from './Components/fw-detail'
import NewInvForm from './Components/newInvForm'
import HomeImage from './Components/homeImage'
import EditForm from './Components/editForm'
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

  const onStockEdit = (updateStock) => {
    const newState = fWorks.map(f => {
      if(f.id === updateStock.id) {
        return {...f, inStock: updateStock.inStock}
      }
      return f
    })
      setFireworks(newState)
      console.log(newState)
  }

  const onEdit = (update) => {
    const newState = fWorks.map(f => {
      if(f.id === update.id) {
        return {...f, ...update}
      }
      console.log(f)
      return f
    })
      setFireworks(newState)
      console.log(newState)
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
          <Route exact path='/' element={<HomeImage />} />
          <Route exact path='/fireworks' element= {<FireworksContainer fwks={fWorks} onStockEdit={onStockEdit} />} />
          <Route exact path='/fireworks/new' element= {<NewInvForm onAdd={onAdd}/>} />
          <Route exact path='/fireworks/:id' element= {<FWdetail fwks={fWorks}/>} />
          <Route exact path='/fireworks/new/:id' element= {<EditForm fwks={fWorks} onEdit={onEdit} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
//npx json-server -w data/db.json -p 3500
//npm start
