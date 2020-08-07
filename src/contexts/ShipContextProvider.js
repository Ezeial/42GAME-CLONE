import React, { createContext, useContext, useState } from "react"
import { useActionStore } from './ActionContextProvider'
import Map1 from "../map/map1.json"
import useQueue from '../utils/useQueue'

const ShipContext = createContext({})

export const ShipContextProvider = ({ children }) => {

  const [ship, setShip] = useState({x: 1, y: 1, r: 0})
  const { getActions } = useActionStore()
  const {
    add,
    adds,
    increment,
    getAction,
    actions,
    displayedQueue,
    resetQueue,
    isLast
  } = useQueue(['F0'])

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
          default: return
        }
      case 'RIGHT':
        return {
          x: ship.x,
          y: ship.y,
          r: (ship.r + 90) % 360
        }
      case 'F0': {
        adds(getActions(0).map(a => a.move))
        return ship
      }
      default: return ship
    }
  }

  const playNextTurn = () => {
    if (isLast()) return
    const nextShip = doTurn(ship, getAction())
    setShip(nextShip)
    increment()
  }

  const reset = () => {
    setShip({x: 1, y: 1, r: 0})
    resetQueue()
  }

  const values = {
    ship,
    playNextTurn,
    actions,
    displayedQueue,
    reset,
    add,
    adds
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