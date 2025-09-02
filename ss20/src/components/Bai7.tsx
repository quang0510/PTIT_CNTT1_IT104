import React, { useReducer } from "react";
import "./Bai7.css"

const reducer = (state: number, action: { type: string }) => {

  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      return state;
  }
};

export default function Bai7() {
  const [state, dispatch] = useReducer(reducer, 0);

  const handleIncrease = () => {
    dispatch({ type: "INCREASE" });
  };
  const handleDecrease = () => {
    dispatch({ type: "DECREASE" });
  };

  return (

    <div className="bai7">
      <h1>Số đếm: {state}</h1>
      <button onClick={handleIncrease} type="button">
        Tăng
      </button>
      <button onClick={handleDecrease} type="button">
        Giảm
      </button>
    </div>
  );
}