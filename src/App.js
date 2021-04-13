import React, { useState } from "react";
import styled from "styled-components";
import check from "./img/check.svg";
import error from "./img/error.svg";
import flag from "./img/flag.svg";
import play from "./img/play.svg";
import repeat from "./img/sync.svg";

const Header = styled.div`
  width: 310px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;

  & h1 {
    color: #4b4b7c;
  }
`;

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

const StartButton = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  cursor: pointer;
  background: no-repeat center / 80% url(${(prop) => prop.image});
  outline: none;
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

const FIELD_SIZE = 3;

const DIRECTION = {
  TOP: { x: 0, y: -1 },
  BOTTOM: { x: 0, y: 1 },
  LEFT: { x: -1, y: 0 },
  RIGHT: { x: 1, y: 0 },
};

const data = {
  fieldSize: 3,
  playground: [
    { id: 1, x: 1, y: 1 },
    { id: 2, x: 2, y: 1 },
    { id: 3, x: 3, y: 1 },
    { id: 4, x: 1, y: 2 },
    { id: 5, x: 2, y: 2 },
    { id: 6, x: 3, y: 2 },
    { id: 7, x: 1, y: 3 },
    { id: 8, x: 2, y: 3 },
    { id: 9, x: 3, y: 3 },
  ],
  startField: {
    x: Math.ceil(Math.random() * FIELD_SIZE),
    y: Math.ceil(Math.random() * FIELD_SIZE),
  },
};

export const App = () => {
  const [steps, setSteps] = useState([]);
  const [startField, setStartField] = useState(data.startField);
  const [finishField, setFinishField] = useState(data.startField);
  const [answer, setAnswer] = useState(false);
  const [clickedField, setClickedField] = useState();

  const calcFinishField = (i, finish) => {
    let step = Object.keys(DIRECTION);
    return {
      x: finish.x + DIRECTION[step[i]].x,
      y: finish.y + DIRECTION[step[i]].y,
    };
  };

  const limitByField = (dir, finish) => {
    let step = Object.keys(DIRECTION);
    if (
      finish.x + DIRECTION[step[dir]].x < 1 ||
      finish.y + DIRECTION[step[dir]].y < 1
    ) {
      return dir + 1;
    } else if (
      finish.x + DIRECTION[step[dir]].x > 3 ||
      finish.y + DIRECTION[step[dir]].y > 3
    ) {
      return dir - 1;
    }
    return dir;
  };

  const generateStartField = () => {
    return {
      x: Math.ceil(Math.random() * FIELD_SIZE),
      y: Math.ceil(Math.random() * FIELD_SIZE),
    };
  };

  const generateRandomSteps = () => {
    let step = Object.keys(DIRECTION);
    let arr = [],
      finish = startField;
    for (let i = 0; i < 10; i++) {
      let randomStep = limitByField(
        Math.ceil(Math.random() * FIELD_SIZE),
        finish
      );
      finish = calcFinishField(randomStep, finish);
      arr.push(step[randomStep]);
    }
    setSteps([...arr]);
    setFinishField(finish);
  };

  const handleClick = (e) => {
    const id = data.playground.filter((field) => field.id === +e.target.id);
    setClickedField(id[0]);
    setAnswer(true);

    setTimeout(() => {
      setAnswer(false);
      setSteps([]);
      setStartField(generateStartField());
    }, 2000);
  };

  return (
    <>
      <Header>
        <h1>Maze Game</h1>
        {steps.length === 0 ? (
          <StartButton image={play} onClick={() => generateRandomSteps()} />
        ) : (
          <StartButton image={repeat} onClick={() => generateRandomSteps()} />
        )}
      </Header>
      <Playground>
        {data.playground.map((field) => (
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
