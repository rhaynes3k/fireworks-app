import React from 'react'
import {Link} from 'react-router-dom'
import Totals from './totals'

// import {Card} from 'semantic-ui-react'

function FireworksCards(props){
  const {id, name, img, qty, price, inStock} = props.fc
  const addToCart = (e) => {
    let fEdit = {'id': id, 'inStock': `${inStock}`-1, 'qty': qty, 'price': price}
    updtStk(fEdit)
    chkOut(props.fc)
  }

  const chkOut = (pix) => {
    let newTot = props.fc.price
    let myPix = {
      'name': props.fc.name,
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
      props.onEdit(data)
      console.log('Fetch Ran', data, props.fc)
    })
  }
  return (
    <>

      <div id='cards-border'>
        <Link to={`/fireworks/${id}`}>
          <p className='f-card'>{name}</p>
          <img className='fw-img' src={`images/${img}`} alt="No Picture Available" />
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
