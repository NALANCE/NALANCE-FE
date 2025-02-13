import React, { useState, useEffect, useRef } from 'react';
import * as S from './TodoLists.style';
import TimeTodoModal from 'components/TimeTodoModal/TimeTodoModal';
import axiosInstance from "apis/defaultAxios";  // ✅ API 요청을 위해 추가

const TodoLists = ({ todos, onTodoTextChange, onTimeUpdate, category, date, onDeleteTodo, fetchTodos }) => {
  const [isTimeModalOpen, setIsTimeModalOpen] = useState(false);
  const [currentTodoIndex, setCurrentTodoIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const lastTodoRef = useRef(null);
  const focusDisabled = useRef(false);

  const openTimeModal = (index) => {
    const todo = todos[index];
    if (!todo || !todo.todoId) {
      console.error(`🚨 Error: todoId가 존재하지 않습니다! index: ${index}, todo:`, todo);
      return;
    }

    setCurrentTodoIndex(todo.todoId);
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

  // ✅ 체크박스를 눌렀을 때 status 변경하는 함수
  const handleStatusChange = async (todoId, categoryId, isChecked) => {
    if (!todoId) {
      console.error("🚨 Error: todoId가 존재하지 않습니다!");
      return;
    }

    const newStatus = isChecked ? 1 : 2;
    console.log(`🟢 Status 업데이트 요청: todoId=${todoId}, newStatus=${newStatus}`);

    try {
      const accessToken = localStorage.getItem("accessToken");

      // 🟢 서버에 status 업데이트 요청
      await axiosInstance.post(`/api/v0/todos/${todoId}`, {
        todoId: todoId,
        status: newStatus,
      }, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      console.log("✅ Status 업데이트 성공!");

      // 🔥 최신 데이터를 다시 가져와서 UI 업데이트
      await fetchTodos(date, categoryId);

    } catch (error) {
      console.error("🚨 Status 업데이트 실패:", error);
    }
  };

  return (
    <S.ListContainer>
      {todos.map((todo, index) => (
        <S.ListItem key={index}>
          {/* ✅ 체크박스 클릭하면 handleStatusChange 실행 */}
          <S.Checkbox
            type="checkbox"
            checked={todo.status === 1}
            onChange={(e) => handleStatusChange(todo.todoId, todo.categoryId, e.target.checked)}
          />
          
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
                    if (todos[index]?.todoId) {
                      onDeleteTodo(todos[index].categoryId, todos[index].todoId);
                    }
                  } else {
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
