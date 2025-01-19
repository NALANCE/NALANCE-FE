import React from 'react';
import ReactDOM from 'react-dom';
import * as S from './ColorPickerModal.style';

const colors = [
  '#FFE292',
  '#FFDAA3',
  '#FCC79B',
  '#F8A980',
  '#F8AA96',
  '#F8A19A',
  '#D792BF',
  '#9D86BE',
  '#6F85C1',
  '#7DA7D9',
  '#81D2E5',
  '#87D1D0',
  '#7BCBBE',
  '#8BCFB6',
  '#C2E0AE',
  '#DDE89A',
];

const ColorPickerModal = ({ isOpen, onColorSelect, selectedColor }) => {
  if (!isOpen) return null;

  const handleColorClick = (color) => {
    onColorSelect(color); // 부모 컴포넌트로 선택된 색상 전달
  };

  return ReactDOM.createPortal(
    <S.Overlay>
      <S.ModalContainer>
        <S.Title>색상</S.Title>
        <S.ColorGrid>
          {colors.map((color, index) => (
            <S.ColorBox
              key={index}
              color={color}
              isSelected={selectedColor === color} // 선택된 색상인지 확인
              onClick={() => handleColorClick(color)}
            />
          ))}
        </S.ColorGrid>
      </S.ModalContainer>
    </S.Overlay>,
    document.getElementById('modal-root') // Portals로 렌더링
  );
};

export default ColorPickerModal;
