import React, { createContext, useContext, useState } from "react";
import Map1 from "../map/map1.json";
import useQueue from "../utils/useQueue";
import { Directions, InitialShip } from "../utils/constantes";

const ShipContext = createContext({});

export const ShipContextProvider = ({ children }) => {
  const [ship, setShip] = useState(InitialShip);

  const {
    actions,
    resetQueue,
    executeLastAction,
    executeAllQueue,
    add,
    isRunning,
  } = useQueue(executeAction);

  function executeAction(action) {
    if (action === "FORWARD") {
      moovingForward();
      return;
    }

    updateDirection(action);
    return;
  }

  function moovingForward() {
    setShip((lastShip) => {
      const { direction, x, y } = lastShip;
      switch (direction) {
        case Directions.RIGHT:
          if (x === Map1.length) return;
          return {
            ...lastShip,
            x: x + 1,
          };
        case Directions.TOP:
          if (y === 1) return;
          return {
            ...lastShip,
            y: y - 1,
          };
        case Directions.LEFT:
          if (x === 1) return;
          return {
            ...lastShip,
            x: x - 1,
          };
        case Directions.BOTTOM:
          if (y === Map1.length) return;
          return {
            ...lastShip,
            y: y + 1,
          };
        default:
          return;
      }
    });
  }

  function updateDirection(direction) {
    if (!direction) return;
    setShip((lastShip) => ({ ...lastShip, direction: direction }));
  }

  const reset = () => {
    setShip(InitialShip);
    resetQueue();
  };

  const values = {
    ship,
    actions,
    reset,
    add,
    executeAllQueue,
    executeLastAction,
    isRunning,
  };

  return <ShipContext.Provider value={values}>{children}</ShipContext.Provider>;
};

export function useShipStore() {
  return useContext(ShipContext);
}

export default ShipContextProvider;
