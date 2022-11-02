import React from 'react'
import {useEffect, useState} from 'react'

function Totals({addTot}) {

  return(
    <>
      <div className='tot'>
        <h2>Shopping Cart</h2>
        <h4 className='totListSub'>Sub Total:</h4>
        <h3 className='totList'>${addTot}</h3>
      </div>
    </>
  )
}
export default Totals
