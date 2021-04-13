import React from "react";
import styled from "styled-components";
import check from "./img/check.svg";
import error from "./img/error.svg";
import flag from "./img/flag.svg";
import { PLAYGROUND } from "./shared/gameData";
import { useDispatch, useSelector } from "react-redux";
import {
  getAnswer,
  getClickedField,
  getFinishField,
  getStartField,
  getSteps,
} from "./state/selectors";
import { setAnswer, setClikedField } from "./state/actions";
import { Header } from "./Header";
import { clearGame } from "./shared/clearGame";

const Playground = styled.div`
  width: max-content;
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-gap: 5px 5px;
  justify-items: center;
  background-color: white;
  margin: 0 auto;
`;

const Field = styled.div`
  width: 100%;
  background-color: #e1e1ed;
  background-image: url(${(prop) => prop.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 30%;
  grid-column: ${(prop) => prop.column};
  grid-row: ${(prop) => prop.row};
  box-shadow: 0px 8px 16px #8181b1;
  border-radius: 16px;
`;

const StartField = styled.div`
  margin-left: 65px;
  width: 25%;
  height: 25%;
  background: no-repeat center / 100% url(${(prop) => prop.image});
  grid-column: ${(prop) => prop.column};
  grid-row: ${(prop) => prop.row};
  z-index: 10;
`;

const DirectionPlayground = styled.div`
  width: 310px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 10px auto;

  & div {
    margin-top: 10px;
    font-size: 18px;
    font-weight: 600;
    color: #4b4b7c;
    padding: 3px;
    border: 1px solid #4b4b7c;
    border-radius: 5px;
  }
`;

export const App = () => {
  const dispatch = useDispatch();
  const startField = useSelector(getStartField);
  const finishField = useSelector(getFinishField);
  const steps = useSelector(getSteps);
  const answer = useSelector(getAnswer);
  const clickedField = useSelector(getClickedField);

  const handleClick = (e) => {
    const id = PLAYGROUND.filter((field) => field.id === +e.target.id);
    dispatch(setClikedField(id[0]));
    dispatch(setAnswer(true));
    clearGame(dispatch);
  };

  return (
    <>
      <Header />
      <Playground>
        {PLAYGROUND.map((field) => (
          <Field
            onClick={(e) => handleClick(e)}
            id={field.id}
            key={field.id}
            column={field.x}
            row={field.y}
          />
        ))}
        <StartField column={startField.x} row={startField.y} image={flag} />
        {answer && (
          <Field
            image={error}
            column={clickedField.x}
            color="#E3170A"
            row={clickedField.y}
          />
        )}
        {answer && (
          <Field
            column={finishField.x}
            row={finishField.y}
            color="#00A896"
            image={check}
          />
        )}
      </Playground>
      <DirectionPlayground>
        {steps && steps.map((step, i) => <div key={i}>{step} </div>)}
      </DirectionPlayground>
    </>
  );
};
