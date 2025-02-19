import * as S from "./ShowDate.style";
import backBtn from "assets/icons/backBtn.svg";
import nextBtn from "assets/icons/nextBtn.svg";

// 날짜 포맷팅 함수
const formatDate = (date) => {
  let year = date.getFullYear(); // 년
  let month = String(date.getMonth() + 1).padStart(2, "0"); // 월
  let day = String(date.getDate()).padStart(2, "0"); // 일
  return `${year}-${month}-${day}`; // 년-월-일
};

const ShowDate = ({ date, onDateChange }) => {
  // 문자열일 경우 Date 객체로 변환 (dateObject: Date객체)
  const dateObject = typeof date === "string" ? new Date(date) : date;

  // 오늘 날짜 구하기
  let year = dateObject.getFullYear(); // 년
  let month = String(dateObject.getMonth() + 1).padStart(2, "0"); // 월
  let day = String(dateObject.getDate()).padStart(2, "0"); // 일
  let formattedDate = `${year}/${month}/${day}`; // 년/월/일 (화면에 띄우기 위해)

  const changeDate = (days) => {
    const newDate = new Date(dateObject);
    newDate.setDate(dateObject.getDate() + days);
    onDateChange(formatDate(newDate));
  };

  return (
    <>
      <S.DateContainer>
        <button onClick={() => changeDate(-1)}>
          <img src={backBtn} alt="backBtn" />
        </button>

        <p>{formattedDate}</p>

        <button onClick={() => changeDate(+1)}>
          <img src={nextBtn} alt="nextBtn" />
        </button>
      </S.DateContainer>
    </>
  );
};

export default ShowDate;
