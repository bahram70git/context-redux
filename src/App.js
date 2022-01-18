import { Provider } from "react-redux";
import myStore from "./components/redux/myStore";
import Counter from "./components/Counter";
import Scripts from "./components/Scripts";
import Outputs from "./components/Outputs";
import React from "react";

function App() {
  return (
    <Provider store={myStore}>
      <Counter />
      <Scripts />
      <Outputs />
    </Provider>
  );
}

export default App;
