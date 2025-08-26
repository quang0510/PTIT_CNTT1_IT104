import React, { useState } from "react";

export default function Bai6() {

  const [text, setText] = useState<number>(0);

  const handleCHange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value.length);
  }

  return(
    <>
    <textarea onChange={handleCHange}></textarea>
    <p>số kí tự : {text}</p>
    </>
)}