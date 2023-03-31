import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import EditForm from './newInvForm'

function FW_detail ({fwks, delObj}) {
  const [firework, setFirework] = useState({})
  const fireworkID = useParams().id
  const [showPw, setShowPw] = useState(false)
  const [pw, setPw] = useState('')
  const [showForm, setShowForm] = useState('')
  const [text, setText] = useState('Edit Here')
  const [showDelete, setShowDelete] = useState(false)

  function invEdit(e) {
    console.log('Clicked', firework)
    setShowPw(true)
  }

  function handlePw(e) {
    setPw(e.target.value)
  }

  function chkPw(e) {
    e.preventDefault()
    if(pw == '123') {
      setShowForm(true)
      setShowDelete(true)
    } else {
      setShowForm(false)
      alert('Wrong password dude...')
    }
  }

  useEffect(() => {
    const shwFW = fwks.find(f => f.id == fireworkID)
    setFirework(shwFW)
    console.log(shwFW)
  }, [])

  return (
    <div>
      <div id='card'>
        <img className='pix' src={`/images/${firework.img}`} alt= "N/A" />
        <h5>{firework.name}</h5>
        <h5>${firework.price}</h5>
        <h5>{firework.details}</h5>
        <input type='button' value="Edit" onClick={invEdit} />
        {showPw ? <form onSubmit={chkPw}> <input type="password" placeholder="Enter Password" value={pw} onChange={handlePw} /> </form> : ''}
        {showForm ? <Link to={`/fireworks/new/${firework.id}`}><input type='button' value='Edit Here' /> </Link> : ''}
        {showDelete ? <input type='button' id={firework.id} value='Delete' onClick={delObj} /> : false}
      </div>
    </div>
  )
}
export default FW_detail
