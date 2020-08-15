import React from "react";
import { useShipStore } from "../contexts/ShipContextProvider";

export default function Core() {
  const { executeAllQueue, reset } = useShipStore();

  return (
    <div>
      <button onClick={reset}>reset</button>
      <button onClick={executeAllQueue}>Execute all queue</button>
    </div>
  );
}
