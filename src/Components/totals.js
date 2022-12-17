import React from 'react'
import {useState, useEffect} from 'react'

function Totals({cartList, setCartList}) {
  console.log(cartList)
  const [list, setList] = useState(false)
  const [addTot, setAddTot] = useState(0)

  let invList = cartList.map((l, index) =>
    <li id={index}> {l.name} - ${l.price} <input id={l.id} type='button' value='Delete' onClick={remove} /> </li>)
    let newTot
  console.log(invList)

useEffect(
  () => {
    console.log(cartList, addTot)
    cartList.map(t => setAddTot(addTot + t.price))
    console.log(addTot)
}, [cartList])

  console.log(addTot)

  function remove(e) {
    console.log('Clicked', parseInt(e.target.id))
    let newList = cartList.filter(list => list.id != parseInt(e.target.id))
    setCartList(newList)
    console.log(newList)
  }

  console.log(addTot)
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
