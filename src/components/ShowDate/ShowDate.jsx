import * as S from "./ShowDate";
import backBtn from "assets/icons/backBtn.svg";
import nextBtn from "assets/icons/nextBtn.svg";

const ShowDate = () => {
  // 오늘 날짜 구하기
  let newDate = new Date();
  let year = newDate.getFullYear(); // 년
  let month = newDate.getMonth() + 1; // 월
  let date = newDate.getDate(); // 일
  let formattedDate = `${year}/${month}/${date}`; // 년/월/일

  return (
    <>
      <S.DateContainer>
        <button>
          <img src={backBtn} />
        </button>

        <p>{formattedDate}</p>

        <button>
          <img src={nextBtn} />
        </button>
      </S.DateContainer>
    </>
  );
};

export default ShowDate;
