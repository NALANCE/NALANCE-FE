import React, { useState, useEffect, useRef } from 'react';
import * as S from './TodoLists.style';
import TimeTodoModal from 'components/TimeTodoModal/TimeTodoModal';

const TodoLists = ({ todos, onTodoTextChange, onTimeUpdate, category, date, onDeleteTodo, fetchTodos }) => {
  const [isTimeModalOpen, setIsTimeModalOpen] = useState(false);
  const [currentTodoIndex, setCurrentTodoIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const lastTodoRef = useRef(null);
  const focusDisabled = useRef(false);

  // 렌더링 후 마지막 투두에 포커스 처리
  // useEffect(() => {
  //   if (lastTodoRef.current && !focusDisabled.current) {
  //     lastTodoRef.current.focus();
  //   }
  // }, [todos]);

  const openTimeModal = (index) => {
    const todo = todos[index];
    if (!todo || !todo.todoId) {
      console.error(`🚨 Error: todoId가 존재하지 않습니다! index: ${index}, todo:`, todo);
      return;
    }

    setCurrentTodoIndex(todo.todoId); // todoId 저장
    setIsTimeModalOpen(true);
  };

  const handleTimeUpdate = (todoId, startTime, endTime) => {
    if (!todoId) {
      console.error("🚨 Error: todoId가 존재하지 않습니다!");
      return;
    }

    onTimeUpdate(todoId, startTime, endTime);
    setIsTimeModalOpen(false);
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
              onBlur={(e) => setExpandedIndex(null)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  focusDisabled.current = true;
                  e.target.blur();
                  const newText = e.target.innerText.trim();
                  
                  if (newText === "") {
                    // 🛑 내용이 없으면 삭제 실행
                    if (todos[index]?.todoId) {
                      onDeleteTodo(todos[index].categoryId, todos[index].todoId);
                    }
                  } else {
                    // ✅ 내용이 있으면 수정 실행
                    const newStatus = 2;
                    if (todos[index].name !== newText) {
                      onTodoTextChange(index, newText, newStatus, todos[index]?.todoId);
                    }
                  }

                  setExpandedIndex(null);
                  setTimeout(() => {
                    focusDisabled.current = false;
                  }, 100);
                }
              }}
              onClick={(e) => {
                setExpandedIndex(index === expandedIndex ? null : index);
                const range = document.createRange();
                const sel = window.getSelection();
                range.selectNodeContents(e.target);
                range.collapse(false);
                sel.removeAllRanges();
                sel.addRange(range);
              }}
              ref={index === todos.length - 1 ? lastTodoRef : null}
              expanded={expandedIndex === index ? "true" : undefined} 
            >
              {expandedIndex === index ? todo.name : todo.name.length > 13 ? `${todo.name.slice(0, 13)}...` : todo.name}
            </S.TodoText>
          </S.ErrorWrapper>
          
          {/* ✅ formattedDuration 값 활용 */}
          <S.Time onClick={() => openTimeModal(index)}>
            {todo.formattedDuration || '0H00M'}
          </S.Time>
        </S.ListItem>
      ))}

      {isTimeModalOpen && (
        <TimeTodoModal
          onClose={() => setIsTimeModalOpen(false)}
          onTimeUpdate={handleTimeUpdate}
          todoId={currentTodoIndex}
          date={date}
          startTime={todos.find(todo => todo.todoId === currentTodoIndex)?.startTime}
          endTime={todos.find(todo => todo.todoId === currentTodoIndex)?.endTime}
          fetchTodos={fetchTodos}
          categoryId={category.categoryId}
        />
      )}
    </S.ListContainer>
  );
};

export default TodoLists;
