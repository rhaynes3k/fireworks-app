import React from 'react'
import {Link} from 'react-router-dom'

// import {Card} from 'semantic-ui-react'

function FireworksCards({addTot, setAddTot, fc, onStockEdit, setTotView}){
  const {id, name, img, qty, price, inStock} = fc
  const addToCart = (e) => {
    let fEdit = {'id': id, 'inStock': `${inStock}`-1, 'qty': qty, 'price': price}
    updtStk(fEdit)
    chkOut(fc)
    let newTot = addTot + fEdit.price
    setTotView(true)
    setAddTot(newTot)
    console.log('addTot', addTot)
  }

  const chkOut = (pix) => {
    let newTot = fc.price
    let myPix = {
      'name': fc.name,
      'sub': newTot
    }
    return myPix
  }

  const updtStk = (fEdit) => {
    fetch(`http://localhost:3500/fireworks/${id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(fEdit)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      onStockEdit(data)
    })
  }
  return (
      <div id='cards-border'>
        <Link to={`/fireworks/${id}`}>
          <p className='f-card'>{name}</p>
          <img className='fw-img' src={`images/${img}`} alt="N/A" />
        </Link>
        <h5 className='f-text'>{qty} pcs <br />
          ${price}/pk
        </h5>
        <input className= 'btn' type='button' name='cart' value='Add To Cart' id={id} onClick={addToCart} />
        <br />
        <h6 className='stk'>
          {inStock}
        </h6>
        <h6 className='stk2'>
          In Stock
        </h6>
      </div>
  )
}
export default FireworksCards
