import React from "react";
import { useShipStore } from "../contexts/ShipContextProvider";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0px;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgb(240, 240, 240);
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #f7ca18;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.2),
    0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.1),
    0 16px 16px rgba(0, 0, 0, 0.05);
`;

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Action = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${(props) => (props.bg ? props.bg : "#FFF")};
  border-radius: 5px;
  padding: 5px;
  margin: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => (props.color ? props.color : "#222")};
  font-size: 30px;
  font-weight: bold;

  ${(props) => props.first && `border: solid 2px #f7ca18; width:70px; height: 70px;`}
  cursor: pointer;
  outline: none;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.2),
    0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.1),
    0 16px 16px rgba(0, 0, 0, 0.05);
`;

export default function Queue() {
  const { actions } = useShipStore();

  return (
    <Container>
      <Line />
      <ActionsContainer>
        {actions.map((action, i) => (
          <Action first={i === 0} key={i}>
            {action === "FORWARD" ? "FO" : action}
          </Action>
        ))}
      </ActionsContainer>
      <Line />
    </Container>
  );
}
