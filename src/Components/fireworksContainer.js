import React from 'react'
import FireworksCards from './fireworksCards'
import {useState, useEffect} from 'react'
function FireworksContainer(props) {

  const [srch, setSearch] = useState("")
  console.log('Props', props.fwks)
  const searchResults = props.fwks.filter(fw => {
    return fw.name.toLowerCase().includes(srch.toLowerCase())
  })
  const fireW = searchResults && searchResults.map((f) => <FireworksCards fc={f} key={f.id} onEdit={props.onEdit}/>)
  const handleChange = (e) => {
    setSearch(e.target.value)
    console.log('Changed')
  }

  console.log('Search', srch)

  return (
    <>
      <input type="text" className='srch' placeholder='Search' onChange={handleChange}></input>
      <div className='container'>
        {fireW}
      </div>
    </>
  )
}
export default FireworksContainer
