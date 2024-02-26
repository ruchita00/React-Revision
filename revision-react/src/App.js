import React from "react";
import UseStateHook from "./components/AllHooks.js/UseStateHook";
import HookUseEffect from "./components/AllHooks.js/HookUseEffect";
import HookUseMemo from "./components/AllHooks.js/HookUseMemo";
import HookUseRef from "./components/AllHooks.js/HookUseRef";
import HookUseContext from "./components/AllHooks.js/HookUseContext";

const App = () => {
  return (
    <div>
      {/* <UseStateHook /> */}
      {/* <HookUseEffect /> */}
      {/* <HookUseMemo /> */}
      {/* <HookUseRef /> */}
      <HookUseContext />
    </div>
  );
};

export default App;
