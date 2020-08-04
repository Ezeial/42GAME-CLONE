import React from 'react'
import { useShipStore } from "../ShipContextProvider"

function Control() {
  const { playNextTurn, actions, add } = useShipStore()

  return (
    <div>
      <button onClick={() => playNextTurn()}>NEXT</button>
      <button onClick={() => console.log(add('FORWARD'))}>ADD FORWARD</button>
      <button onClick={() => console.log(add('RIGHT'))}>ADD RIGHT</button>
      <button onClick={() => console.log(add('LEFT'))}>ADD LEFT</button>
      <h1>QUEUE :</h1>
      {
        actions.map(item => <div>{item}</div>)
      }
    </div>
  )
}

export default Control
