import React from 'react'
// import {Card} from 'semantic-ui-react'

function FireworksCards(props){
  return (
    <div id='card-border'>
      <p className='f-card'>{props.fc.name}</p>
      <img className='fw-img' src={props.fc.image} alt='N/A'/>
      <h5 className='f-card'>${props.fc.price}/pk</h5>

    </div>
  )
}
export default FireworksCards
