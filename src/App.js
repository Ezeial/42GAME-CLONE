import React, { useState } from "react";
import Board from "./components/board";
import Ship from "./components/ship";
import Control from "./components/action";
import styled from "styled-components";
import Map1 from "./map/map1.json";
import ShipContextProvider from "./ShipContextProvider";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Container>
      {/* j'entours toute l'app avec mon context pour qu'ils puissent tous avoir accès a mon store */}
      <ShipContextProvider>
        <Board map={Map1}>
          <Ship />
        </Board>
        <Control />
      </ShipContextProvider>
    </Container>
  );
}

export default App;
