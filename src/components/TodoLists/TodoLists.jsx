import React, { useState } from 'react';
import * as S from './TodoLists.style';
import TimeTodoModal from 'components/TimeTodoModal/TimeTodoModal';

const TodoLists = ({ todos }) => {
  const [isTimeModalOpen, setIsTimeModalOpen] = useState(false);
  const [currentTodoIndex, setCurrentTodoIndex] = useState(null);
  const [times, setTimes] = useState(new Array(todos.length).fill(''));
 
  const openTimeModal = (index) => {
    setCurrentTodoIndex(index);
    setIsTimeModalOpen(true);
  };

  const handleTimeUpdate = (index, time) => {
    const newTimes = [...times];
    newTimes[index] = time;
    setTimes(newTimes);
    setIsTimeModalOpen(false);
  };

  return (
    <S.ListContainer>
      {todos.map((todo, index) => (
        <S.ListItem key={index}>
          <S.Checkbox type="checkbox" />
          <S.TodoText>{todo}</S.TodoText>
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