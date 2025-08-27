import React, { useState, useCallback } from "react";

export default function Bai4() {
  const [color, setColor] = useState<string>("");

  const handleChangeColor = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  }, []);

  return (
    <div >
      <div>
        <label>Màu người dùng chọn:</label><br />
        <input 
          type="color" 
          value={color} 
          onChange={handleChangeColor} 
        />
      </div>

      <div>
        <label>Màu hiển thị:</label><br />
        <div 
          style={{
            width: "150px",
            height: "80px",
            border: "1px solid #ccc",
            backgroundColor: color || "white"
          }}
        />
      </div>
    </div>
  );
}
