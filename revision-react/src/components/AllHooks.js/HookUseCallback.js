import React, { useCallback, useMemo, useState } from "react";

const ChildComponent = React.memo(({ handleChange, setShow }) => {
  
  console.log("child ran");
  return (
    <>
      <p>{handleChange()}</p>
      <button onClick={() => setShow((prev) => !prev)}>change</button>
    </>
  );
});

const HookUseCallback = () => {
  const [count, setCount] = useState({
    id: "abcd",
    num: 0,
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
  const handleSub = () => {
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num - 1,
      };
    });
  };
  const handleChange = useCallback(() => {
    return count.num * 2;
  }, [count]);

  return (
    <div>
      <button onClick={handleSub}>-</button>
      <span>{count.num}</span>
      {show && <p>{count.id}</p>}
      <button onClick={handleAdd}>+</button>
      <ChildComponent handleChange={handleChange} setShow={setShow} />
    </div>
  );
};

export default HookUseCallback;

//useCallback memoize whole function
