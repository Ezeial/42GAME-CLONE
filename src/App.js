import React, { useState } from 'react'
import Board from './components/board'
import styled from 'styled-components'
import Map1 from './map/map1.json'
import Ship from './components/ship'

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

function App() {

  const [shipInfo, setShipInfo] = useState({x: 1, y: 1, rotation: 0})

  const rotateRight = () => {
    setShipInfo({...shipInfo, rotation: (shipInfo.rotation + 90)%360})
  }

  const rotateLeft = () => {
    setShipInfo({...shipInfo, rotation: (shipInfo.rotation + 270)%360})
  }

  const moveShip = () => {
    switch(shipInfo.rotation) {
      case (0):
        if (shipInfo.x === Map1.length) return
        setShipInfo({...shipInfo, x: shipInfo.x + 1})
        break;
      case (90):
        if (shipInfo.y === Map1.length) return
        setShipInfo({...shipInfo, y: shipInfo.y + 1})
        break;
      case (180):
        if (shipInfo.x === 1) return
        setShipInfo({...shipInfo, x: shipInfo.x - 1})
        break;
      case (270): 
      if (shipInfo.y === 1) return
        setShipInfo({...shipInfo, y: shipInfo.y - 1})
        break;
    }
  }
   
  return (
    <Container>
      <Board map = {Map1} shipInfo = {shipInfo}>
        <Ship info = {shipInfo}/>
      </Board>
    </Container>
  )
}

export default App
