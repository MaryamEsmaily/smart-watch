import React, { useEffect, useState } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";

function AnalogClock() {
  const [value, setValue] = useState(new Date());
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  const today = new Date();
  useEffect(() => {
    setDate(
      today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate()
    );
  }, [today]);

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);
    setTime(
      today.getHours() +
        ":" +
        (today.getMinutes() < 10 ? "0" : "") +
        today.getMinutes() +
        ":" +
        (today.getSeconds() < 10 ? "0" : "") +
        today.getSeconds()
    );
    return () => {
      clearInterval(interval);
    };
  }, [today]);
  return (
    <div className="d-flex flex-column align-items-center pt-5">
      <Clock value={value} className="d-block mb-2" />
      <div className="pt-4 fs-1 fw-bolder">{date}</div>
      <div className="py-2 fs-4 ">{time}</div>
    </div>
  );
}

export default AnalogClock;
//
