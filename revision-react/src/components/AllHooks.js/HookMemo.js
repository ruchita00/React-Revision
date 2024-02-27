import React, { useMemo, useState } from "react";

const HookMemo = () => {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState({ num: 1, id: "abcd" });

  const handleChange = useMemo(() => {
    //usememo remember the previous value and for loop it lagging
    //useMemo it caches the value
    for (let i = 0; i < 1000000; i++) {}
    return count.num * 2;
  }, [count]);

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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={handleSub}>-</button>
      <span>{count.num}</span>
      {show && <span>{count.id}</span>}
      <button onClick={handleAdd}>+</button>
      <p>{handleChange}</p>
      <button onClick={() => setShow((prev) => !prev)}>changes</button>
    </div>
  );
};

export default HookMemo;
