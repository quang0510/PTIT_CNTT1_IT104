import React, { useReducer } from "react";

const reducer = (state: number, action: "INCREASE"): number => {

  switch (action) {

    case "INCREASE":
      return state + 1;

    default:
      return state;
  }

};

export default function Bai1() {

  const [count, dispatch] = useReducer(reducer, 0);

  return (

    <>
      <h3>{count}</h3>
      <button onClick={() => dispatch("INCREASE")}>
        Increase
      </button>
    </>
  );
}
