import React from 'react'
import {useState, useEffect} from 'react'

import {useParams} from 'react-router-dom'

function FWdetail (props) {
  const [firework, setFirework] = useState({})
  const fireworkID = useParams().id
  console.log(useParams())
  console.log(fireworkID)
  useEffect(() => {
    const thisFirework = props.fwks.find(x => x.id == fireworkID)
    setFirework(thisFirework)
    console.log(thisFirework)
  },[])

  console.log(firework)
  return (
    <>
      <h3>{firework.name}</h3>
    </>
  )
}
export default FWdetail
