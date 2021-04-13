import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { generateRandomSteps } from "./shared/generateRandomSteps";
import { getStartField, getSteps } from "./state/selectors";
import play from "./img/play.svg";
import repeat from "./img/sync.svg";

const StyledHeader = styled.div`
  width: 310px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;

  & h1 {
    color: #4b4b7c;
  }
`;

const StartButton = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  cursor: pointer;
  background: no-repeat center / 80% url(${(prop) => prop.image});
  outline: none;
`;

export const Header = () => {
  const dispatch = useDispatch();
  const startField = useSelector(getStartField);
  const steps = useSelector(getSteps);

  return (
    <StyledHeader>
      <h1>Maze Game</h1>
      {steps.length === 0 ? (
        <StartButton
          image={play}
          onClick={() => generateRandomSteps(startField, dispatch)}
        />
      ) : (
        <StartButton
          image={repeat}
          onClick={() => generateRandomSteps(startField, dispatch)}
        />
      )}
    </StyledHeader>
  );
};
