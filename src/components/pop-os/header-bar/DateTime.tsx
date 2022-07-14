import { useEffect, useState } from "react";

const DateTime = () => {
  const [date, setDate] = useState(new Date());
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  });
  return (
    <div className="flex gap-2 text-gray-300 text-sm items-center font-extrabold hover:bg-gray-200 hover:bg-opacity-20 rounded-full px-2 cursor-pointer">
      <p>{monthNames[date.getMonth()] + " " + date.getDate()}</p>
      <p>{date.getHours() + ":" + date.getMinutes()}</p>
    </div>
  );
};

export default DateTime;
