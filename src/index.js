import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//import provider to access the store in root folder.
import { Provider } from "react-redux";
import { store } from "./state/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
