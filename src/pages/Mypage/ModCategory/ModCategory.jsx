import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import PageTitle from 'components/common/PageTitle/PageTitle';
import ControlBtn from 'components/common/ControlBtn/ControlBtn';
import CategoryInput from 'components/CategoryInput/CategoryInput';
import * as S from './ModCategory.style';
import DragHandleIcon from 'assets/icons/category_drag_handle.svg';

const MAX_CATEGORIES = 10;

// 초기 더미 데이터
const initialFields = [
  { id: 1, name: '가족' },
  { id: 2, name: '학업' },
  { id: 3, name: '여행' },
];

const ModCategory = () => {
  const [categories, setCategories] = useState([]);
  const [inputFields, setInputFields] = useState(initialFields); // 더미 데이터로 초기화
  const [errorMessage, setErrorMessage] = useState('');
  const [isErrorAnimating, setIsErrorAnimating] = useState(false);

  const addCategory = () => {
    if (categories.length + inputFields.length >= MAX_CATEGORIES) {
      setErrorMessage('카테고리는 최대 10개까지 생성 가능합니다.');
      triggerErrorAnimation();
      return;
    }
    setInputFields([...inputFields, { id: Date.now(), name: '' }]);
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
    }, 500);
  };

  const onDragEnd = ({ source, destination }) => {
    if (!destination) return;

    const reorderedFields = Array.from(inputFields);
    const [movedItem] = reorderedFields.splice(source.index, 1);
    reorderedFields.splice(destination.index, 0, movedItem);
    setInputFields(reorderedFields);
  };

  return (
    <>
      <PageTitle pageTitle="카테고리 수정" />

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="categories">
          {(provided) => (
            <S.Container ref={provided.innerRef} {...provided.droppableProps}>
              {inputFields.map((field, index) => (
                <Draggable
                  key={field.id}
                  draggableId={field.id.toString()}
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
                        defaultValue={field.name} // 기본 값 전달
                        onSubmit={(newCategory) =>
                          handleAddCategory(newCategory, field.id)
                        }
                        onDelete={() => handleDeleteInputField(field.id)}
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

export default ModCategory;
