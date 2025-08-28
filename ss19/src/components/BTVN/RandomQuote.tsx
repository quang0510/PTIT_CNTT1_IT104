import React, { useState } from "react";

export default function RandomQuote() {

  const quotes: string[] = [

    "Học, học nữa, học mãi.",
    "Thất bại là mẹ thành công.",
    "Không gì là không thể.",
  ];

  const [indexQuote, setIndexQuote] = useState<number>(0);

  const randomQuote = () => {

    const indexRandom = Math.round(Math.random() * (quotes.length - 1));
    console.log(indexRandom);
    setIndexQuote(indexRandom);

  };

  return (
    <>
      <h3>
        <h4>Câu nói tryền cảm hứng hôm nay</h4>
        <div>
          <i>"{quotes[indexQuote]}"</i>
        </div>
        <button onClick={randomQuote}>Lấy câu nói mới</button>
      </h3>
    </>
  );
}