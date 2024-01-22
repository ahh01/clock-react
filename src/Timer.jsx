import React, { useState, useEffect } from "react";

export default function Timer ({ startingTime }) {
  const [timerSeconds, setTimerSeconds] = useState(startingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimerSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const minutes = Math.floor(timerSeconds / 60);
  const seconds = timerSeconds % 60;

  return (
    <div className="Timer">
      <h2>
        Timer: {minutes} min {seconds} sec
      </h2>
    </div>
  );
};




