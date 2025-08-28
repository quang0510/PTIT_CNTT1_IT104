import React, { useEffect, useRef, useState } from "react";

export default function RenderCounter() {

  const [inputValue, setInputValue] = useState<string>("");

  const renderCount = useRef<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    setInputValue(e.target.value);

  };

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {

    renderCount.current = renderCount.current + 1;
  });

  useEffect(() => {

    inputRef.current?.focus();
  }, []);

  return (
    <>

      <h2>Render Counter</h2>
      <div>
        Input:{" \t"}
        <input
          ref={inputRef}
          value={inputValue}
          onChange={handleChange}
          type="text"
        />
      </div>
      <p>Component đã render: {renderCount.current} lần </p>
    </>
  );
}