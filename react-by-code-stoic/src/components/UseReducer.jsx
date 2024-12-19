import { useReducer, useState } from "react";

export default function UseReducer() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, 0);
  function reducer(state, action) {
    if (action.type == "increment") {
      return state + action.payload;
    }
    if (action.type == "decrement") {
      return state - action.payload;
    }
  }
  return (
    <div>
      {/* // user state example */}
      <h3>Use State: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      {/* // user reducer example */}
      <h3>Use Reducer: {state}</h3>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Decrement
      </button>
    </div>
  );
}
