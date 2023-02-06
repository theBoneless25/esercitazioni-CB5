import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0";
import styles from "./styles.module.scss";
import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className={styles.container}>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </div>
  );
};

export default Counter;
