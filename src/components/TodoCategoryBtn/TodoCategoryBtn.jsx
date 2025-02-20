import React, { useState, useRef, useEffect } from 'react';
import * as S from './TodoCategoryBtn.style';
import arrowSvg from 'assets/icons/category_arrow.svg';
import categoryAdd1 from 'assets/icons/category_add1.svg'; // category_add1 아이콘 임포트

const TodoCategoryBtn = ({
  defaultValue = '',
  onAddTodo, // onAddTodo prop 추가
  color, // color prop 추가
}) => {
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const [text, setText] = useState(defaultValue); // defaultValue를 상태로 설정
  const [showTodoList, setShowTodoList] = useState(false); // TodoList 표시 여부 상태
  const [newTodo, setNewTodo] = useState(''); // 새로운 Todo 상태 추가

  // 입력 창 너비 조정 함수
  const adjustContainerWidth = (inputValue) => {
    const container = containerRef.current;
    if (container) {
      const length = Math.min(inputValue.length, 5);
      container.style.width = `${Math.max(40, 40 + length * 17.9)}px`;
    }
  };

  useEffect(() => {
    adjustContainerWidth(defaultValue);
  }, [defaultValue]);

  const handleAddIconClick = () => {
    console.log("Add icon clicked for category:", defaultValue);
    onAddTodo(); // 모달 열기
  };

  // Todo 추가 함수
  const handleAddTodo = () => {
    if (newTodo.trim()) {
      onAddTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <>
      <S.Wrapper>
        <S.CategoryWrapper>
          <S.Container
            ref={containerRef}
            backgroundColor={color} // color prop 사용
            onClick={() => inputRef.current.focus()}
          >
            <S.ArrowIcon>
              <img src={arrowSvg} alt="화살표 아이콘" />
            </S.ArrowIcon>
            <S.DisplayText>{text}</S.DisplayText> {/* 텍스트 표시 */}
          </S.Container>
          <S.AddIcon onClick={handleAddIconClick}>
            <img src={categoryAdd1} alt="Add Category" />
          </S.AddIcon>
        </S.CategoryWrapper>
      </S.Wrapper>
    </>
  );
};

export default TodoCategoryBtn;