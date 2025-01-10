import sadCat from "assets/icons/sadCat.svg";
import Notification from "components/common/Notification/Notification";
import * as S from "./Warning.style";
import { useEffect, useState } from "react";

const Warning = () => {
  const [isClicked, setIsClicked] = useState(false); // 말풍선

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
      <S.WarningContainer>
        <div onClick={handleCatClicked}>
          <img src={sadCat}></img>
        </div>
        {isClicked ? (
          <Notification
            width="144px"
            height="52px"
            left="50%"
            text={
              <>
                상대적으로 비율이 낮아요. <br /> 카테고리 활동을 늘려주세요!
              </>
            }
          />
        ) : (
          <></>
        )}
      </S.WarningContainer>
    </>
  );
};

export default Warning;
