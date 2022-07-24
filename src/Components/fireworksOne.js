import React from 'react'
// import FireworksCards from './fireworksCard'
import FWdetail from './fw-detail'
import {useEffect} from 'react'
import fireworks from '../dbjson'

function FireworksOne(){
  useEffect(() => {
    console.log("US ran")
  }, [])
  console.log(fireworks)
  return (
    <>
      <div className='container'>
        {fireworks.map(fdc => <FWdetail key={fdc.id} fdc={fdc}/>)}
      </div>
    </>
  )
}
export default FireworksOne
