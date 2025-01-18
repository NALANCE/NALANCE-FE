import angryCat from "assets/icons/angryCat.svg";
import Notification from "components/common/Notification/Notification";
import * as S from "./CategoryWarning.style";
import { useEffect, useState } from "react";

import warningCategory from "assets/icons/warningCategory.svg";

const CategoryWarning = () => {
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
        <S.WarningBox onClick={handleCatClicked}>
          <img src={angryCat}></img>

          {isClicked ? <Notification img={warningCategory} isClicked={isClicked} /> : <></>}
        </S.WarningBox>
      </S.WarningContainer>
    </>
  );
};

export default CategoryWarning;
