import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

import configureStore from "./store/configureStore";

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  ReactDOM.render(<App store={store} />, document.getElementById("root"));
});
registerServiceWorker();
