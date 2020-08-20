import React from "react"
import styled from "styled-components"
import ShipContextProvider from "./contexts/ShipContextProvider"
import ActionContainer from "./components/Containers/ActionContainer"
import ShipContainer from "./components/Containers/ShipContainer"

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
      <ShipContextProvider>   
        <ShipContainer/>
        <ActionContainer/>
      </ShipContextProvider>
    </Container>
  );
}

export default App;
