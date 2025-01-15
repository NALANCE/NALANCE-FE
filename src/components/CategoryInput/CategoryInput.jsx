import React, { useState, useRef, useEffect } from 'react';
import * as S from './CategoryInput.style';
import arrowSvg from 'assets/icons/category_arrow.svg';
import CategoryBtn from '../common/CategoryBtn/CategoryBtn';
import ConfirmModal from '../common/ConfirmModal/ConfirmModal';
import ColorPickerModal from '../ColorPickerModal/ColorPickerModal';

const CategoryInput = ({ backgroundColor, onSubmit, onDelete }) => {
  const COLORS = [
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

  const getRandomColor = () =>
    COLORS[Math.floor(Math.random() * COLORS.length)];

  const [text, setText] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [randomBackground, setRandomBackground] = useState(
    backgroundColor || getRandomColor()
  );
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isErrorAnimating, setIsErrorAnimating] = useState(false);
  const [isInteractionBlocked, setIsInteractionBlocked] = useState(false);

  useEffect(() => {
    if (!backgroundColor) {
      setRandomBackground(getRandomColor());
    }
  }, [backgroundColor]);

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => {
    if (!text.trim()) {
      setErrorMessage('카테고리명을 입력해주세요.');
      triggerErrorAnimation();
      setTimeout(() => {
        inputRef.current.focus();
      }, 0);
      setIsInteractionBlocked(true);
    } else {
      setErrorMessage('');
      setIsInteractionBlocked(false);
    }
    setIsFocused(false);
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setText(inputValue);
    updateDisplayText(inputValue);
    adjustContainerWidth(inputValue);

    if (inputValue.trim()) {
      setErrorMessage('');
      setIsInteractionBlocked(false);
    }
  };

  const updateDisplayText = (inputValue) => {
    if (inputValue.length > 5) {
      setDisplayText('...');
    } else {
      setDisplayText('');
    }
  };

  const adjustContainerWidth = (inputValue) => {
    const container = containerRef.current;
    if (container) {
      const length = inputValue.length > 5 ? 5 : inputValue.length;
      container.style.width = `${Math.max(40, 40 + length * 15.6)}px`;
    }
  };

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const confirmDelete = () => {
    if (onDelete) {
      onDelete();
    }
    setText('');
    setIsModalOpen(false);
  };

  const triggerErrorAnimation = () => {
    setIsErrorAnimating(true);
    setTimeout(() => {
      setIsErrorAnimating(false);
    }, 500);
  };

  const openColorPicker = () => {
    setIsColorPickerOpen(true);
  };

  const closeColorPicker = () => {
    setIsColorPickerOpen(false);
  };

  const handleColorChange = (color) => {
    setRandomBackground(color); // 배경 색 변경
    closeColorPicker();
  };

  return (
    <>
      {isInteractionBlocked && <S.Overlay />}
      <S.Wrapper>
        <S.InputWrapper>
          <S.Container
            ref={containerRef}
            backgroundColor={randomBackground}
            onClick={() => inputRef.current.focus()}
          >
            <S.ArrowIcon>
              <img src={arrowSvg} alt="화살표 아이콘" />
            </S.ArrowIcon>
            <S.InputField
              ref={inputRef}
              type="text"
              value={text}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder=""
              autoFocus
            />
            {!isFocused && <S.DisplayText>{displayText}</S.DisplayText>}
          </S.Container>

          <S.ButtonGroup>
            <CategoryBtn
              type="colorChange"
              altText="색상 변경 버튼"
              onClick={openColorPicker}
            />
            <CategoryBtn
              type="delete"
              altText="삭제 버튼"
              onClick={handleDelete}
            />
          </S.ButtonGroup>
        </S.InputWrapper>
        {errorMessage && (
          <S.ErrorMessage
            className={isErrorAnimating ? 'shake' : ''}
            onAnimationEnd={triggerErrorAnimation}
          >
            {errorMessage}
          </S.ErrorMessage>
        )}

        <ConfirmModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onConfirm={confirmDelete}
          message={`${text ? `'${text}'` : '항목'}을 삭제하시겠습니까?`}
        />

        <ColorPickerModal
          isOpen={isColorPickerOpen}
          onColorSelect={handleColorChange}
          selectedColor={randomBackground}
        />
      </S.Wrapper>
    </>
  );
};

export default CategoryInput;
