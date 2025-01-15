import React, { useState } from 'react';
import * as S from './CategoryBtn.style';
import colorChange1 from 'assets/icons/category_color_change1.svg';
import colorChange2 from 'assets/icons/category_color_change2.svg';
import delete1 from 'assets/icons/category_delete1.svg';
import delete2 from 'assets/icons/category_delete2.svg';
import add1 from 'assets/icons/category_add1.svg';
import add2 from 'assets/icons/category_add2.svg';

const CategoryBtn = ({ type, altText, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const icons = {
    colorChange: { default: colorChange1, hover: colorChange2 },
    delete: { default: delete1, hover: delete2 },
    add: { default: add1, hover: add2 },
  };

  const currentIcons = icons[type] || icons.colorChange;

  const handleClick = () => {
    setIsClicked(true);
    if (onClick) {
      onClick();
    }
    setTimeout(() => {
      setIsClicked(false);
    }, 300);
  };

  const getIcon = () => {
    if (isClicked) return currentIcons.hover;
    if (isHovered) return currentIcons.hover;
    return currentIcons.default;
  };

  return (
    <S.StyledButton
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <img src={getIcon()} alt={altText} />
    </S.StyledButton>
  );
};

export default CategoryBtn;
