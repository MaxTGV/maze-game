import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import flag from "./img/flag.svg";
import { getStartField } from "./state/selectors";

const StyledStartField = styled.div`
  margin-left: 65px;
  width: 25%;
  height: 25%;
  background: no-repeat center / 100% url(${(prop) => prop.image});
  grid-column: ${(prop) => prop.column};
  grid-row: ${(prop) => prop.row};
  z-index: 10;
`;

export const StartField = () => {
  const startField = useSelector(getStartField);

  return <StyledStartField column={startField.x} row={startField.y} image={flag} />;
};
