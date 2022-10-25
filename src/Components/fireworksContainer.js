import React from 'react'
import FireworksCards from './fireworksCards'

function FireworksContainer(props) {
  console.log(props)
  const fireW = props.fwks && props.fwks.map((f) => <FireworksCards key= {f.id} fc={f} />)
  return (
    <>
      <input type="text" className='srch' placeholder='Search'></input>
      <div className='container'>
        {fireW}
      </div>
    </>
  )
}
export default FireworksContainer
