import React, { createContext, useContext, useState } from "react"
import { useActionStore } from './ActionContextProvider'
import Map1 from "../map/map1.json"
import useQueue from '../utils/useQueue'

const ShipContext = createContext({})

export const ShipContextProvider = ({ children }) => {

  const [ship, setShip] = useState({x: 1, y: 1, r: 0})
  const { getActions } = useActionStore()
  const {
    increment,
    getAction,
    actions,
    resetQueue,
    isLast,
    mapFunction
  } = useQueue(['F0'])

  const doTurn = (ship, action) => {
    switch (action) {
      case 'LEFT': 
      increment()
        return {
          x: ship.x,
          y: ship.y,
          r: (ship.r + 270) % 360
        }
      case 'FORWARD':
        switch (ship.r) {
          case 0:
            increment()
            if (ship.x === Map1.length) return ship
            return {
              x: ship.x + 1,
              y: ship.y,
              r: ship.r
            }
          case 90:
            increment()
            if (ship.y === Map1.length) return ship
            return {
              x: ship.x,
              y: ship.y + 1,
              r: ship.r
            }
          case 180:
            increment()
            if (ship.x === 1) return ship
            return {
              x: ship.x - 1,
              y: ship.y,
              r: ship.r
            }
          case 270:
            increment()
            if (ship.y === 1) return ship
            return {
              x: ship.x,
              y: ship.y - 1,
              r: ship.r
            }
          default: return
        }
      case 'RIGHT':
        increment()
        return {
          x: ship.x,
          y: ship.y,
          r: (ship.r + 90) % 360
        }
      case 'F0': {
        mapFunction(getActions(0).map(a => a.move).filter(x => !!x), actions)
        return ship
      }
      default: return ship
    }
  }

  const playNextTurn = () => {
    if (isLast()) return
    const nextShip = doTurn(ship, getAction())
    setShip(nextShip)       
  }

  const reset = () => {
    setShip({x: 1, y: 1, r: 0})
    resetQueue()
  }

  const values = {
    ship,
    playNextTurn,
    actions,
    reset,
  }

  return <ShipContext.Provider value={values}>{children}</ShipContext.Provider>;
}

export function useShipStore() {
  return useContext(ShipContext);
}

export default ShipContextProvider;

  



  // const doAction = (action) => {
  //   const newShip = doTurn(action)
  //   setShip(newShip)
  // }