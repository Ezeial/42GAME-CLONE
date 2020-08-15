import React from "react";
import styled from "styled-components";
import Move from "../assets/move.svg";
import Run from "../assets/run.svg";
import Forward from "../assets/forward.svg";
import Play from "../assets/play.svg";
import Pause from "../assets/pause.svg";
import ActionButton from "../subcomponents/ActionButton";
import { useShipStore } from "../contexts/ShipContextProvider";
import { Directions } from "../utils/constantes";

const Container = styled.div`
  margin: 5px;
  width: 204px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #eee;
  border-radius: 5px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.2),
    0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.1),
    0 16px 16px rgba(0, 0, 0, 0.05);
`;

const Row = styled.div`
  display: flex;
  justify-content: ${(props) => (props.alone ? "center" : "space-between")};
  width: 100%;
`;

const Svg = styled.img`
  width: 40px;
  ${(props) => props.rotate && `transform: rotate(${props.rotate}deg);`}
`;

export default function Action() {
  const { add, executeLastAction, executeAllQueue, isRunning } = useShipStore();

  return (
    <Container>
      <Row alone>
        <ActionButton keyHelper="w" onClick={() => add(Directions.TOP)}>
          <Svg src={Move} rotate={90} />
        </ActionButton>
      </Row>
      <Row>
        <ActionButton keyHelper="a" onClick={() => add(Directions.LEFT)}>
          <Svg src={Move} rotate={0} />
        </ActionButton>
        <ActionButton keyHelper="d" onClick={() => add(Directions.RIGHT)}>
          <Svg src={Move} rotate={180} />
        </ActionButton>
      </Row>
      <Row alone>
        <ActionButton keyHelper="s" onClick={() => add(Directions.BOTTOM)}>
          <Svg src={Move} rotate={270} />
        </ActionButton>
      </Row>
      <Row>
        <ActionButton keyHelper="r" onClick={() => add("FORWARD")}>
          <Svg src={Forward} />
        </ActionButton>
        <ActionButton keyHelper="r" onClick={executeLastAction}>
          <Svg src={Run} />
        </ActionButton>
      </Row>
      <Row alone>
        <ActionButton keyHelper="r" onClick={executeAllQueue}>
          <Svg src={isRunning ? Pause : Play} />
        </ActionButton>
      </Row>
    </Container>
  );
}
