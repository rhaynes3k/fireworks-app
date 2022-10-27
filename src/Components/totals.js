import React from 'react'
import {useEffect, useState} from 'react'

function Totals(props) {
  console.log('Props', props)

  return(
    <>
      <div className='tot'>
        <h1>Total</h1>
        <h2>${props.myPix.sub}</h2>
        <h5>Sub Total:</h5>
      </div>
    </>
  )
}
export default Totals
