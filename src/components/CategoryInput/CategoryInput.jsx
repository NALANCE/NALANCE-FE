import React, { useState, useRef, useEffect } from 'react';
import * as S from './CategoryInput.style';
import arrowSvg from 'assets/icons/category_arrow.svg';
import CategoryBtn from '../common/CategoryBtn/CategoryBtn';
import ConfirmModal from '../common/ConfirmModal/ConfirmModal';
import ColorPickerModal from '../ColorPickerModal/ColorPickerModal';

const CategoryInput = ({
  fieldId,
  backgroundColor,
  defaultValue = '',
  onSubmit,
  onDelete,
  existingCategories = [],
}) => {
  const COLORS = [
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

  const getRandomColor = () =>
    COLORS[Math.floor(Math.random() * COLORS.length)];

  const [text, setText] = useState(defaultValue);
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

  // 입력 창 너비 조정 함수
  const adjustContainerWidth = (inputValue) => {
    const container = containerRef.current;
    if (container) {
      const length = Math.min(inputValue.length, 5);
      container.style.width = `${Math.max(40, 40 + length * 20)}px`;
    }
  };

  useEffect(() => {
    if (backgroundColor === undefined || backgroundColor === null) {
      setRandomBackground(getUniqueColor());
    } else {
      setRandomBackground(backgroundColor);
    }

    adjustContainerWidth(defaultValue);
  }, [backgroundColor, defaultValue]);

  useEffect(() => {
    adjustContainerWidth(text);
  }, [text]); // text 상태가 변경될 때마다 실행

  const handleFocusOrClick = () => {
    setIsFocused(true);
    if (inputRef.current) {
      const length = text.length;
      inputRef.current.setSelectionRange(length, length);
      inputRef.current.scrollLeft = inputRef.current.scrollWidth;
    }
  };

  const handleBlur = () => {
    if (text.trim()) {
      const isDuplicateName = existingCategories.some(
        (category) =>
          category.categoryId !== fieldId &&
          category.categoryName.trim().toLowerCase() ===
            text.trim().toLowerCase()
      );

      if (isDuplicateName) {
        setErrorMessage('이미 존재하는 카테고리명입니다.');
        setText('');
        triggerErrorAnimation();
        return;
      }

      onSubmit({
        id: fieldId,
        categoryName: text,
        color: randomBackground,
      });
    } else {
      setErrorMessage('카테고리명을 입력해주세요.');
      triggerErrorAnimation();
      setTimeout(() => {
        inputRef.current.focus();
      }, 0);
      setIsInteractionBlocked(true);
    }
    setIsFocused(false);
  };

  // ✅ 입력값 변경 처리
  const handleChange = (e) => {
    const inputValue = e.target.value;
    setText(inputValue);
    adjustContainerWidth(inputValue);

    if (inputValue.trim()) {
      setErrorMessage('');
      setIsInteractionBlocked(false);
    }
  };

  // ✅ Enter 입력 시 저장
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && text.trim()) {
      onSubmit({
        id: fieldId,
        categoryName: text,
        color: randomBackground,
      });
    }
  };

  // ✅ 삭제 모달 열기
  const handleDelete = () => {
    setIsModalOpen(true);
  };

  // ✅ 삭제 모달 닫기
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // ✅ 카테고리 삭제 확정
  const confirmDelete = () => {
    if (onDelete) {
      onDelete();
    }
    setText('');
    setIsModalOpen(false);
  };

  // ✅ 에러 애니메이션 트리거
  const triggerErrorAnimation = () => {
    setIsErrorAnimating(true);
    setTimeout(() => {
      setIsErrorAnimating(false);
    }, 500);
  };

  // ✅ 색상 선택 모달 열기/닫기
  const openColorPicker = () => {
    setIsColorPickerOpen(true);
  };

  const closeColorPicker = () => {
    setIsColorPickerOpen(false);
  };

  // ✅ 기존에 없는 색상 찾기
  const getUniqueColor = () => {
    let newColor;
    const existingColors = existingCategories.map((category) =>
      category.color.replace('#', '').toUpperCase()
    );

    do {
      newColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    } while (existingColors.includes(newColor.replace('#', '').toUpperCase()));

    return newColor;
  };

  // ✅ 색상 변경 핸들러
  const handleColorChange = (color) => {
    const normalizedNewColor = color.replace('#', '').toUpperCase();

    // console.log(
    //   '🎨 기존 색상 목록:',
    //   existingCategories.map((category) => category.color.toUpperCase())
    // );
    // console.log('🎨 선택한 색상:', normalizedNewColor);

    // ✅ 자기 자신을 제외한 나머지 카테고리들과 비교
    const isDuplicateColor = existingCategories
      .filter((category) => category.categoryId !== fieldId) // ✅ 자기 자신 제외
      .some(
        (category) =>
          category.color.replace('#', '').toUpperCase() === normalizedNewColor
      );

    let finalColor = color;

    if (isDuplicateColor) {
      setErrorMessage('해당 색상은 이미 존재합니다. 추천 색상으로 변경합니다.');
      setIsColorPickerOpen(false);

      finalColor = getUniqueColor(); // 새로운 추천 색상 선택
      setRandomBackground(finalColor);

      // 3.5초 후 에러 메시지 자동 제거
      setTimeout(() => {
        setErrorMessage('');
      }, 3500);

      triggerErrorAnimation();
    }

    setRandomBackground(finalColor);
    closeColorPicker();
    setIsColorPickerOpen(false);

    onSubmit({
      id: fieldId,
      categoryName: text,
      color: finalColor,
    });
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
              onFocus={handleFocusOrClick}
              onClick={handleFocusOrClick}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              placeholder=""
              autoFocus
            />
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
          message={`${
            text
              ? `'${
                  text.length > 5 ? text.slice(0, 3) + '...' : text
                }' 카테고리를`
              : '이 항목을'
          } 삭제할까요?`}
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
