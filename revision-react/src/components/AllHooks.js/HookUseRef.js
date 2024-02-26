import React, { useEffect, useRef, useState } from "react";

const HookUseRef = () => {
  const renderRef = useRef(0);
  const [count, setCount] = useState({ id: "abcd", num: 0 });

  useEffect(() => {
    renderRef.current = renderRef.current + 1;
  });

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
      <p>{renderRef.current}</p>
    </div>
  );
};

export default HookUseRef;
