import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import SearchContainer from "./search/SearchContainer";

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <SearchContainer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
