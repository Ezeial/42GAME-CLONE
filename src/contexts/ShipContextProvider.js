import React, { createContext, useContext, useState } from "react"
import Map1 from '../map/map1.json'

const ShipContext = createContext({})

export const ShipContextProvider = ({ children }) => {

  const [ship, setShip] = useState({x: 1, y: 1, r: 0})
  
  const isOutside = (ship, len) => (ship.x === 0 || ship.x === len || ship.y === 0 || ship.y === len) 
  
  const setNextShip = (action, ship ) => {
    
    const { x, y, r } = ship

    const movesToShipPos = {
      FORWARD: {
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

    if (action in movesToShipPos) {
      if (action === 'FORWARD') return setShip(movesToShipPos[action][r])
      return setShip(movesToShipPos[action])
    }

    setShip(ship)
  }

  const areColorSame = ( color , ship, map ) => (color === Map1[ship.x][ship.y].color) // a modif 
  
  const values = {
    ship,
    map: Map1,
    setNextShip,
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