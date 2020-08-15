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
  ${(props) => props.mt && `margin-top: ${props.mt}px;`}
`;

const Svg = styled.img`
  width: 40px;
  ${(props) => props.rotate && `transform: rotate(${props.rotate}deg);`}
`;

export default function Action() {
  const {
    add,
    executeLastAction,
    executeAllQueue,
    isRunning,
    stopHandler,
  } = useShipStore();

  function handleRunning() {
    if (isRunning) {
      stopHandler();
    } else {
      executeAllQueue();
    }
  }

  window.addEventListener("keypress", (event) => actionsByKey(event.key));

  function actionsByKey(key) {
    console.log("dddd");
    switch (key) {
      case "w":
        add(Directions.TOP);
        break;
      case "a":
        add(Directions.LEFT);
        break;
      case "s":
        add(Directions.BOTTOM);
        break;
      case "d":
        add(Directions.RIGHT);
        break;
      case "f":
        add("FORWARD");
        break;
      default:
        return;
    }
  }

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
        <ActionButton keyHelper="s" onClick={() => add(Directions.BOTTOM)}>
          <Svg src={Move} rotate={270} />
        </ActionButton>
        <ActionButton keyHelper="d" onClick={() => add(Directions.RIGHT)}>
          <Svg src={Move} rotate={180} />
        </ActionButton>
      </Row>
      <Row mt={16}>
        <ActionButton keyHelper="f" onClick={() => add("FORWARD")}>
          <Svg src={Forward} />
        </ActionButton>
        <ActionButton onClick={handleRunning}>
          <Svg src={isRunning ? Pause : Play} />
        </ActionButton>
        <ActionButton onClick={executeLastAction}>
          <Svg src={Run} />
        </ActionButton>
      </Row>
    </Container>
  );
}
