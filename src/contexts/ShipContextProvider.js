import React, { createContext, useContext, useState, useEffect } from "react"
import Map1 from '../map/map1.json'

const ShipContext = createContext({})

export const ShipContextProvider = ({ children }) => {

  const [ship, setShip] = useState({x: 2, y: 2, r: 0})
  const [map, setMap] = useState(Map1)
  
  const isOutside = (ship) => Object.keys(map[ship.x - 1][ship.y - 1]).length === 0

  useEffect(() => {
    if (Object.keys(ship).length === 0) return
    if (isOutside(ship)) setShip({})
  }, [ship])

  const areColorSame = ( color, ship ) => {
    if (!color) return true
    return (color === map[ship.x - 1][ship.y - 1].color) // a modif
  }


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

    if (!(action.move in moveToShip)  || !areColorSame(action.color, ship, map)) return ship

    return moveToShip[action.move]
  }

  
  const values = {
    ship,
    map,
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