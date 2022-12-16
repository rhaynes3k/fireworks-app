import React from 'react'
import {useState} from 'react'

function Totals({addTot, cartList}) {
  console.log(addTot, cartList)
  const [list, setList] = useState(false)

  let invList = cartList.map((l, index) => <li id={index}> {l.name} - ${l.price} <input id={index} type='button' value='Delete' onClick={remove}/> </li>)
  console.log(invList)

  function remove(e) {
    console.log('Clicked', e.target.id)
    let newList = invList.filter((l) => l.props.id.toString() !== e.target.id)
    console.log(newList)
    invList = newList
    console.log(invList)
  }

  return(
    <>
      <div className='tot'>
        <h2>Shopping Cart</h2>
        <ol>
          {invList}
        </ol>
        <h3 className='totList'>Total ${addTot}</h3>
      </div>
    </>
  )
}
export default Totals
