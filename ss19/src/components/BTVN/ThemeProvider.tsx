import React, { useState } from "react";

import "./ThemeProvider.css"

export default function ThemeProvider() {

  const [theme, setTheme] = useState<boolean>(false);

  const handleChange = () => {

    setTheme(!theme);

    if(theme === false){

      document.body.classList.add("light");
    }else {
      document.body.classList.remove("light");
    }
  }
  return (

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "10px",
      }}
    >
      <h2>My Themed App</h2>
      <button style={{alignSelf: "center"}} onClick={handleChange}>Click me</button>
      <span>Đây là phần nội dung chính của ứng dụng</span>
      <span>Theme hiện tại: {theme === true ? <b>LIGHT</b> : <b>DARK</b>}</span>
    </div>
  );
}