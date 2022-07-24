import React from 'react'
import {Link} from 'react-router-dom'
// import {Card} from 'semantic-ui-react'

function FireworksCards(props){
  
  return (
    <Link to={`/fireworks/${props.fc.id}`}>
    <div id='card-border'>
      <p className='f-card'>{props.fc.name}</p>
      <img className='fw-img' src={props.fc.image} alt='N/A'/>
      <h5 className='f-card'>${props.fc.price}/pk</h5>
    </div>
    </Link>
  )
}
export default FireworksCards
