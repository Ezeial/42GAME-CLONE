import React, { createContext, useContext, useState } from "react";
import Map1 from "./map/map1.json";

const TiqetContext = createContext({});

export const ShipContextProvider = ({ children }) => {
  const [shipX, setShipX] = useState(1);
  const [shipY, setShipY] = useState(1);
  const [shipRotation, setShipRoation] = useState(0);

  const getShipInfo = () => ({ x: shipX, y: shipY, rotation: shipRotation });

  const moveShip = function () {
    switch (shipRotation) {
      case 0:
        if (shipX === Map1.length) return;
        setShipX((prev) => prev + 1);
        break;
      case 90:
        if (shipY === Map1.length) return;
        setShipY((prev) => prev + 1);
        break;
      case 180:
        if (shipX === 1) return;
        setShipX((prev) => prev - 1);
        break;
      case 270:
        if (shipY === 1) return;
        setShipY((prev) => prev - 1);
        break;
    }
  };

  const rotateRight = function () {
    setShipRoation((prev) => (prev + 90) % 360);
  };

  const rotateLeft = function () {
    setShipRoation((prev) => (prev + 270) % 360);
  };

  // les functions / valeurs que renvoie notre store
  const values = {
    moveShip,
    getShipInfo,
    rotateLeft,
    rotateRight,
  };

  return <TiqetContext.Provider value={values}>{children}</TiqetContext.Provider>;
};

export function useShipStore() {
  return useContext(TiqetContext);
}

export default ShipContextProvider;
