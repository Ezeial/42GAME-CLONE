import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Queue from "../utils/queue";
import { useShipStore } from "../ShipContextProvider";

// en react, je pense pas que mettre un object comme ça est une bonne idée
// cest peut être ici que ton beug vient
const q = new Queue();

function Control() {
  const { moveShip, rotateLeft, rotateRight } = useShipStore();
  return (
    <div>
      <button onClick={() => q.enqueue(rotateLeft)}>turnL</button>
      <button onClick={() => q.enqueue(rotateRight)}>turnR</button>
      <button onClick={() => q.enqueue(moveShip)}>move</button>
      <button onClick={(e) => q.dequeue()}>dq</button>
      <button onClick={(e) => q.print()}>print</button>
    </div>
  );
}

export default Control;
