import React from 'react'
import FireworksCards from './fireworksCards'
import Totals from './totals'
import {useState, useEffect} from 'react'

function FireworksContainer({fwks, onEdit}) {
  const [addTot, setAddTot] = useState(0)
  const [srch, setSearch] = useState("")
  const [totView, setTotView] = useState("")
  const searchResults = fwks.filter(fw => {
    return fw.name.toLowerCase().includes(srch.toLowerCase())
  })

  const fireW = searchResults && searchResults.map((f) =>
   <FireworksCards fc={f} setAddTot={setAddTot} addTot={addTot} key={f.id} onEdit={onEdit}/>)

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <input type="text" className='srch' placeholder='Search' onChange={handleSearch}></input>
      <div className='container'>
        {fireW}
      </div>
      <Totals addTot={addTot} />

    </>
  )
}
export default FireworksContainer
