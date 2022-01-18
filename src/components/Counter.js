import { useState } from "react";
import "./styles.css";
import { useDispatch } from "react-redux";

const Counter = () => {
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const countHandler = (e) => {
    if (e.target.name === "Increment") {
      setCount(count + 1);
      dispatch({ type: "inc" });
    }

    if (e.target.name === "Decrement") {
      setCount(count - 1);
      dispatch({ type: "dec" });
    }
  };

  return (
    <div className="counter">
      <button name="Decrement" onClick={countHandler}>
        Decrement
      </button>
      <h2>{count}</h2>
      <button name="Increment" onClick={countHandler}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
