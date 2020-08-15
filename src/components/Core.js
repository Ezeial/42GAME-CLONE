import React from "react";
import { useShipStore } from "../contexts/ShipContextProvider";

export default function Core() {
  const { reset } = useShipStore();

  return (
    <div>
      <button onClick={reset}>reset</button>
    </div>
  );
}
