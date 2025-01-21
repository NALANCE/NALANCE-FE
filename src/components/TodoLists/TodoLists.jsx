import React, { useState, useEffect, useRef } from 'react';
import * as S from './TodoLists.style';
import TimeTodoModal from 'components/TimeTodoModal/TimeTodoModal';

const TodoLists = ({ todos, onTodoTextChange }) => {
  const [isTimeModalOpen, setIsTimeModalOpen] = useState(false);
  const [currentTodoIndex, setCurrentTodoIndex] = useState(null);
  const [times, setTimes] = useState(new Array(todos.length).fill(''));
  const [errors, setErrors] = useState(new Array(todos.length).fill('')); // 에러 메시지 상태 추가
  const [expandedIndex, setExpandedIndex] = useState(null); // 확장된 텍스트 인덱스 상태 추가
  const lastTodoRef = useRef(null);
  const focusDisabled = useRef(false); // 포커스 비활성화 여부

  // 렌더링 후 마지막 투두에 포커스 처리
  useEffect(() => {
    if (lastTodoRef.current && !focusDisabled.current) {
      lastTodoRef.current.focus();
    }
  }, [todos]);

  const openTimeModal = (index) => {
    setCurrentTodoIndex(index);
    setIsTimeModalOpen(true);
  };

  const handleTimeUpdate = (index, time) => {
    if (time === '0H00M') {
      const newErrors = [...errors];
      newErrors[index] = '시간을 입력해주세요';
      setErrors(newErrors);
    } else {
      const newTimes = [...times];
      newTimes[index] = time;
      setTimes(newTimes);

      const newErrors = [...errors];
      newErrors[index] = '';
      setErrors(newErrors);
    }
    setIsTimeModalOpen(false);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (e.nativeEvent.isComposing) return;

      focusDisabled.current = true; // 포커스 비활성화
      e.target.blur(); // 포커스 해제
      onTodoTextChange(index, e.target.innerText);
      setExpandedIndex(null); // 텍스트 수정 후 확장 상태 해제

      setTimeout(() => {
        focusDisabled.current = false; // 포커스 비활성화 해제
      }, 100);
    }
  };

  const handleBlur = (e, index) => {
    onTodoTextChange(index, e.target.innerText);
    setExpandedIndex(null); // 텍스트 수정 후 확장 상태 해제
  };

  const handleTextClick = (index, e) => {
    setExpandedIndex(index === expandedIndex ? null : index);
    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(e.target);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);
  };

  return (
    <S.ListContainer>
      {todos.map((todo, index) => (
        <S.ListItem key={index}>
          <S.Checkbox type="checkbox" />
          <S.ErrorWrapper>
            <S.TodoText
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => handleBlur(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onClick={(e) => handleTextClick(index, e)}
              ref={index === todos.length - 1 ? lastTodoRef : null}
              expanded={expandedIndex === index}
            >
              {expandedIndex === index ? todo : todo.length > 13 ? `${todo.slice(0, 13)}...` : todo}
            </S.TodoText>
            {errors[index] && <S.ErrorMessage>{errors[index]}</S.ErrorMessage>}
          </S.ErrorWrapper>
          <S.Time onClick={() => openTimeModal(index)}>
            {times[index] || '0H00M'}
          </S.Time>
          
        </S.ListItem>
      ))}
      {isTimeModalOpen && (
        <TimeTodoModal
          onClose={() => setIsTimeModalOpen(false)}
          onTimeUpdate={(time) => handleTimeUpdate(currentTodoIndex, time)}
        />
      )}
    </S.ListContainer>
  );
};

export default TodoLists;