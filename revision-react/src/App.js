import React from "react";
import UseStateHook from "./components/AllHooks.js/UseStateHook";
import HookUseEffect from "./components/AllHooks.js/HookUseEffect";
import HookUseMemo from "./components/AllHooks.js/HookUseMemo";
import HookUseRef from "./components/AllHooks.js/HookUseRef";
import HookUseContext from "./components/AllHooks.js/HookUseContext";
import HookUseReducer from "./components/AllHooks.js/HookUseReducer";
import useFetchAPI from "./components/AllHooks.js/useFetchAPI";
import HookContext from "./components/AllHooks.js/HookContext";

const App = () => {
  const data = useFetchAPI();

  console.log(data);
  return (
    <div>
      {/* <UseStateHook /> */}
      {/* <HookUseEffect /> */}
      {/* <HookUseMemo /> */}
      {/* <HookUseRef /> */}
      {/* <HookUseContext /> */}
      <HookContext />
      {/* <HookUseReducer /> */}
      {/* <p>
        <h1>{data.name}</h1>
        <img src={data.avatar_url} alt="url" />
      </p> */}
    </div>
  );
};

export default App;
