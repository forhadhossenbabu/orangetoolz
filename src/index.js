import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./containers/App";
import localforage from "localforage";
import configStore from "./redux";
import "./stylesheets/main.css";

const localStore = localforage.createInstance({
  name: "kanbantoolz",
});

function onReset() {
  localStore.clear();
  window.location.reload();
}

const storePromise = localStore
  .getItem("appState")
  .then(
    (value) => value || undefined,
    (err) => {
      console.error(err);
      return undefined;
    }
  )
  .then(
    (value) => configStore(value),
    (err) => {
      console.error(err);
      return configStore();
    }
  )
  .then((store) => {
    store.subscribe(() => localStore.setItem("appState", store.getState()));
    return store; // Return the store object
  })
  .catch((err) => {
    console.log(err);
  });

storePromise.then((store) => {
  ReactDOM.render(
    <Provider store={store}>
      <App onReset={onReset} />
    </Provider>,
    document.getElementById("kanbantoolz")
  );
});
