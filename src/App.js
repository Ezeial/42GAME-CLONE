import React from "react";
import styled from "styled-components";
import Map1 from "./map/map1.json";
import ShipContextProvider from "./contexts/ShipContextProvider";
import ActionContextProvider from "./contexts/ActionContextProvider";
import Ship from "./components/Ship";
import Core from "./components/Core";
import Queue from "./components/Queue";
import Action from "./components/Action";
import Board from "./components/Board";

const Container = styled.div`
  overflow: hidden;
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function App() {
  return (
    <Container>
      <ActionContextProvider>
        <ShipContextProvider>
          <Board map={Map1}>
            <Ship />
          </Board>
          <Action />
          <Core />
          <Queue />
        </ShipContextProvider>
      </ActionContextProvider>
    </Container>
  );
}

export default App;
