import { useState } from "react";
import useCalendar from "hooks/useCalendar"; // useCalendar 훅 import

const Calendar = () => {
  const { weekCalendarList } = useCalendar();
  const [select, setSelect] = useState([]);

  const handleDayClick = (day) => {};

  return (
    <>
      {weekCalendarList.map((week, idx) => (
        <div key={idx} style={{ display: "flex", flexDirection: "row" }}>
          {week.map((day, i) => (
            <button
              onClick={() => handleDayClick(day)}
              style={{
                minWidth: "calc(100% / 7)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textAlign: "center",
                cursor: day === 0 ? "default" : "pointer", // 비어있는 날짜는 클릭 불가
                opacity: day === 0 ? 0 : 1,
              }}
              key={i}
            >
              <div style={{ margin: "0 auto" }}>{day !== 0 ? day : ""}</div>
            </button>
          ))}
        </div>
      ))}
    </>
  );
};

export default Calendar;
