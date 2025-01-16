import React, { useState } from 'react';
import * as S from './DropBtn.style';
import { useNavigate } from 'react-router-dom';
import btn1 from 'assets/icons/drop_btn1.svg';
import btn2 from 'assets/icons/drop_btn2.svg';

const DropBtn = ({ link }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const onClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      navigate(link);
      setIsClicked(false);
    }, 100);
  };

  return (
    <S.DBtn
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={isHovered || isClicked ? btn2 : btn1} alt="탈퇴 버튼" />
    </S.DBtn>
  );
};

export default DropBtn;
