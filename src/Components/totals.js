import React from 'react'
import {useEffect, useState} from 'react'

function Totals(props) {
  console.log('Props', props)

  return(
    <>
      <div className='tot'>
        <h2>Shopping Cart</h2>
        <h3 className='totList'>Item Names</h3>
        <h4 className='totListSub'>Sub Total:</h4>
      </div>
    </>
  )
}
export default Totals
