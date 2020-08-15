import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 64px;
  height: 64px;
  margin: 4px;
  border-radius: 4px;
  border: 1px solid #000000;
  background-color: #ffffff;
  transition: all ease-in 0.1s;
  cursor: pointer;
  ${(props) => props.hasKey && "position: relative;"}
  &:hover {
    box-shadow: #00000050 0 0 0 1px;
  }
  &:active {
    background-color: #eeeeee;
  }
`;

const KeyHelper = styled.span`
  position: absolute;
  bottom: 4px;
  left: 4px;
`;

export default function ActionButton({ children, keyHelper, onClick = () => {} }) {
  return (
    <Button hasKey={Boolean(keyHelper)} onClick={onClick}>
      {children}
      {keyHelper && <KeyHelper>{keyHelper}</KeyHelper>}
    </Button>
  );
}
