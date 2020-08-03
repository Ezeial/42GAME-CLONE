import React, { useState, useEffect } from "react"
import styled from "styled-components"
import useQueue from "../utils/queue"
import { useShipStore } from "../ShipContextProvider"

function Control() {
  const { moveShip, rotateLeft, rotateRight } = useShipStore()
  const { add , excecute, print } = useQueue()
  return (
    <div>
      <button onClick={() => add(rotateLeft)}>turnL</button>
      <button onClick={() => add(rotateRight)}>turnR</button>
      <button onClick={() => add(moveShip)}>move</button>
      <button onClick={(e) => excecute()}>dq</button>
      <button onClick={(e) => print()}>print</button>
    </div>
  )
}

export default Control
