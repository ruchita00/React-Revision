import React, { useContext } from "react";
import { DemoHook } from "../../Context";

const HookUseContext = () => {
  const { count, setCount } = useContext(DemoHook);
  console.log(count);

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
export default HookUseContext;
