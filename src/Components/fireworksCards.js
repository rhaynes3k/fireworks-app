import React from 'react'
import {Link} from 'react-router-dom'

// import {Card} from 'semantic-ui-react'

function FireworksCards({addTot, setAddTot, cartList, setCartList, fc, onStockEdit, setTotView}){

  const {id, name, img, qty, price, inStock} = fc

  const addToCart = (e) => {
    let fEdit = {'id': id, 'key': cartList.length, 'name': name, 'inStock': inStock, 'qty': qty, 'price': price}
    setCartList(cartList => [...cartList, fEdit])
    setTotView(true)
    console.log('addTot', addTot, 'cartList', cartList, 'FEDIT', fEdit)
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
