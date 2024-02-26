import React, { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState({
    num: 1,
    id: "abcd",
  });

  const handleAdd = () => {
    //synchronously updating the state
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num + 1,
      };
    });
  };

  const handleSub = () => {
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num - 1,
      };
    });
  };

  return (
    <div>
      <button onClick={handleSub}>-</button>
      <span>{count.num}</span>
      <spna>{count.id}</spna>
      <button onClick={handleAdd}>+</button>
    </div>
  );
};

export default UseStateHook;
