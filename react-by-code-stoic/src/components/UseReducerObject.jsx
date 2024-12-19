import { useReducer } from "react";

export default function UseReducerObject() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  function reducer(state, action) {
    if (action.type == "increment") {
      return { ...state, count: state.count + action.payload };
    }
    if (action.type == "decrement") {
      return { ...state, count: state.count - action.payload };
    }
  }
  return (
    <div>
      <h3>Use Object Reducer: {state.count}</h3>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Decrement
      </button>
    </div>
  );
}
