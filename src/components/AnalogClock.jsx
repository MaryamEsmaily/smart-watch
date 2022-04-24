import React, { useEffect, useState } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";

function AnalogClock() {
  const [value, setValue] = useState(new Date());
  const [date, setDate] = useState();

  const today = new Date();
  useEffect(() => {
    setDate(
      today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate()
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="d-flex flex-column align-items-center pt-5">
      <Clock value={value} className="d-block mb-2" />
      <div className="py-4 fs-1 fw-bolder">{date}</div>
    </div>
  );
}

export default AnalogClock;
//
