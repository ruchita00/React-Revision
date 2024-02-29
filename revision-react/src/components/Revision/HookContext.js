import React, { useContext } from "react";
import { DemoHook } from "../../Context";

const HookContext = () => {
  const { count, setCount } = useContext(DemoHook);

  const handleAdd = () => {
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
      <button onClick={handleAdd}>+</button>
    </div>
  );
};

export default HookContext;
