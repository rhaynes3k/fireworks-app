import React from 'react'
// import fireworks from '../dbjson'

function FWdetail (props) {
  console.log(props.fc)
  return (
    <>
      <div id='card-border'>
        <p className='f-card'>{props.fc.name}</p>
        <img className='fw-img' src={props.fc.image} alt='N/A'/>
        <h5 className='f-card'>${props.fc.price}/pk</h5>
        <p className='f-card'>{props.fc.detail}</p>
      </div>
    </>
  )
}
export default FWdetail
