import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'  
import {Link} from 'react-router-dom'


function FWdetail ({fwks}) {
  const [firework, setFirework] = useState({})
  const fireworkID = useParams().id

  function invEdit(e) {
    console.log('Clicked', firework)
    if(e.target != null) {
      console.log('true')
    }
  }

  useEffect(() => {
    const shwFW = fwks.find(f => f.id == fireworkID)
    setFirework(shwFW)
    console.log(shwFW)
  }, [])
  console.log(firework)

  return (
    <div>
      <div id='card'>
        <img className='pix' src={`/images/${firework.img}`} alt= "N/A" />
        <h5>{firework.name}</h5>
        <h5>${firework.price}</h5>
        <h5>{firework.details}</h5>
      </div>
      <Link to={`/fireworks/new/${firework.id}`} firework={firework}>
        <input type='button' value="Edit" onClick={invEdit}/>
      </Link>
    </div>
  )
}
export default FWdetail
