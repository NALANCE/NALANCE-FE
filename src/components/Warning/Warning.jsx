import sadCat from "assets/icons/sadCat.svg";
import Notification from "components/common/Notification/Notification";
import * as S from "./Warning.style";
import { useEffect, useState } from "react";

import warningBalance from "assets/img/warningBalance.png";
import warningImbalance from "assets/img/warningImbalance.png";

import warningToday from "assets/img/warningToday.png";
import warningPrev from "assets/img/warningPrev.png";

const Warning = ({ date, $isWarning = false, balance, $monthly = false }) => {
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
      <S.WarningContainer $right={$isWarning ? "-10%" : "0px"} $isWarning={$isWarning}>
        {/* 비율이 잘 맞아요 / 잘 맞지 않아요 */}
        {$isWarning || (
          <S.ChatCatContainer>
            <img src={balance ? warningBalance : warningImbalance} />
          </S.ChatCatContainer>
        )}

        <S.CatContainer onClick={handleCatClicked} $monthly={$monthly}>
          {/* 고양이 얼굴 */}
          <object data={sadCat} alt="Sad Cat Icon" />

          {$isWarning && isClicked && (
            <Notification img={isToday ? warningToday : warningPrev} isClicked={isClicked} $hasWidth={true} />
          )}
        </S.CatContainer>
      </S.WarningContainer>
    </>
  );
};

export default Warning;
