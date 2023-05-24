import { createStore, compose } from "redux";
import rootReducer from "./reducers";

export default function configStore(initialState) {
  console.log(initialState);
  return createStore(
    rootReducer,
    initialState,
    compose(window.devToolsExtension ? window.devToolsExtension() : (f) => f)
  );
}
