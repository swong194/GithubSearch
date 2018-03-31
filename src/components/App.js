import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import SearchContainer from "./search/SearchContainer";
import ProfileContainer from "./profile/ProfileContainer";

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <main>
          <Route path="/" component={SearchContainer} />
          <Route path="/profiles/:profileId" component={ProfileContainer} />
        </main>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
