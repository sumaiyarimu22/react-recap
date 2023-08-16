import React, { useReducer } from "react";
import ComponantA from "./Components/ComponantA";

// eslint-disable-next-line react-refresh/only-export-components
export const counterContext = React.createContext();

const initialState = 0;

const reducer = (state, action) => {
  //state,action
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

const App = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count:{count}</div>
      <counterContext.Provider value={{ countDispatch: dispatch }}>
        <ComponantA />
      </counterContext.Provider>
    </div>
  );
};

export default App;
