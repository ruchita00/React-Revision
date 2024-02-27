import React, { useCallback, useState } from "react";

const ChildComponent = React.memo(({ handleChange, setShow }) => {
  console.log("child");
  return (
    <>
      <p>{handleChange()}</p>
      <button onClick={() => setShow((prev) => !prev)}>Changes</button>
    </>
  );
});

const HookCallback = () => {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState({
    id: "abcd",
    num: 1,
  });

  const handleAdd = () => {
    setCount((prev) => {
      return {
        ...prev,
        num: prev + 1,
      };
    });
  };
  const handleSub = () => {
    setCount((prev) => {
      return {
        ...prev,
        num: prev + 1,
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
      {show && <span>{count.id}</span>}
      <button onClick={handleAdd}>+</button>
      <ChildComponent setShow={setShow} handleChange={handleChange} />
    </div>
  );
};

export default HookCallback;
