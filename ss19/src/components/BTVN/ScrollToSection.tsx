import React, { useRef } from "react";


export default function ScrollInToView() {

  const contentRef = useRef<HTMLDivElement | null>(null);

  const navToContent = () => {

    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div >
      <div className="nav">

        <h1>Cuộn để tới nội dung</h1>
        <button onClick={navToContent}>Đi tới phần nội dung</button>

      </div>
      <div className="main-content" ref={contentRef}>
        <p>
        Đất nước như một bản trường ca bất tận, nơi từng dòng sông, ngọn núi, cánh đồng và con người cùng dệt nên giai điệu kiêu hãnh của lịch sử và khát vọng tương lai
        </p>
      </div>
    </div>
  );
}