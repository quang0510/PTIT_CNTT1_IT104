import React, { useState } from "react";

export default function Bai8() {
  const [text, setText] = useState<string[]>([]);

  const handleCHange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText([...text, e.target.value]);
  }
  return(
   < >
    <p>Sở thích:[ {text.join(", ")} ]</p>

    <form onChange = {handleCHange} style={{display: "flex" , flexDirection: "column"} }>
        <input type="checkbox" value="Bơi"/>Bơi
        <input type="checkbox" value="Đá bóng"/>Đá bóng
        <input type="checkbox" value="Đánh cầu"/>Đánh cầu
        <input type="checkbox" value="Bóng rổ"/>Bóng rổ
    </form>
  </>
)}