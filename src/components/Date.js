import { useEffect, useRef, useState } from "react";
import "../styles/date.css";

const Date = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [date, setDate] = useState();
  const checkDateRef = useRef();

  useEffect(() => {
    let time = new window.Date();
    setDate(
      `${monthNames[time.getMonth()]} ${time.getDate()}, ${time.getFullYear()}`
    );

    let timer = setInterval(() => {
      checkDateRef.current = `${
        monthNames[time.getMonth()]
      } ${time.getDate()}, ${time.getFullYear()}`;

      if (date !== checkDateRef.current) setDate(checkDateRef.current);
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <div>
      <h1 className="date">{date}</h1>
    </div>
  );
};

export default Date;
