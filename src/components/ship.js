import React from "react";
import styled from "styled-components";
import Arrow from "../assets/arrow.svg";
import { useShipStore } from "../contexts/ShipContextProvider";

const ShipImg = styled.img`
  width: 30px;
  transform: rotate(${(props) => props.angle}deg);

  grid-column-start: ${(props) => props.x};
  grid-column-end: ${(props) => props.x + 1};
  grid-row-start: ${(props) => props.y};
  grid-row-end: ${(props) => props.y + 1};

  justify-self: center;
  align-self: center;
`;

export default function Ship() {
  const { ship } = useShipStore();
  const { x, y, direction } = ship;
  return <ShipImg angle={direction} x={x} y={y} src={Arrow} />;
}
