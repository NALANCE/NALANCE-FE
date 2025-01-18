import ShowMonth from "components/ShowMonth/ShowMonth";
import MonthlyChart from "components/MonthlyChart/MonthlyChart";
import Calendar from "components/Calendar/Calendar";
import ImgSave from "components/ImgSave/ImgSave";

import { DailyContainer } from "pages/Daily/Daily.style.js";
import { useState } from "react";

// 날짜 포맷팅 함수
const formatDate = (date) => {
  let year = date.getFullYear(); // 년
  let month = String(date.getMonth() + 1).padStart(2, "0"); // 월
  let day = String(date.getDate()).padStart(2, "0"); // 일

  return `${year}-${month}-${day}`; // 년-월-일 형태로 반환 (문자열 형태, 더미데이터에서 비교를 위해)
};

const Monthly = () => {
  const [date, setDate] = useState(formatDate(new Date()));
  //console.log(date); 2025-01-17

  // 날짜 변경시
  const handleDateChange = (newDate) => {
    const formattedDate = typeof newDate === "object" && newDate instanceof Date ? formatDate(newDate) : newDate; // 포맷 (문자열로)
    setDate(formattedDate); // 새로운 날짜 상태 업데이트
  };

  return (
    <DailyContainer className="ImgContainer">
      <ShowMonth />
      <MonthlyChart date={date} />
      <Calendar date={date} onDateChange={handleDateChange} />
      <ImgSave />
    </DailyContainer>
  );
};

export default Monthly;
