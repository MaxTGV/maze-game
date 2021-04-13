import { DIRECTION} from './gameData';

export const limitByField = (dir, finish) => {
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