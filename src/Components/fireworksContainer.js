import React from 'react'
import FireworksCards from './fireworksCards'
import {useEffect, useState} from 'react'
import { Link } from "react-router-dom"


function FireworksContainer(props){
  const fireW = props.fwks && props.fwks.map((f) => <FireworksCards key= {f.id} fc={f}/>)
    console.log(props.fwks)
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
