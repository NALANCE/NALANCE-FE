import { useState } from "react";

// 날짜 포맷팅 함수
const formatDate = (date) => {
  let year = date.getFullYear(); // 년
  let month = String(date.getMonth() + 1).padStart(2, "0"); // 월
  let day = String(date.getDate()).padStart(2, "0"); // 일

  return `${year}-${month}-${day}`; // 년-월-일 형태로 반환 (문자열 형태, 더미데이터에서 비교를 위해)
};

const useDate = () => {
  const [date, setDate] = useState(formatDate(new Date()));

  // 날짜 변경시
  const handleDateChange = (newDate) => {
    const formattedDate = typeof newDate === "object" && newDate instanceof Date ? formatDate(newDate) : newDate; // 포맷 (문자열로)
    setDate(formattedDate); // 새로운 날짜 상태 업데이트
  };

  return [date, handleDateChange];
};

export default useDate;
