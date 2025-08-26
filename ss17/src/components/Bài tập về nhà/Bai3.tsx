import React, { useState } from "react";

export default function Bai3() {
  const [color, setColor] = useState("black");

  const handleChangeColor = () => {
    setColor("red");
  };

  return (
    <div>
      <h3 style={{ color: color }}>Tiêu đề văn bản</h3>
      
      <button onClick={handleChangeColor}>Thay đổi màu</button>
    </div>
  );
}
