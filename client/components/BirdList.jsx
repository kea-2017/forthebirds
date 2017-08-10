
import React from 'react'
import BirdDetails from './BirdDetails'

export default function BirdList ({birds}) {
  return (
    <div>
      {birds.map((bird, i) => (
        <BirdDetails bird={bird} key={i} />
      ))}
    </div>
  )
}


  <Link to='/bird'><a href="#" onClick={()=> dispatch(showBird(bird))}>See details</a></Link>
