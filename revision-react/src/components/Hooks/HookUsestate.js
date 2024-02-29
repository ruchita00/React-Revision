import React, { useCallback, useMemo, useState } from "react";

const HookUsestate = () => {
  const [count, setCount] = useState({ id: "1", num: 0 });
  const [show, setShow] = useState(false);

  const handleIncrement = () => {
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num + 1,
      };
    });
  };

  const handleDecrement = () => {
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num - 1,
      };
    });
  };

  const handleChange = useMemo(() => {
    for (let i = 0; i < 1000000; i++) {}
    return count.num * 2;
  }, [count]);

  //useSTATE
  //useEffect
  //useMemo
  //useCallback
  //useReducer
  //useRef
  //

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={handleDecrement}>-</button>
      <span>{count.num}</span>
      {show && <span>{count.id}</span>}
      <button onClick={handleIncrement}>+</button>
      {/* <p>{handleChange}</p>
      <button onClick={() => setShow((prev) => !prev)}>change</button> */}
    </div>
  );
};

export default HookUsestate;
