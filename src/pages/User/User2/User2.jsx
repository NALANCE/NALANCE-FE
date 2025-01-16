import React, { useState } from 'react';
import PageTitle from 'components/common/PageTitle/PageTitle';
import ControlBtn from 'components/common/ControlBtn/ControlBtn';
import CategoryInput from 'components/CategoryInput/CategoryInput';
import * as S from './User2.style';

const MAX_CATEGORIES = 10;

const User2 = () => {
  const [categories, setCategories] = useState([]);
  const [inputFields, setInputFields] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isErrorAnimating, setIsErrorAnimating] = useState(false);

  const addCategory = () => {
    if (categories.length + inputFields.length >= MAX_CATEGORIES) {
      setErrorMessage('카테고리는 최대 10개까지 생성 가능합니다.');
      triggerErrorAnimation();
      return;
    }
    setInputFields([...inputFields, { id: Date.now() }]);
    setErrorMessage('');
  };

  const handleAddCategory = (newCategory, fieldId) => {
    setCategories([...categories, newCategory]);
    setInputFields(inputFields.filter((field) => field.id !== fieldId));
    setErrorMessage('');
  };

  const handleDeleteInputField = (fieldId) => {
    setInputFields(inputFields.filter((field) => field.id !== fieldId));
    setErrorMessage('');
  };

  const triggerErrorAnimation = () => {
    setIsErrorAnimating(true);
    setTimeout(() => {
      setIsErrorAnimating(false);
    }, 500); // 애니메이션 지속 시간
  };

  return (
    <>
      <PageTitle pageTitle="카테고리 생성" />

      <S.Container>
        {inputFields.map((field) => (
          <CategoryInput
            key={field.id}
            onSubmit={(newCategory) => handleAddCategory(newCategory, field.id)} // 카테고리 추가
            onDelete={() => handleDeleteInputField(field.id)}
          />
        ))}
      </S.Container>

      <S.ButtonContainer>
        <ControlBtn text="추가" onClick={addCategory} />
        {errorMessage && (
          <S.ErrorMessage className={isErrorAnimating ? 'shake' : ''}>
            {errorMessage}
          </S.ErrorMessage>
        )}
      </S.ButtonContainer>
    </>
  );
};

export default User2;
