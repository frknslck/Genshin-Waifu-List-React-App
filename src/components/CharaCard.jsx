import React from 'react'
import Card from "react-bootstrap/Card"
import { useState } from 'react'
const CharaCard = ({name, img, element, region, weapon, rarity}) => {
    const [cond, setCond] = useState(true)
  return (
    <Card className='rounded-2 m-auto chara-card' role="button" onClick={() => setCond(!cond)}>
      {cond 
      ? <Card.Img variant="top" src={img} className="chara-logo"/>
      : <ul className='card-flipped'>
            <li className='h5 text-start'>♡ {element}</li>
            <li className='h5 text-start'>♡ {weapon}</li> 
            <li className='h5 text-start'>♡ {region}</li>
            <li className='h5 text-start'>♡ {rarity}</li>
        </ul>}
      <Card.Footer className='footer'>
        <Card.Title href="#">{name}</Card.Title>
      </Card.Footer>
    </Card>
  )
}

export default CharaCard