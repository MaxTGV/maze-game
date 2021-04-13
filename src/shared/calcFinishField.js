import { DIRECTION} from './gameData';

export const calcFinishField = (i, finish) => {
    let step = Object.keys(DIRECTION);
    return {
      x: finish.x + DIRECTION[step[i]].x,
      y: finish.y + DIRECTION[step[i]].y,
    };
  };