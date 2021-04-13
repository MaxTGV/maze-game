import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {
  startFieldReducer,
  finishFieldReducer,
  stepsReducer,
  clickedFieldReducer,
  answerReducer,
} from "./state/reducer";

const reducer = {
  startField: startFieldReducer,
  finishField: finishFieldReducer,
  steps: stepsReducer,
  clickedField: clickedFieldReducer,
  answer: answerReducer,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
