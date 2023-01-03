import React from 'react'
import {useState, useEffect} from 'react'

function Totals({cartList, setCartList, onStockEdit}) {
  console.log(cartList)
  const [addTot, setAddTot] = useState(0)
  const [chObj, setChObj] = useState()



  let invList = cartList.map((l, index) => <li id={l.key} > {l.name} - ${l.price} <input id={l.key} type='button' value='Delete' onClick={remove} /> </li>)
  console.log(invList)

useEffect(
  () => {
    console.log(cartList, addTot)
    let i = 0
    setAddTot(cartList.map(t => t.price).reduce((acc, t) => acc + t, i))
    console.log(addTot)
}, [cartList, setCartList])

  console.log(addTot)

  function remove(e) {
    console.log('Clicked', parseInt(e.target.id)+1)
    let newList = cartList.filter(list => list.key != parseInt(e.target.id))
    setCartList(newList)
    console.log(newList)
  }

  function handleCheckOut(e) {
    console.log(e.target, 'Clicked Check Out', cartList)
    cartList && cartList.map(ch => {
      onStockEdit(ch)
      console.log(ch)
      }
    )
    setCartList([])
    alert('Clicked Check Out')
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
        <input type='button' value='Check Out' onClick={handleCheckOut}/>
      </div>
    </>
  )
}
export default Totals
