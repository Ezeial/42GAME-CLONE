import React from "react";
import { useShipStore } from "../contexts/ShipContextProvider";
import { useActionStore } from "../contexts/ActionContextProvider";

export default function Core() {
  const { playNextTurn, playTheQueue, reset } = useShipStore();

  const { resetActions } = useActionStore();

  const resetGame = () => {
    resetActions();
    reset();
  };

  return (
    <div>
      <button onClick={resetGame}>reset</button>
      <button onClick={playNextTurn}>playNextTurn</button>
      <button onClick={(e) => playTheQueue(50)}>playTheQueue</button>
    </div>
  );
}
