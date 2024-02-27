import React, { createContext, useState } from "react";

export const DemoHook = createContext();

const Context = ({ children }) => {
  const [count, setCount] = useState({
    num: 1,
    id: "abcd",
  });
  return (
    <DemoHook.Provider value={{ setCount, count }}>
      {children}
    </DemoHook.Provider>
  );
};

export default Context;
