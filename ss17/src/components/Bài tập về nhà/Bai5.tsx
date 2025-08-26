import React, { useState } from "react";

export default function Bai5() {

  const [text, setText] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  return(
    <>
    <input onChange={handleChange}/>
    <p>{text}</p>
    </>
)}