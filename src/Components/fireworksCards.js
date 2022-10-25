import React from 'react'
import {Link} from 'react-router-dom'
import Totals from './totals'
// import {Card} from 'semantic-ui-react'

function FireworksCards(props, {onAdd}){
  console.log(props)
  const {id, name, image, qty, price, inStock} = props.fc
  const addToCart = (e) => {
    console.log('clicked', e, props.fc)
    let fEdit = {'id': id, 'inStock': `${inStock}`-1}
    console.log(fEdit)
    updtStk(fEdit, onAdd)
    chkOut(props.fc)
  }

  function chkOut(pix) {
    let myPix = {
        'name': pix.name,
        'sub': pix.price
      }
    console.log(myPix)
  }

  const updtStk = (fEdit) => {
    const updateDom = {}
    console.log(fEdit.id)
    fetch(`http://localhost:3500/fireworks/${id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(fEdit)
    })
    .then(response => response.json())
    .then(data => {
      // onAdd(data)
      console.log(data)
    })
  }
  return (
    <>
      <div id='cards-border'>
        <Link to={`/fireworks/${id}`}>
          <p className='f-card'>{name}</p>
          <img className='fw-img' src={`../images/${image}`} alt="../images/genericBomb.jpeg" />
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
    </>
  )
}
export default FireworksCards
