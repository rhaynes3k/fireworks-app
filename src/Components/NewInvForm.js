import React from 'react'
import {useState} from 'react'

function NewInvForm ({onAdd}) {

  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState()
  const [img, setImage] = useState('')
  const [inStock, setStock] = useState()
  const [details, setDetails] = useState('')

  const handleName = (e) =>  {
    setName(e.target.value)
  }
  console.log(name)
  function handleQuantity(e) {
    setQuantity(e.target.value)
  }
  function handlePrice(e) {
    setPrice(parseInt(e.target.value))
  }
  function handleImage(e) {
    setImage(e.target.value)
  }
  function handleStock(e) {
    setStock(parseInt(e.target.value))
  }
  function handleDetails(e) {
    setDetails(e.target.value)
  }

function doit(e) {
  e.preventDefault();

  let newAdd = {'name': name, 'qty': quantity, 'price': price, 'img': img, 'inStock': inStock, 'details': details}
  console.log(newAdd)

  fetch('http://localhost:3500/fireworks',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newAdd)
  })
  .then(response => response.json())
  .then(data => {
    onAdd(data)
  })
}

  return (
    <>
      <div className='formDiv'>
      <h1>New Inventory Form</h1>
        <form className='form' id='newAdd' onSubmit={doit} >
          Name <input type='text' value={name} name='Name' onChange={handleName} label='Name' /><br/>
          Quantity <input type='text' value={quantity} name='Quantity' onChange={handleQuantity} /><br/>
          Price <input type='number' value={price} name='Price'  onChange={handlePrice}/><br/>
          Image <input type='text' value={img} name='Image'  onChange={handleImage}/><br/>
          In Stock <input type='number' step="1" value={inStock} name='stk'  onChange={handleStock}/><br/>
          Details <input type='text' value={details} name='det'  onChange={handleDetails}/><br/>
          Submit <input type='submit' name='Submit' value='Submit' /><br/>
        </form>
      </div>
    </>
  )
}
export default NewInvForm
