import React from 'react'
import {useState, useEffect} from 'react'
import emailjs from '@emailjs/browser'

function Totals({cartList, setCartList, onStockEdit, cnt, setCnt}) {
  console.log(cartList)
  const [addTot, setAddTot] = useState(0)
  const [chObj, setChObj] = useState()



  let invList = cartList.map((l, index) => <li id={l.key} > ({l.cnt}) {l.name} - ${l.price * l.cnt} <input id={l.key} type='button' value='Delete' onClick={remove} /> </li>)
  console.log(invList)

useEffect(
  () => {
    console.log(cartList, addTot)
    let i = 0
    setAddTot(cartList.map(t => t.price*t.cnt).reduce((acc, t) => acc + t, i))
    console.log(addTot)
}, [cartList, setCartList])

  function remove(e) {
    console.log('Clicked', parseInt(e.target.id)+1)
    let newList = cartList.filter(list => list.key != parseInt(e.target.id))
    setCartList(newList)
  }

  function handleCheckOut(e, addTot) {
    console.log(e.target, 'Clicked Check Out', cartList)
    cartList && cartList.map(ch => {
      onStockEdit(ch)
      console.log(ch)
      }
    )
    alert('Clicked Check Out')
    setChObj(addTot)
    emailSetUp()
  }

  function emailSetUp(){
    let emailAdd = prompt("Please Enter Your Email Address")
    let phoneNum = prompt("Please Enter Your Phone Number")


    let invoice = cartList.map((i) => {
      return `
        Name: ${i.name}
        Price: $${i.price}
        Count: ${i.cnt}
        Subtotal: $${(i.price*i.cnt).toFixed(2)}
      `
    })

    let tempParams = {
      from_name: emailAdd,
      to_name: 'rhaynesdev@gmail.com',
      phone: `${phoneNum}`,
      message: `${invoice}`,
      total: `Total: $${addTot.toFixed(2)}`
    }

    emailjs.send('service_htk7t5s','template_efj5ezc',tempParams, "lQiFFKEwlGdIWfq91")
      .then(function(res){
        console.log(res)
      })
  }

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
