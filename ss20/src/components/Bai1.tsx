import React, { useState } from "react";
import "./Bai1.css"

export default function Bai1() {

  const [showNotice, setShowNotice] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {

    if (!e.target.value) {
      setShowNotice(false);
      return;
    }
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputValue) {

      if (inputValue.length >= 5) {

        setShowNotice(true);
        
      } else {
        setShowNotice(false);
      }
    }
  };

  return (
    <div className="bai1">
      <h3>Kiểm tra chuỗi input nhập vào</h3>
      <form onSubmit={handleSubmit} action="">
        <input placeholder="Nhập vào đây" onChange={handleInput} type="text" />
      </form>
      {showNotice ? (
        <>
          <div className="notice">Chuỗi nhập vào dài hơn 5 ký tự</div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}