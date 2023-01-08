import React from 'react'
import {Link} from 'react-router-dom'
import {useState} from 'react'

// import {Card} from 'semantic-ui-react'

function FireworksCards({addTot, setAddTot, cartList, setCartList, fc, onStockEdit, setTotView}){
  const [cnt, setCnt] = useState(0)

  const {id, name, img, qty, price, inStock} = fc

  let counts = []

  function addToTot(e) {
    e.preventDefault()
    setCnt(cnt+1)
    console.log(e.target.num)
  }

  function subtTot(e) {
    console.log(e.target.num)
    if(cnt<=0){
      setCnt(0)
    }else {
      setCnt(cnt-1)
    }
    console.log(cnt)
  }

  const addToCart = (e) => {
    let fEdit = {'id': id, 'key': cartList.length, 'name': name, 'inStock': inStock, 'qty': qty, 'price': price, 'cnt': cnt}
    setCartList(cartList => [...cartList, fEdit])
    setTotView(true)
    setCnt(0)
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
        <div className='totCnt'>
          <input className='btn3' type='button' value='-' num={cnt} onClick={subtTot} />{cnt}<input className='btn3' type='button' value='+' num={cnt} onClick={addToTot} />
        </div>
        <input className= 'btn' type='button' name='cart' value='Add To Cart' id={id} num={cnt} onClick={addToCart} />
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
