import { FIELD_SIZE} from './gameData';

export const generateStartField = () => {
    return {
      x: Math.ceil(Math.random() * FIELD_SIZE),
      y: Math.ceil(Math.random() * FIELD_SIZE),
    };
  };