import { useEffect, useRef, useState } from "react";
import DateTimeInfo from "./DateTimeInfo";

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

  const [openInfo, setOpenInfo] = useState<boolean>(false);
  const dateTimeRef = useRef<any>();

  useEffect(() => {
    const closeInfo = (e: any) => {
      if (e.path[1] !== dateTimeRef.current) {
        setOpenInfo(false);
      }
    };
    document.body.addEventListener("click", closeInfo);

    return () => document.body.removeEventListener("click", closeInfo);
  }, []);

  return (
    <div className="relative">
      <button ref={dateTimeRef} onClick={() => setOpenInfo(!openInfo)} className="flex gap-2 text-gray-300 text-sm items-center font-extrabold hover:bg-gray-200 hover:bg-opacity-20 rounded-full px-2 py-1 cursor-pointer">
        <p>{monthNames[date.getMonth()] + " " + date.getDate()}</p>
        <p>
          {date.getHours() + ":" + String(date.getMinutes()).padStart(2, "0")}
        </p>
      </button>
      <DateTimeInfo openInfo={openInfo} dateTimeRef={dateTimeRef} />
    </div>
  );
};

export default DateTime;
