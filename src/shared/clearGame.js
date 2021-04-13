import { setAnswer, setStartField, setSteps } from "../state/actions";
import { generateStartField } from "./generateStartField";

export const clearGame = (dispatch) => {
    setTimeout(() => {
      dispatch(setAnswer(false));
      dispatch(setSteps([]));
      dispatch(setStartField(generateStartField()));
    }, 2000);
  }