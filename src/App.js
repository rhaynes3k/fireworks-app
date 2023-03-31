import React from 'react'
import './App.css'
import FireworksContainer from './Components/fireworksContainer'
import FWdetail from './Components/fw-detail'
import FW_detail from './Components/fw_detail'
import NewInvForm from './Components/newInvForm'
import HomeImage from './Components/homeImage'
import EditForm from './Components/editForm'
import Totals from './Components/totals'
import {useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

function App() {

  const [fWorks, setFireworks] = useState([])
  const [disNav, setDisNav] = useState(true)

  const [uName, setUName] = useState('')
  const [email, setEmail] = useState('')
  const [pWord, setPWord] = useState(null)
  const [logIn, setLogIn] = useState(false)
  const [createAcc, setCreateAcc] = useState(false)
  const [newUser, setNewUser] = useState(false)
  const [hideNewButton, setHideNewButton] = useState(false)
  const [divHide, setDivHide] = useState(false)
  const [userPw, setUserPw] = useState(pWord)


  const onAdd = (newAdd) => {
    setFireworks([...fWorks, newAdd])
  }

  const onStockEdit = (updateStock) => {
    console.log('FROM TOTALS', updateStock.id, updateStock)
    const newState = fWorks.map(f => {
      if(f.id == updateStock.id) {
        console.log(f.name)
        return {...f, inStock: updateStock.inStock - updateStock.cnt}
      }
      console.log('UPDATED CHK OUT OBJECT', f)
      return f
    })
      console.log(fWorks, 'NEW STATE ->->', newState[updateStock.id - 1])
      fetch(`http://localhost:3500/fireworks/${updateStock.id}`,{
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newState[updateStock.id - 1])
      })
      .then(response => response.json())
      .then(data => {
        console.log('Data', data)
        setFireworks(newState)
      })

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

    // function loadCreate(e) {
    //   e.preventDefault()
    //   setNewUser(true)
    //   setHideNewButton(true)
    // }
    //
    function handleUName(e) {
      setUName(e.target.value)
    }
    function handleEmail(e) {
      setEmail(e.target.value)
    }

    function handlePassword(e) {
      setPWord(e.target.value)
    }
    //
    // function handleNewUserSubmit(e) {
    //   e.preventDefault()
    //   console.log('Clicked Submit')
    //   let newUserSubmit = {uname: uName, email: email, password: pWord}
    //   console.log(newUserSubmit)
    //   setUserPw(pWord)
    //   setUName('')
    //   setEmail('')
    //   setPWord('')
    //   setDivHide(true)
    // }
    //
    // function handleLoginSubmit(e) {
    //   e.preventDefault()
    //   console.log('Clicked Login Submit')
    //   let userLogin = {uName: uName, Password: pWord}
    //   console.log(userLogin, 'Target', e.target)
    //   if (pWord == '12345') {
    //     setUName('')
    //     setPWord('')
    //     setDivHide(true)
    //   }else {
    //     alert('Wrong password Doofus')
    //   }
    // }

    function delObj(d) {
      console.log('Clicked Delete', d.target)
      fetch(`http://localhost:3500/fireworks/${d.target.id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(res => {
          console.log(res)
          console.log(fWorks[d.target.id])
      })
    }

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
          <NavLink to='fireworks' >
            <input  type='button' name='all' value='All Fireworks'/>
          </NavLink>
          <NavLink to='fireworks/new' style={{pointerEvents: pWord != null ? '' : 'none'}} >
          <input type='button' name='new' value='New Add'/>
          </NavLink>
        </section>
        <Routes>
          <Route exact path='/' element={<HomeImage />} />
          <Route exact path='/fireworks' element= {<FireworksContainer fwks={fWorks} onStockEdit={onStockEdit} />} />
          <Route exact path='/fireworks/new' element= {<NewInvForm onAdd={onAdd}/>} />
          <Route exact path='/fireworks/:id' element= {<FW_detail fwks={fWorks} delObj={delObj}/>} />
          <Route exact path='/fireworks/new/:id' element= {<EditForm fwks={fWorks} onEdit={onEdit} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
//npx json-server -w data/db.json -p 3500
//npm start
