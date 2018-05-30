import React, { Component } from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import Home from "./components/home/";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
