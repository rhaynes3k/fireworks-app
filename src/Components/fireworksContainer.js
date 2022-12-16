import React from 'react'
import FireworksCards from './fireworksCards'
import Totals from './totals'
import {useState} from 'react'

function FireworksContainer({fwks, onStockEdit}) {
  const [addTot, setAddTot] = useState(0)
  const [cartList, setCartList] = useState([])
  const [srch, setSearch] = useState("")
  const [totView, setTotView] = useState(null)
  const searchResults = fwks.filter(fw => {
    return fw.name.toLowerCase().includes(srch.toLowerCase())
  })

  const fireW = searchResults && searchResults.map((f) =>
   <FireworksCards fc={f} setTotView={setTotView} setAddTot={setAddTot} addTot={addTot} key={f.id} onStockEdit={onStockEdit} cartList={cartList} setCartList={setCartList}/>)

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div>
      <input type="text" className='srch' placeholder='Search' onChange={handleSearch}></input>
      <div>
      {totView ? <Totals addTot={addTot} cartList={cartList} /> : null}
      </div>
      <div className='container'>
        {fireW}
      </div>
    </div>
  )
}
export default FireworksContainer
