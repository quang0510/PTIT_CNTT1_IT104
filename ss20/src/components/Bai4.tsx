import React, { useState } from "react";
import "./Bai4.css"

export default function Bai4() {

  const [inputValue, setInputValue] = useState<string>("");
  const [inputTitle, setInputTitle] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    setInputValue(e.target.value);
    setInputTitle(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();
    document.title = inputTitle;
    setInputValue("");

  };


  return (

    <div className="bai4">

      <h2>Chào mừng đến với trang của chúng tôi</h2>

      <form onSubmit={handleSubmit} action="">
        <input
          value={inputValue}
          onChange={handleChange}
          type="text"
          placeholder="Nhập..."
        />
      </form>
      <p>Tiêu đề trang sẽ thay đổi khi bạn nhập vào trường trên</p>
    </div>
  );
}