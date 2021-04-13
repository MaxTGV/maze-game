export const startFieldReducer = (state = { x: 2, y: 2 }, action) => {
  switch (action.type) {
    case "set_startField": {
      return action.payload;
    }
    default:
      return state;
  }
};

export const finishFieldReducer = (state = { x: 2, y: 2 }, action) => {
  switch (action.type) {
    case "set_finishField": {
      return action.payload;
    }
    default:
      return state;
  }
};

export const stepsReducer = (state = [], action) => {
  switch (action.type) {
    case "set_steps": {
      return action.payload;
    }
    default:
      return state;
  }
};

export const answerReducer = (state = false, action) => {
  switch (action.type) {
    case "set_answer": {
      return action.payload;
    }
    default:
      return state;
  }
};

export const clickedFieldReducer = (state = null, action) => {
  switch (action.type) {
    case "set_clickedField": {
      return action.payload;
    }
    default:
      return state;
  }
};
