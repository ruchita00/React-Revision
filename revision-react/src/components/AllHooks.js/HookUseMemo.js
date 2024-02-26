import React, { useEffect, useMemo, useState } from "react";

const HookUseMemo = () => {
  const [count, setCount] = useState({
    num: 0,
    id: "2",
  });
  const [show, setShow] = useState(false);

  const handleAdd = () => {
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num + 1,
      };
    });
  };

  const handleChange = useMemo(() => {
    for (let i = 0; i < 100000000; i++) {}
    return count.num * 2;
  }, [count]);

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
      <button onClick={() => setShow((prev) => !prev)}>change</button>
    </div>
  );
};

export default HookUseMemo;
