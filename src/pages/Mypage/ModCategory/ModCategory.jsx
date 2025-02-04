import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import axiosInstance from 'apis/defaultAxios';
import Topbar from 'components/Topbar/Topbar';
import ControlBtn from 'components/common/ControlBtn/ControlBtn';
import CategoryInput from 'components/CategoryInput/CategoryInput';
import * as S from './ModCategory.style';
import DragHandleIcon from 'assets/icons/category_drag_handle.svg';

const MAX_CATEGORIES = 10;

const ModCategory = () => {
  const [categories, setCategories] = useState([]); // 기존 카테고리
  const [newCategoryFields, setNewCategoryFields] = useState([]); // 새로 추가된 카테고리
  const [errorMessage, setErrorMessage] = useState('');
  const [isErrorAnimating, setIsErrorAnimating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 📌 서버에서 카테고리 조회 (GET 요청)
  useEffect(() => {
    //  AccessToken 및 RefreshToken 저장 (임시 테스트용)
    localStorage.setItem(
      'accessToken',
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNCIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE3Mzg0OTIyNjZ9.pO0jWFJSp-NjUyJUjifmgado5hpi4SwjmOEtfhEPXVM'
    );
    localStorage.setItem(
      'refreshToken',
      'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MzkwOTUyNjZ9.f_srFv-EXzZZ6TnLtQZVnTj-QqoPYux_UcRS3B5oZX4'
    );
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get('/api/v0/categories');
        console.log('📥 GET 응답 데이터:', response.data);

        if (response.data.isSuccess && Array.isArray(response.data.result)) {
          const sortedCategories = response.data.result.sort(
            (a, b) => a.displayOrder - b.displayOrder
          );
          setCategories(sortedCategories);
        } else {
          alert('카테고리를 불러오지 못했습니다.');
        }
      } catch (error) {
        console.error('❌ 카테고리 조회 오류:', error);
        alert('카테고리 조회 실패');
      }
    };

    fetchCategories();
  }, []);

  // 📌 추가 버튼 클릭 시 빈 입력 필드 추가
  const addCategoryField = () => {
    if (categories.length + newCategoryFields.length >= MAX_CATEGORIES) {
      setErrorMessage('카테고리는 최대 10개까지 생성 가능합니다.');
      triggerErrorAnimation();
      return;
    }

    setNewCategoryFields([...newCategoryFields, { id: Date.now() }]);
  };

  // 📌 새 카테고리 추가 (API 호출 - blur 또는 Enter 시 실행)
  const handleSubmitNewCategory = async (categoryData) => {
    if (!categoryData.categoryName.trim()) return;

    try {
      setIsSubmitting(true);

      const response = await axiosInstance.post('/api/v0/categories', {
        categoryName: categoryData.categoryName,
        color: categoryData.color,
      });

      console.log('✅ POST 응답:', response.data);

      if (response.data.isSuccess) {
        setTimeout(() => {
          window.location.reload();
        }, 500);
      } else {
        alert(response.data.message || '카테고리 추가 실패');
      }
    } catch (error) {
      console.error('❌ 카테고리 추가 오류:', error);
      alert('카테고리 추가 중 문제가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // 📌  카테고리 수정 (API 호출 - blur 또는 Enter 입력 시 실행)
  const handleEditCategory = async (categoryId, newName, newColor) => {
    if (!categoryId) {
      console.error('🚨 오류 발생: categoryId가 유효하지 않음!', categoryId);
      alert('카테고리 ID가 유효하지 않습니다.');
      return;
    }

    if (!newName.trim()) return;

    const existingCategory = categories.find(
      (category) => category.categoryId === categoryId
    );

    if (
      existingCategory.categoryName === newName &&
      existingCategory.color === newColor
    )
      return;

    const categoryIndex = categories.findIndex(
      (c) => c.categoryId === categoryId
    );
    const displayOrder = categoryIndex !== -1 ? categoryIndex + 1 : null;

    if (displayOrder === null) {
      console.error('🚨 오류 발생: displayOrder를 찾을 수 없음');
      alert('카테고리 순서를 찾을 수 없습니다.');
      return;
    }

    try {
      const response = await axiosInstance.patch(
        `/api/v0/categories/${categoryId}`,
        [
          {
            categoryId: categoryId,
            categoryName: newName,
            color: newColor,
            displayOrder: displayOrder,
          },
        ]
      );

      console.log('✅ PATCH 응답:', response.data);
    } catch (error) {
      console.error('❌ 카테고리 수정 오류:', error);

      if (error.response) {
        console.error('📢 서버 응답 데이터:', error.response.data);
        alert('카테고리 수정 중 문제가 발생했습니다.');
      } else {
        alert('카테고리 수정 중 문제가 발생했습니다.');
      }
    }
  };

  // 📌 카테고리 삭제 API 요청
  const handleDeleteCategory = async (categoryId) => {
    try {
      await axiosInstance.delete(`/api/v0/categories/${categoryId}`);
      setCategories(
        categories.filter((category) => category.categoryId !== categoryId)
      );
    } catch (error) {
      console.error('❌ 카테고리 삭제 오류:', error);
      alert('카테고리 삭제 중 문제가 발생했습니다.');
    }
  };

  // 📌 드래그 앤 드롭 후 순서 변경 API 요청
  const handleReorderCategories = async (updatedCategories) => {
    try {
      const reorderedData = updatedCategories.map((category, index) => ({
        categoryId: category.categoryId,
        categoryName: category.categoryName,
        color: category.color,
        displayOrder: index + 1,
      }));

      console.log('📡 순서 변경 요청 데이터:', reorderedData);

      const response = await axiosInstance.patch(
        '/api/v0/categories/order',
        reorderedData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('✅ 순서 변경 응답:', response.data);

      if (response.data.isSuccess) {
        setCategories(updatedCategories);
      } else {
        alert('순서 변경 실패: ' + response.data.message);
      }
    } catch (error) {
      console.error('❌ 순서 변경 오류:', error);
      alert('카테고리 순서 변경 중 문제가 발생했습니다.');
    }
  };

  // 📌 드래그 앤 드롭 완료 시 순서 업데이트
  const onDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedCategories = [...categories];
    const [movedItem] = reorderedCategories.splice(result.source.index, 1);
    reorderedCategories.splice(result.destination.index, 0, movedItem);

    console.log('🔍 드래그 후 카테고리 데이터:', reorderedCategories);

    setCategories(reorderedCategories);

    setTimeout(() => {
      handleReorderCategories(reorderedCategories);
    }, 0);
  };

  // 📌 에러 애니메이션 트리거
  const triggerErrorAnimation = () => {
    if (isErrorAnimating) return;
    setIsErrorAnimating(true);
    setTimeout(() => {
      setIsErrorAnimating(false);
    }, 500);
  };

  return (
    <>
      <Topbar pageTitle="카테고리 수정" />

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="categories">
          {(provided) => (
            <S.Container ref={provided.innerRef} {...provided.droppableProps}>
              {[...categories, ...newCategoryFields].map((category, index) => (
                <Draggable
                  key={
                    category.categoryId
                      ? `cat-${category.categoryId}`
                      : `new-${category.id}`
                  }
                  draggableId={
                    category.categoryId
                      ? `cat-${category.categoryId}`
                      : `new-${category.id}`
                  }
                  index={index}
                >
                  {(provided) => (
                    <S.CategoryRow
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                    >
                      <S.DragHandle
                        src={DragHandleIcon}
                        alt="Drag Handle"
                        {...provided.dragHandleProps}
                      />
                      <CategoryInput
                        fieldId={category.categoryId || `new-${Date.now()}`}
                        defaultValue={category.categoryName || ''}
                        backgroundColor={category.color}
                        onSubmit={(newData) => {
                          if (category.categoryId) {
                            handleEditCategory(
                              category.categoryId,
                              newData.categoryName,
                              newData.color
                            );
                          } else {
                            handleSubmitNewCategory(newData);
                          }
                        }}
                        onDelete={() => {
                          if (category.categoryId) {
                            handleDeleteCategory(category.categoryId);
                          } else {
                            setNewCategoryFields(
                              newCategoryFields.filter(
                                (item) => item.id !== category.id
                              )
                            );
                          }
                        }}
                        existingCategories={categories}
                      />
                    </S.CategoryRow>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </S.Container>
          )}
        </Droppable>
      </DragDropContext>

      <S.ButtonContainer>
        <ControlBtn
          text="추가"
          onClick={addCategoryField}
          disabled={isSubmitting}
        />
        {errorMessage && (
          <S.ErrorMessage className={isErrorAnimating ? 'shake' : ''}>
            {errorMessage}
          </S.ErrorMessage>
        )}
      </S.ButtonContainer>
    </>
  );
};

export default ModCategory;
