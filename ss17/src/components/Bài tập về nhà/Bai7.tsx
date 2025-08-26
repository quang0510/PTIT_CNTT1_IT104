import React, { useState } from "react";

export default function Bai7() {

  const [text, setText] = useState<string>("");

  const handleCHange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }
  return(
   <>
   <p>Thành phố: {text === "--Chọn thành phố--" ? "": text}</p>

    <select defaultValue={"--Chọn thành phố--"} onChange={handleCHange}> 
        
        <option>--Chọn thành phố--</option>
        <option>Hà Nội</option>
        <option>Hồ Chí Minh</option>

    </select>
    
  </>
)}