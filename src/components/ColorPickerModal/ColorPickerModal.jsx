import React from 'react';
import ReactDOM from 'react-dom';
import * as S from './ColorPickerModal.style';

const colors = [
  '#FFE292',
  '#FFDAA3',
  '#FCC79B',
  '#FFAD82',
  '#FDB9A8',
  '#F3ACA6',
  '#E6A7D0',
  '#CFB7F2',
  '#99AFE9',
  '#94BDEE',
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
