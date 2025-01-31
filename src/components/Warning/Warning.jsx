import sadCat from "assets/icons/sadCat.svg";
import Notification from "components/common/Notification/Notification";
import * as S from "./Warning.style";
import { useEffect, useState } from "react";

import warningBalance from "assets/icons/warningBalance.svg";
import warningImbalance from "assets/icons/warningImbalance.svg";

import warningToday from "assets/icons/warningToday.svg";
import warningPrev from "assets/icons/warningPrev.svg";

const Warning = ({ date, $isWarning = false }) => {
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

  const handleCatClicked = () => {
    setIsClicked((prev) => !prev);
  };

  // 4초 후 닫히도록
  useEffect(() => {
    let timer;
    if (isClicked) {
      timer = setTimeout(() => {
        setIsClicked(false); // 4초 후 변경되도록
      }, 4000);
    }
    return () => clearTimeout(timer); // 타이머 정리
  }, [isClicked]);

  return (
    <>
      {/* isWarning true->경고창 false->잘 맞아요, 잘 맞지 않아요 */}
      <S.WarningContainer right={$isWarning ? "-10%" : "0px"} $isWarning={$isWarning}>
        {/* 비율이 잘 맞아요 / 잘 맞지 않아요 */}
        {$isWarning || (
          <div>
            <img src={warningBalance} />
          </div>
        )}

        <S.CatContainer onClick={handleCatClicked}>
          {/* 고양이 얼굴 */}
          <img src={sadCat} alt="Sad Cat Icon" />

          {$isWarning && isClicked && <Notification img={isToday ? warningToday : warningPrev} isClicked={isClicked} />}
        </S.CatContainer>
      </S.WarningContainer>
    </>
  );
};

export default Warning;
