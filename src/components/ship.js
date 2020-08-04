import styled from "styled-components"
import Arrow from "../assets/Arrow.svg"
import { useShipStore } from "../ShipContextProvider"

const ShipSvg = styled.img`
  width: 30px;
  transform: rotate(${(props) => props.angle}deg);

  grid-column-start: ${(props) => props.x};
  grid-column-end: ${(props) => props.x + 1};
  grid-row-start: ${(props) => props.y};
  grid-row-end: ${(props) => props.y + 1};

  justify-self: center;
  align-self: center;
`;

function Ship() {
  const { getShipInfo } = useShipStore()
  const { x, y, r } = getShipInfo()
  return <ShipSvg angle={r} x={x} y={y} src={Arrow} />
}

export default Ship
