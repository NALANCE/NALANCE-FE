import * as S from "./ShowDate";
import backBtn from "assets/icons/backBtn.svg";
import nextBtn from "assets/icons/nextBtn.svg";
import { useState } from "react";

const ShowDate = () => {
  const [date, setDate] = useState(new Date());

  const changeDate = (days) => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + days);
    setDate(newDate);
  };

  // 오늘 날짜 구하기
  let year = date.getFullYear(); // 년
  let month = String(date.getMonth() + 1).padStart(2, "0"); // 월
  let day = String(date.getDate()).padStart(2, "0"); // 일
  let formattedDate = `${year}/${month}/${day}`; // 년/월/일

  return (
    <>
      <S.DateContainer>
        <button onClick={() => changeDate(-1)}>
          <img src={backBtn} />
        </button>

        <p>{formattedDate}</p>

        <button onClick={() => changeDate(+1)}>
          <img src={nextBtn} />
        </button>
      </S.DateContainer>
    </>
  );
};

export default ShowDate;
