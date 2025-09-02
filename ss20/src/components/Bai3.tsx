import React, { useEffect } from "react";
import "./Bai3.css"

export default function Bai3() {
  useEffect(() => {
    console.log("Component đã được render lần đầu");
  });

  return (
    <div className="bai3">
      <h1>Chào mừng đến với ứng dụng của chúng tôi</h1>
    </div>
  );
}