import React, { useState } from 'react';
import * as S from './DropBtn.style';
import btn1 from 'assets/icons/drop_btn1.svg';
import btn2 from 'assets/icons/drop_btn2.svg';

const DropBtn = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      onClick && onClick();
      setIsClicked(false);
    }, 100);
  };

  return (
    <S.DBtn
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={isHovered || isClicked ? btn2 : btn1} alt="탈퇴 버튼" />
    </S.DBtn>
  );
};

export default DropBtn;
