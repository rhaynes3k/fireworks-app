import React from 'react'
import {Link} from 'react-router-dom'
// import {Card} from 'semantic-ui-react'

function FireworksCards(props){
  const {id, name, image, qty, price} = props.fc

  return (
    <Link to={`/fireworks/${id}`}>
    <div id='cards-border'>
      <p className='f-card'>{name}</p>
      <img className='fw-img' src="../images/BottleRockets.png" alt="" />
      <h5 className='f-text'>{qty}/pk</h5>
      <h5 className='f-text'>${price}/pk</h5>
    </div>
    </Link>
  )
}
export default FireworksCards
