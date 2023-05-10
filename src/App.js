import React from "react";
import { Provider } from "react-redux";
import store from "./reduxContainer/Store";
import BookContainer from "./reduxContainer/BookContainer";
function App() {
  return (
    <>
      <Provider store={store}>
        <div>
          <h1>Learn redux</h1>
          <BookContainer />
        </div>
      </Provider>
    </>
  );
}
export default App;
