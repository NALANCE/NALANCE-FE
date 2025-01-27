import sadCat from "assets/icons/sadCat.svg";
import Notification from "components/common/Notification/Notification";
import * as S from "./Warning.style";
import { useEffect, useState } from "react";

import warningToday from "assets/icons/warningToday.svg";
import warningPrev from "assets/icons/warningPrev.svg";

const Warning = ({ right, date }) => {
  const [isClicked, setIsClicked] = useState(false); // 말풍선
  const [isToday, setIsToday] = useState(false);

  // 오늘 날짜와 비교
  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`; // yyyy-mm-dd 형식으로 변환

    if (date === formattedDate) {
      setIsToday(true); // 오늘 날짜이면 true로 설정
    } else {
      setIsToday(false); // 오늘 날짜가 아니면 false로 설정
    }
  }, [date]);

  return (
    <S.WarningContainer right={right}>
      <S.CatContainer>
        <img src={sadCat} alt="Sad Cat Icon" />
      </S.CatContainer>
    </S.WarningContainer>
  );
};

export default Warning;
