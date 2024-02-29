import React, { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

const DebouncedInput = ({ onChange }) => {
  const [inputValue, setInputValue] = useState("");

  const debouncedValue = useDebounce(inputValue, 2000);

  useEffect(() => {
    if (onChange && typeof onChange === "function") {
      onChange(debouncedValue);
    }
  }, [debouncedValue, onChange]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="type something"
      />
    </div>
  );
};

export default DebouncedInput;
