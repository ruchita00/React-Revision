import React, { useReducer } from "react";

const HookReducer = () => {
  const countReducer = (state, action) => {
    switch (action.type) {
      case "add":
        return state + 1;
      case "sub":
        return state - 1;
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(countReducer, 0);
  return (
    <div>
      <button onClick={() => dispatch({ type: "sub" })}>-</button>
      <span>{state}</span>
      <button onClick={() => dispatch({ type: "add" })}>+</button>
    </div>
  );
};

export default HookReducer;
