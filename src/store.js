import { compose, createStore } from "redux";
// import {applyMiddleware } from "redux";
import rootReducer from "./reducers";
import Registrar from "./registerServiceWorker.js";

if ("serviceWorker" in navigator) {
  Registrar();
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  accounts: [38592838, 38592838, 38592838, 38592838]
};

let store = createStore(
  rootReducer,
  initialState,
  //para tirar o redux dev tools bota só compose abaixo
  composeEnhancers()
  // applyMiddleware(socketIoMiddleware),
  //   autoRehydrate()
);

export default store;
