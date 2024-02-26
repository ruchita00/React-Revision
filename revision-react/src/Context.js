import React, { createContext, useState } from "react";
export const DemoHook = createContext();

const Context = ({ children }) => {
  const [count, setCount] = useState({
    id: "abcd",
    num: 1,
  });
  return (
    <DemoHook.Provider value={{ count, setCount }}>
      {children}
    </DemoHook.Provider>
  );
};

export default Context;
