import React, { useEffect, useState } from "react";
import "./Bai5.css"

export default function Bai5() {

  const [timerId, setTimerId] = useState<number | undefined>(undefined);
  const [timer, setTimer] = useState<number>(0);

  useEffect(() => {

    setTimerId(
      setInterval(() => {

        setTimer((prev) => prev + 1);
      }, 1000)
    );
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (

    <div className="bai5">
      <h2>Timer: {timer}</h2>
    </div>
  );
}