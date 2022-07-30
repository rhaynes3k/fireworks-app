import React from 'react'
import FireworksCards from './fireworksCards'
import {useEffect} from 'react'
import fireworks from '../dbjson'
import { Link } from "react-router-dom"

function FireworksContainer(){
  useEffect(() => {
    console.log("US ran")
  }, [])
  // console.log(fireworks)
  return (
    <>
      <input type="text" className='srch' placeholder='Search'></input>
      <div className='container'>
        {fireworks.map(fc => <FireworksCards key={fc.id} fc={fc} />)}
      </div>
    </>
  )
}
export default FireworksContainer
