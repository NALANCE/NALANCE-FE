import { useState } from "react";
import * as S from "./LoginBtn.style";
import { useNavigate } from "react-router-dom";

const LoginBtn = ({ text, width, link }) => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  const onClick = () => {
    setClicked(true);
    setTimeout(() => {
      navigate(link);
    }, 100);
  };

  return (
    <>
      <S.LBtn width={width} data-clicked={clicked} onClick={onClick}>
        {text}
      </S.LBtn>
    </>
  );
};

export default LoginBtn;
