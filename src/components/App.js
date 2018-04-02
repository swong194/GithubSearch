import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import SearchContainer from "./search/SearchContainer";
import ProfileContainer from "./profile/ProfileContainer";
import FollowersContainer from "./followers/FollowersContainer";
import SavedContainer from "./saved/SavedContainer";
import "./App.css";

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <main>
          <Route path="/" component={SearchContainer} />
          <section className="main">
            <Route path="/" component={SavedContainer} />
            <section className="profile_section">
              <Route path="/profiles/:profileId" component={ProfileContainer} />
              <Route
                path="/profiles/:profileId"
                component={FollowersContainer}
              />
            </section>
          </section>
        </main>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
