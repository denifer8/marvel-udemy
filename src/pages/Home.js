import React from 'react'
import BestCharacters from '../components/BestCharacters'
import Insider from '../components/Insider'
import ListLastEvents from '../components/ListLastEvents/ListLastEvents'


export default function Home() {
  return (
    <div>
      <BestCharacters/>
      <ListLastEvents/>
      <Insider />
    </div>
  )
}
