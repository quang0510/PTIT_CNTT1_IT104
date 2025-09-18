import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../redux/stores/store";


export default function Counter() {
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
}
