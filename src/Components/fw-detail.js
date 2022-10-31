import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

function FWdetail (props) {
  const [firework, setFirework] = useState({})
  const fireworkID = useParams().id

  useEffect(() => {
    const shwFW = props.fwks.find(f => f.id == fireworkID)
    setFirework(shwFW)
    console.log(shwFW)
  }, [])

  console.log(useParams())
  console.log(firework.img)



  console.log('Current State', firework)
  return (
      <div id='card'>
        <img className='pix' src={`/images/${firework.img}`} alt= "No Picture Available" />
        <h5>{firework.name}</h5>
        <h5>${firework.price}</h5>
        <h5>{firework.details}</h5>
      </div>
  )
}
export default FWdetail
