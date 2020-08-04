import React, { createContext, useContext, useState } from "react"
import Map1 from "./map/map1.json"

const TiqetContext = createContext({})

export const ShipContextProvider = ({ children }) => {

  const [ship, setShip] = useState({x: 1, y: 1, r: 0})
  const [action, setAction] = useState(['FORWARD', 'RIGHT', 'FORWARD', 'LEFT'])
  const [actionIndex, setActionIndex] = useState(0)

  const doTurn = (ship, action) => {
    switch (action) {
      case 'LEFT': 
        return {
          x: ship.x,
          y: ship.y,
          r: (ship.r + 270) % 360
        }
      case 'FORWARD':
        switch (ship.r) {
          case 0:
            if (ship.x === Map1.length) return ship
            return {
              x: ship.x + 1,
              y: ship.y,
              r: ship.r
            }
          case 90:
            if (ship.y === Map1.length) return ship
            return {
              x: ship.x,
              y: ship.y + 1,
              r: ship.r
            }
          case 180:
            if (ship.x === 1) return ship
            return {
              x: ship.x - 1,
              y: ship.y,
              r: ship.r
            }
          case 270:
            if (ship.y === 1) return ship
            return {
              x: ship.x,
              y: ship.y - 1,
              r: ship.r
            }
        }
      case 'RIGHT':
        return {
          x: ship.x,
          y: ship.y,
          r: (ship.r + 90) % 360
        }
    }
  }

  const playNextTurn = () => {
    if (action.length === actionIndex) return
    const nextShip = doTurn(ship, action[actionIndex])
    setShip(nextShip)
    setActionIndex(prev => prev + 1)
  }

  const getShipInfo = () => ship

  const values = {
    getShipInfo,
    playNextTurn
  }

  return <TiqetContext.Provider value={values}>{children}</TiqetContext.Provider>;
}

export function useShipStore() {
  return useContext(TiqetContext);
}

export default ShipContextProvider;

  



  // const doAction = (action) => {
  //   const newShip = doTurn(action)
  //   setShip(newShip)
  // }