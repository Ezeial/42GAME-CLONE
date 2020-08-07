import React from "react";
import Board from "./components/Board";
import Ship from "./components/Ship";
import Action from "./components/Action";
import styled from "styled-components";
import Map1 from "./map/map1.json";
import ShipContextProvider from "./ShipContextProvider";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: space-evenly;
  align-items: center;
  flex-direction:column;
`;

function App() {
  return (
    <Container>
      <ShipContextProvider>
        <Board map={Map1}>
          <Ship />
        </Board>
        <Action />
      </ShipContextProvider>
    </Container>
  );
}

export default App;
