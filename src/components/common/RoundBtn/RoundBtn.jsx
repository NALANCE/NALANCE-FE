import { useEffect, useState } from "react";
import * as S from "./RoundBtn.style";

const RoundBtn = ({ text, width }) => {
  const [clicked, setClicked] = useState(false);

  const onClick = () => {
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
