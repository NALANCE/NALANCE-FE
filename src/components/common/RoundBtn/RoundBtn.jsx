import { useEffect, useState } from "react";
import * as S from "./RoundBtn.style";

const RoundBtn = ({ text, width, onClickConfirmButton }) => {
  const [clicked, setClicked] = useState(false);

  const onClick = () => {
    onClickConfirmButton();

      setClicked(true);
    
  };

  return (
    <>
      <S.RBtn width={width} data-clicked={clicked} onClick={onClick}>
        {text}
      </S.RBtn>
    </>
  );
};

export default RoundBtn;
