import { useState } from "react";
import * as S from "./LoginBtn.style";
import { useNavigate } from "react-router-dom";

const LoginBtn = ({ text, width, link, notAllow, onClickConfirmButton}) => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  const onClick = () => {
    onClickConfirmButton();

    if(!notAllow){
      setClicked(true);
      setTimeout(() => {
        navigate(link);
      }, 100);
    }
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