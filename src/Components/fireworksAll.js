import React from 'react'
import FireworksCards from './fireworksCard'
import {useState, useEffect} from 'react'
import fireworks from '../dbjson'

function FireworksAll(){
  useEffect(() => {
    console.log("US ran")
  }, [])
  // console.log(fireworks)
  return (
    <>
      <input type="text" className='srch' placeholder='Search'></input>
      <div className='container'>
        {fireworks.map(fc => <FireworksCards key={fc.id} fc={fc}/>)}
      </div>
    </>
  )
}
export default FireworksAll
