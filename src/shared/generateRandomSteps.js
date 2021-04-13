import { DIRECTION, FIELD_SIZE} from './gameData';
import {calcFinishField} from './calcFinishField';
import { limitByField } from './limitByField';
import { setFinishField, setSteps } from '../state/actions';
 

export const generateRandomSteps = (startField, dispatch) => {
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
    dispatch(setSteps([...arr]));
    dispatch(setFinishField(finish));
  };
