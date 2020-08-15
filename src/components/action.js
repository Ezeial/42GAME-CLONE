import React from "react";
import ActionBox from "../subcomponents/ActionBox";
import styled from "styled-components";

const Container = styled.div`
  margin: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: #eee;
  border-radius: 5px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.2),
    0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.1),
    0 16px 16px rgba(0, 0, 0, 0.05);
`;

export default function Action() {
  return (
    <Container>
      <ActionBox />
    </Container>
  );
}
