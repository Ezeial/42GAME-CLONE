import React from "react"
import useQueue from "../utils/queue"
import { useShipStore } from "../ShipContextProvider"

function Control() {
  const { playNextTurn } = useShipStore()
  const { print } = useQueue()

  return (
    <div>
      <button onClick={() => playNextTurn()}>NEXT</button>
      <button onClick={() => console.log('ok')}>right</button>
      <button onClick={() => console.log('ok')}>left</button>
      <button onClick={() => test()}>dq</button>
      <button onClick={(e) => print()}>print</button>
    </div>
  )
}

export default Control
