import React, { useState } from 'react';
import confirm_modal from 'assets/icons/confirm_modal.svg';
import * as S from './TodoModal.style';

const TodoModal = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleAddClick = () => {
    if (newTodo.trim()) {
      onAddTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <S.ModalOverlay>
      <S.ModalContainer>
      <S.SvgWrapper>
        <img src={confirm_modal} alt="Confirm Modal Icon" />
        <S.ModalContent>
            <S.Input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Enter new todo"
            />
            <S.Button onClick={handleAddClick}>추가</S.Button>
        </S.ModalContent>
        </S.SvgWrapper> 
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};

export default TodoModal;
