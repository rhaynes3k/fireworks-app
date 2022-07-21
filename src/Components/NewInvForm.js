import React from 'react'
import fireworks from '../dbjson'

function NewInvForm () {

function doit(e) {
  e.preventDefault();

  let name = document.getElementById('name').value
  let quantity = document.getElementById('qty').value
  let price = document.getElementById('price').value
  let img = document.getElementById('img').value
  console.log("Clicked", name, fireworks)
  let newAdd = {'id': fireworks.length + 1, 'name': name, 'quantity': quantity, 'price': price, 'img': img}
  console.log(newAdd)
  fireworks.push(newAdd)
  console.log(fireworks)
}

  return (
    <>
      <div className='formDiv'>
      <h1>New Inventory Form</h1>
        <form className='form' id='newAdd' onSubmit={doit} >
          Name <input type='text' title='Name' id='name' label='Name' /><br/>
          Quantity <input type='text' name='Quantity' id='qty' /><br/>
          Price <input type='text' name='Price'  id='price'/><br/>
          Image <input type='text' name='Image'  id='img'/><br/>
          Submit <input type='submit' name='Submit' value='Submit' /><br/>
        </form>
      </div>
    </>
  )
}
export default NewInvForm