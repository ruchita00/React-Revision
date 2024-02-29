import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import useFeatchApi from "./useFeatchApi";

const ChildComponent = React.memo(({ handleChange, setShow }) => {
  console.log("childcomponent");
  return (
    <div>
      <p>{handleChange()}</p>
      <button onClick={() => setShow((prev) => !prev)}>change</button>
    </div>
  );
});

const NewHooks = () => {
  const [count, setCount] = useState({ id: 2, num: 0 });
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

  const data = useFeatchApi();
  console.log(data);

  const CustomHook = (state, action) => {
    switch (action.type) {
      case "add":
        return state + 1;
      case "sub":
        return state - 1;

      default:
        return state;
    }
  };

  const handleChange = useCallback(() => {
    return count.num * 2;
  }, [count]);

  const [state, dispatch] = useReducer(CustomHook, 0);

  return (
    <div>
      <button onClick={() => dispatch({ type: "sub" })}>-</button>
      <span>{state}</span>

      <button onClick={() => dispatch({ type: "add" })}>+</button>
      <h1>{data.name}</h1>
      <img src={data.avatar_url} alt="photo" />
    </div>
  );
};

export default NewHooks;
