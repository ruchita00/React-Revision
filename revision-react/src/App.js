import React, { useState } from "react";
import HookContext from "./components/Revision/HookContext";
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (value) => {
    setSearchTerm(value);
  };
  return (
    <div>
      {/* <NewHooks /> */}
      <h1>debounced exmaple</h1>
      <p>searching for:{searchTerm}</p>
      <HookContext />
    </div>
  );
};

export default App;
