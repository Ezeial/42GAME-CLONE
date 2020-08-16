import React from "react";
// import Board from "./components/Board";
// import Ship from "./components/Ship";
// import Action from "./components/Action";
// import Core from "./components/Core"
// import Queue fr  om "./components/Queue"
import styled from "styled-components";
// import Map1 from "./map/map1.json";
// import ShipContextProvider from "./contexts/ShipContextProvider";
// import ActionContextProvider from "./contexts/ActionContextProvider";
import ActionContainer from "./Component's/Containers/ActionContainer"
import ShipContainer from "./Component's/Containers/ShipContainer"

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction:column;
`;

function App() {
  return (
    <Container>
      {/* <ActionContextProvider>
        <ShipContextProvider>
          <Board map={Map1}>
            <Ship />
          </Board>
          <Action />
          <Core/>
          <Queue/>
        </ShipContextProvider>
      </ActionContextProvider> */}
      <ShipContainer/>
      <ActionContainer/>
    </Container>
  );
}

export default App;
