import React, { useState, useEffect } from "react";

export default function Clock({timeZone,city}) {
  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      const t = new Date().toLocaleTimeString("en", {
        timeZone: timeZone,
      });
      setTime(t);
    }, 1000);
  }, []);

  return (
    <div className="Clock">
      <h1>{city} {time}</h1>
    </div>
  );
}
