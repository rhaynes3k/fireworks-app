import React from 'react'
import FireworksCards from './fireworksCards'

function FireworksContainer(props) {
  console.log('Props', props.fwks)
  const fireW = props.fwks && props.fwks.map((f) => <FireworksCards fc={f} key={f.id} onEdit={props.onEdit}/>)
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
