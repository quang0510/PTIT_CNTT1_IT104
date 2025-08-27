import React, { useReducer } from 'react'

type Action = {
  type: "SET_INPUT";
  payload: string;
};

const reducer = (state: string, action: Action): string => {

  switch (action.type) {
    case "SET_INPUT":
      return action.payload;

    default:
      return state;
  }
};

export default function Bai5() {
  const [text, dispatch] = useReducer(reducer, "");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_INPUT", payload: event.target.value });
  };

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Input change..."
      />
      <h4>{text}</h4>
    </>
  );
}
