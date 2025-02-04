import React, { useState, useEffect } from 'react';
import axiosInstance from 'apis/defaultAxios'; // axios 인스턴스 가져오기
import PageTitle from 'components/common/PageTitle/PageTitle';
import ControlBtn from 'components/common/ControlBtn/ControlBtn';
import CategoryInput from 'components/CategoryInput/CategoryInput';
import Warning from 'components/CategoryWarning/CategoryWarning';
import TriangleBtn from '../../../components/common/TriangleBtn/TriangleBtn';

import * as S from './User2.style';

const MAX_CATEGORIES = 10;

const User2 = () => {
  const [categories, setCategories] = useState([]); // 추가된 카테고리 리스트
  const [inputFields, setInputFields] = useState([]); // 입력 필드 리스트
  const [errorMessage, setErrorMessage] = useState(''); // 에러 메시지
  const [isErrorAnimating, setIsErrorAnimating] = useState(false); // 에러 애니메이션 상태
  const [isSubmitting, setIsSubmitting] = useState(false); // API 요청 상태

  const totalItems = categories.length + inputFields.length; // 총 개수 계산

  useEffect(() => {
    // ✅ 회원가입 정보를 localStorage에 저장 (임시 테스트용)
    localStorage.setItem(
      'signupUserData',
      JSON.stringify({
        email: 'testuser3@example.com',
        password: 'Test1234!',
        terms: [{ termsId: 1 }, { termsId: 2 }, { termsId: 3 }],
      })
    );
  }, []);

  // ✅ User1에서 저장된 회원가입 데이터 불러오기
  const [signupData, setSignupData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('signupUserData');
    if (storedData) {
      setSignupData(JSON.parse(storedData));
    } else {
      alert('회원가입 정보를 찾을 수 없습니다. 다시 진행해주세요.');
      window.location.href = '/User1'; // User1 페이지로 이동
    }
  }, []);

  // ✅ 회원가입 API 호출
  const handleSignup = async () => {
    if (!signupData) {
      alert('회원가입 정보를 찾을 수 없습니다.');
      return;
    }

    if (totalItems === 0) {
      alert('카테고리를 최소 1개 이상 추가해야 합니다.');
      return;
    }

    setIsSubmitting(true);

    const requestData = {
      email: signupData.email,
      password: signupData.password,
      terms: signupData.terms,
      categories: categories.map(({ categoryName, color }) => ({
        categoryName,
        color,
      })),
    };

    console.log(
      '📤 최종 회원가입 요청 데이터:',
      JSON.stringify(requestData, null, 2)
    );

    try {
      const response = await axiosInstance.post(
        '/api/v0/members/signup',
        requestData
      );

      console.log('✅ 회원가입 응답:', response.data);

      if (response.data.isSuccess) {
        window.location.href = '/login';
      } else {
        alert(response.data.message || '회원가입에 실패했습니다.');
      }
    } catch (error) {
      console.error('❌ 회원가입 오류:', error);
      alert('회원가입 중 오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
    setCategories((prevCategories) => {
      const categoryExists = prevCategories.some(
        (category) => category.id === fieldId
      );

      if (categoryExists) {
        return prevCategories.map((category) =>
          category.id === fieldId ? { ...category, ...newCategory } : category
        );
      }

      return [...prevCategories, { id: fieldId, ...newCategory }];
    });
  };

  // 입력 필드 삭제 처리
  const handleDeleteInputField = (fieldId) => {
    setInputFields((prevFields) =>
      prevFields.filter((field) => field.id !== fieldId)
    );

    setCategories((prevCategories) =>
      prevCategories.filter((category) => category.id !== fieldId)
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
      {/* 부모 컨테이너 추가 */}
      <S.ParentContainer>
        {/* 입력 필드 렌더링 */}
        <S.Container>
          {inputFields.map((field) => (
            <CategoryInput
              key={field.id}
              fieldId={field.id}
              onSubmit={(newCategory) => {
                handleAddCategory(newCategory, field.id);
              }}
              onDelete={() => handleDeleteInputField(field.id)}
              existingCategories={categories}
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
      </S.ParentContainer>
      {/* 가입 버튼 */}
      <S.TriangleBtnWrapper>
        <TriangleBtn
          text="가입"
          Allow={totalItems > 0 && !isSubmitting}
          onClick={handleSignup} // onClick prop으로 전달
        />
      </S.TriangleBtnWrapper>
    </>
  );
};

export default User2;
