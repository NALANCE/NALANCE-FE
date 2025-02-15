import { useState } from "react";
import * as S from "./TriangleBtn.style";
import { useNavigate } from "react-router-dom";

import triangleBtn from "assets/icons/triangleBtn.svg";
import triangleBtnClick from "assets/icons/triangleBtnClick.svg"

const TriangleBtn = ({text, Allow, onClick}) => {
  const [clicked, setClicked] = useState(false);
  const [currentBtn, setCurrentBtn] = useState(triangleBtn); // 초기값 설정

  const handleClick = () => {
    if (Allow) {
      if (onClick) onClick();
      setClicked(true);
      setCurrentBtn(triangleBtnClick); // 클릭 시 이미지 변경
    }
  };

  return (
    <>
      <S.Container data-clicked={clicked} onClick={handleClick}>
        <S.Image src={currentBtn} alt="triangleBtn" />
        <S.Text>{text}</S.Text>
      </S.Container>
    </>
  );
};

export default TriangleBtn;