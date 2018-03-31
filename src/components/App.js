import React, { Component } from "react";
import { Provider } from "react-redux";
import SearchContainer from "./search/SearchContainer";

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <SearchContainer />
    </Provider>
  );
};

export default App;
