import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

function EditForm({fwks, onEdit}) {
  const [fName, setfName] = useState()
  const [fQty, setfQty] = useState()
  const [fPrice, setfPrice] = useState()
  const [fImg, setfImg] = useState()
  const [fInStock, setfInStock] = useState()
  const [fDetails, setfDetails] = useState()
  const [submit, setSubmit] = useState(true)
  const [fEdit, setFEdit] = useState({})

  const fireworkID = useParams().id

  useEffect(() => {
    const shwFW = fwks.find(f => f.id == fireworkID)
    setFEdit(shwFW)
  }, [])
  console.log(fEdit)
  function handleName(e) {
    setfName(e.target.value)
  }

  function handleQty(e) {
    setfQty(e.target.value)
  }

  function handlePrice(e) {
    setfPrice(e.target.value)
  }

  function handleImg(e) {
    setfImg(e.target.value)
  }

  function handleDetails(e) {
    setfDetails(e.target.value)
  }

  function handleinStock(e) {
    setfInStock(e.target.value)
  }

  function editForm(e) {
    e.preventDefault()
    if(fName === undefined) {
      setfName(fEdit.name)
    }
    if(fQty === undefined) {
      setfQty(fEdit.qty)
    }
    if(fPrice === undefined) {
      setfPrice(fEdit.price)
    }
    if(fImg === undefined) {
      setfImg(fEdit.img)
    }
    if(fInStock === undefined) {
      setfInStock(fEdit.inStock)
    }
    if(fDetails === undefined) {
      setfDetails(fEdit.details)
    }

  }
  useEffect(
    () => {
      let iEdit = {'name': fName, 'qty': fQty, 'price': fPrice, 'img': fImg, 'inStock': fInStock, 'details': fDetails}
      console.log(iEdit)
      fetch(`http://localhost:3500/fireworks/${fEdit.id}`,{
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(iEdit)
      })
      .then(response => response.json())
      .then(data => {
        console.log('Data', data)
        onEdit(data)
      })

    }, [fName, fQty, fPrice, fImg, fInStock, fDetails]

  )


  return (
      <>
        <div className='formDiv'>
        <h1>Edit Inventory Form</h1>
          <form className='form' id='newAdd' onSubmit={editForm} >
            Name <input type='text' placeholder={fEdit.name} value={fName} name='Name' onChange={handleName} label='Name'/><br/>
            Quantity <input type='text' placeholder={fEdit.qty} value={fQty} name='Quantity' onChange={handleQty} /><br/>
            Price <input type='number' placeholder={fEdit.price} value={fPrice} name='Price'  onChange={handlePrice}/><br/>
            Image <input type='text' placeholder={fEdit.img} value={fImg} name='Image'  onChange={handleImg}/><br/>
            In Stock <input type='number' placeholder={fEdit.inStock} step="1" value={fInStock} name='stk'  onChange={handleinStock}/><br/>
            Details <input type='text' placeholder={fEdit.details} value={fDetails} name='det'  onChange={handleDetails}/><br/>
            Submit <input type='submit' name='Submit' value='Submit' /><br/>
          </form>
        </div>
      </>
    )
  }
  export default EditForm
