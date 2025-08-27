import React, { useReducer } from "react";

type Gender = "Nam" | "Nữ" | "Khác";

type State = {

  selectedGender: Gender;
};

type Action = {

  type: "CHANGE_GENDER";
  payload: Gender;

};

const initState: State = {
  selectedGender: "Nam",
};

const reducer = (state: State, action: Action): State => {

  switch (action.type) {

    case "CHANGE_GENDER":
      return { ...state, selectedGender: action.payload };
    default:
      return state;
  }
};

export default function Bai6() {

  const [state, dispatch] = useReducer(reducer, initState);

  const genders: Gender[] = ["Nam", "Nữ", "Khác"];

  const handleGenderChange = (gender: Gender) => {
    dispatch({ type: "CHANGE_GENDER", payload: gender });
  };

  return (
    <>

      {genders.map((gender) => (

        <div key={gender}>

          <input
            type="radio"
            name="gender"
            value={gender}
            checked={state.selectedGender === gender}
            onChange={() => handleGenderChange(gender)}
          />
          <label>{gender}</label>
        </div>
      ))}
      <br />

      <p>Selected gender: {state.selectedGender}</p>
    </>
  );
}
