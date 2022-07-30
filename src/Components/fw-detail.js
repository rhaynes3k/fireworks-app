import React from 'react'
import {useState, useEffect} from 'react'
import fireworks from '../dbjson'
import {useParams} from 'react-router-dom'

function FWdetail (props) {
  const [firework, setFirework] = useState(null)
  const [isLoaded, setIsLoaded] = useState(null)
  const fireworkID = useParams().id
  useEffect(() => {
    const thisFirework = fireworks.find(x => x.id == fireworkID)
    setFirework(thisFirework)
    setIsLoaded(true)
  },[])
  if(!isLoaded) return <h2>Loading...</h2>

  return (
    <>
      <div id='card'>
        <h3>Name: {firework.name}</h3>
        <h3>Quantity: {firework.qty}</h3>
        <h3>Price: ${firework.price}</h3>
        <img className='pix' src={firework.image} />
        <h3>{firework.detail}</h3>    
      </div>
    </>
  )
}
export default FWdetail
