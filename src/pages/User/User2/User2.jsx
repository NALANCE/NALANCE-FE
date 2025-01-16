import React, { useState } from 'react';
import PageTitle from 'components/common/PageTitle/PageTitle';
import ControlBtn from 'components/common/ControlBtn/ControlBtn';
import CategoryInput from 'components/CategoryInput/CategoryInput';
import Warning from 'components/CategoryWarning/CategoryWarning';
import * as S from './User2.style';

const MAX_CATEGORIES = 10;

const User2 = () => {
  const [categories, setCategories] = useState([]); // 추가된 카테고리 리스트
  const [inputFields, setInputFields] = useState([]); // 입력 필드 리스트
  const [errorMessage, setErrorMessage] = useState(''); // 에러 메시지
  const [isErrorAnimating, setIsErrorAnimating] = useState(false); // 에러 애니메이션 상태

  const totalItems = categories.length + inputFields.length; // 총 개수 계산

  // 입력 필드 추가 함수
  const addCategory = () => {
    if (totalItems >= MAX_CATEGORIES) {
      setErrorMessage('카테고리는 최대 10개까지 생성 가능합니다.');
      triggerErrorAnimation();
      return;
    }
    setInputFields([...inputFields, { id: Date.now() }]); // 고유 ID로 입력 필드 추가
    setErrorMessage('');
  };

  // 카테고리 추가 처리
  const handleAddCategory = (newCategory, fieldId) => {
    setCategories((prevCategories) => [...prevCategories, newCategory]); // 카테고리 추가
  };

  // 입력 필드 삭제 처리
  const handleDeleteInputField = (fieldId) => {
    setInputFields((prevFields) =>
      prevFields.filter((field) => field.id !== fieldId)
    );
    setErrorMessage('');
  };

  // 에러 애니메이션 트리거
  const triggerErrorAnimation = () => {
    setIsErrorAnimating(true);
    setTimeout(() => {
      setIsErrorAnimating(false);
    }, 500); // 애니메이션 지속 시간
  };

  return (
    <>
      {/* 페이지 제목 */}
      <PageTitle pageTitle="카테고리 생성" />

      {/* 입력 필드 렌더링 */}
      <S.Container>
        {inputFields.map((field) => (
          <CategoryInput
            key={field.id}
            onSubmit={(newCategory) => handleAddCategory(newCategory, field.id)} // 입력값으로 카테고리 추가
            onDelete={() => handleDeleteInputField(field.id)} // 입력 필드 삭제
          />
        ))}
      </S.Container>

      <S.WarningAndButtonWrapper>
        <S.ButtonContainer>
          {/* 카테고리 추가 버튼 */}
          <ControlBtn text="추가" onClick={addCategory} />
          {errorMessage && (
            <S.ErrorMessage className={isErrorAnimating ? 'shake' : ''}>
              {errorMessage}
            </S.ErrorMessage>
          )}
        </S.ButtonContainer>

        {/* Warning 컴포넌트 조건부 렌더링 */}
        {totalItems === 0 && <Warning />}
      </S.WarningAndButtonWrapper>
    </>
  );
};

export default User2;
