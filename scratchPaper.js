{
  "fireworks": [
    {
      "name": "Jumping Jacks",
      "qty": "300",
      "price": 75,
      "img": "jumpingJacks.png",
      "inStock": 198,
      "details": "Spinning colors of light on ground",
      "id": 1
    },
    {
      "name": "Bottle Rockets",
      "qty": "50",
      "price": 25,
      "img": "BottleRockets.png",
      "inStock": 403,
      "details": "200ft up and pop",
      "id": 2
    },
    {
      "name": "Firecracker",
      "qty": "100",
      "price": 40,
      "img": "Firecrackers.png",
      "inStock": 2952,
      "details": "Loud popping sound after light fuse",
      "id": 3
    },
    {
      "name": "Roman Candle",
      "qty": "50",
      "price": 85,
      "img": "roman.png",
      "inStock": 283,
      "details": "Emits colored ball of light into the sky",
      "id": 4
    },
    {
      "name": "Neon Master Missles",
      "qty": "20",
      "price": 45,
      "img": "Neons.png",
      "inStock": 44,
      "details": "Flies into the sky and explodes with colorful bursts of light",
      "id": 5
    },
    {
      "name": "Pride and Honor",
      "qty": "1 (25 items)",
      "price": 120,
      "img": "PrideHonor.png",
      "inStock": 2,
      "details": "Assorted fountains and rockets",
      "id": 6
    },
    {
      "name": "Party Pack 6",
      "qty": "1 (60 items)",
      "price": 140,
      "img": "PartyPack6.png",
      "inStock": 95,
      "details": "Assorted fountains and rockets (90 items)",
      "id": 7
    },
    {
      "name": "Bucket-o-fun",
      "qty": "1 (40 items)",
      "price": 85,
      "img": "Bucket.png",
      "inStock": 72,
      "details": "Assorted fountains and rockets",
      "id": 8
    },
    {
      "name": "Nuclear Option",
      "qty": "1",
      "price": 1000,
      "img": "genericBomb.jpeg",
      "inStock": 28,
      "details": "You don't want to know!!",
      "id": 9
    },
    {
      "name": "Hellraiser",
      "qty": "2",
      "price": "600",
      "img": "genericBomb.jpeg",
      "inStock": "10",
      "details": "Have you seen the movie?!?!",
      "id": 10
    }
  ]
}


function invEdit(e) {
  e.prevenDefault()
  iEdit = {'name': name, 'qty': quantity, 'price': price, 'img': img, 'inStock': inStock, 'details': details}
  console.log(iEdit)
  fetch(`http://localhost:3500/fireworks/${id}`, {
    method: PATCH,
    headers: {
      'Content-Type': 'applicaiton/json'
    },
    body: JSON.stringify(newAdd)
  })
  .then(response => response.json())
  .then(data => {
    onEdit(data)
  })
  console.log('Clicked')
}

<input type='button' value="Edit" onClick={invEdit}/>




import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'


function FWdetail ({fwks}) {
  const [firework, setFirework] = useState({})
  const fireworkID = useParams().id
  const [btnEdit, setBtnEdit] = useState(
    <input type='button' value="Log In" onClick={invEdit}/>)
  const [btnDisplay, setBtnDisplay] = useState()

  function invEdit(e) {
    console.log('Clicked', firework)
    if(e.target != null) {
      console.log('true')
      pWordChk(e)
    }
  }

  function pWordChk(e) {
    let pw = prompt('Enter Password Jerk!')
    if(pw == 123) {
      setBtnDisplay(<Link to={`/fireworks/new/${firework.id}`} firework={firework}>
        <input type='button' value="Edit" />
      </Link>)
    } else {
      setBtnDisplay('Wrong password!')
    }

  }
  useEffect(() => {
    const shwFW = fwks.find(f => f.id == fireworkID)
    setFirework(shwFW)
    console.log(shwFW)
  }, [])
  console.log(firework)

  return (
    <div>
      <div id='card'>
        <img className='pix' src={`/images/${firework.img}`} alt= "N/A" />
        <h5>{firework.name}</h5>
        <h5>${firework.price}</h5>
        <h5>{firework.details}</h5>
      </div>
      {btnEdit}
      {btnDisplay}

}
    </div>
  )
}
export default FWdetail


const updtStk = (fEdit) => {
  fetch(`http://localhost:3500/fireworks/${id}`,{
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(fEdit)
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
    onStockEdit(data)
  })
}



Totals: Modified ********

import React from 'react'
import {useState, useEffect} from 'react'

function Totals({cartList, setCartList}) {
  console.log(cartList, addTot)
  const [list, setList] = useState()
  const [addTot, setAddTot] = useState(0)

  let invList = () => {cartList.map((l, index) =>
    <li id={index}> {l.name} - ${l.price} <input id={l.id} type='button' value='Delete' onClick={remove} /> </li>)
  console.log(invList, addTot)
  }

  function updateTot() {
    let newTot
    newTot = cartList.map(f => f.price).reduce((ac, t) =>
      ac + t
    )
    setAddTot(newTot)
    console.log(addTot)
  }

  function remove(e) {
    console.log('CLICKED!!!', parseInt(e.target.id))
    let newList = cartList.filter(list => list.id != parseInt(e.target.id))
    console.log(newList)
    setCartList(newList)
    updateTot()
  }

  console.log("LOOK HERE", cartList, addTot)
  useEffect(
    () => {
      updateTot()
  }, [cartList, setCartList])

  console.log(addTot)


  console.log(addTot)

  return(
    <>
      <div className='tot'>
        <h2>Shopping Cart</h2>
        <ol>
          {invList}
        </ol>
        <h3 className='totList'>Total ${addTot}</h3>
      </div>
    </>
  )
}
export default Totals

Totals: Modified *******

let sum = array1.reduce((accumulator, currentValue) => accumulator + currentValue)
let cartTotal = items.reduce((currentTotal, item) => {
   return currentTotal + item.price
}, 0)
