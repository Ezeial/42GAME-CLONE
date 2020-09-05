import React, { createContext, useContext, useState } from "react"
import Map1 from '../map/map1.json'

const ShipContext = createContext({})

export const ShipContextProvider = ({ children }) => {

  const [ship, setShip] = useState({x: 1, y: 1, r: 0})
  
  const areColorSame = ( color, ship, map ) => {
    if (!color) return true
    return (color === map[ship.x - 1][ship.y - 1].color) // a modif
  }


  const isOutside = (ship) => (ship.x < 1 || ship.x > 7 || ship.y < 1 || ship.y > 7) // a modif

  const getNextShip = (action, ship) => {
    const { x, y, r } = ship

    const forwardToShip = {
      0: {
        x: x + 1,
        y: y,
        r: r
      },
      90: {
        x: x,
        y: y + 1,
        r: r
      },
      180: {
        x: x - 1,
        y: y,
        r: r
      },
      270: {
        x: x,
        y: y - 1,
        r: r
      }
    }

    const moveToShip = {
      FORWARD: {
        ...forwardToShip[r]
      },
      LEFT: {
        x: x,
        y: y,
        r: (r + 270) % 360
      }, 
      RIGHT: {
        x: x,
        y: y,
        r: (r + 90) % 360
      }
    }

    if (!(action.move in moveToShip) || isOutside(moveToShip[action.move]) || !areColorSame(action.color, ship, Map1)) return ship

    return moveToShip[action.move]
  }

  
  const values = {
    ship,
    map: Map1,
    getNextShip,
    setShip,
    areColorSame
  }

  return <ShipContext.Provider value={values}>{children}</ShipContext.Provider>

}

export function useShipStore() {
  return useContext(ShipContext)
}

export default ShipContextProvider

  



  // const doAction = (action) => {
  //   const newShip = doTurn(action)
  //   setShip(newShip)
  // }