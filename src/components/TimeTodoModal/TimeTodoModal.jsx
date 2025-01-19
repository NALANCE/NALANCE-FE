import React, { useState } from 'react';
import * as S from './TimeTodoModal.style';

const TimeTodoModal = ({ onClose, onTimeUpdate }) => {
  const [startHour, setStartHour] = useState('');
  const [startMinute, setStartMinute] = useState('');
  const [endHour, setEndHour] = useState('');
  const [endMinute, setEndMinute] = useState('');

  const handleUpdateClick = () => {
    const startTime = parseInt(startHour) * 60 + parseInt(startMinute);
    const endTime = parseInt(endHour) * 60 + parseInt(endMinute);
    const duration = endTime - startTime;
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    const timeString = `${hours}H${minutes.toString().padStart(2, '0')}M`;
    onTimeUpdate(timeString);
  };


  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.Input
          type="number"
          value={startHour}
          onChange={(e) => setStartHour(e.target.value)}
          placeholder="Start Hour"
        />
        <S.Input
          type="number"
          value={startMinute}
          onChange={(e) => setStartMinute(e.target.value)}
          placeholder="Start Minute"
        />
        <S.Input
          type="number"
          value={endHour}
          onChange={(e) => setEndHour(e.target.value)}
          placeholder="End Hour"
        />
        <S.Input
          type="number"
          value={endMinute}
          onChange={(e) => setEndMinute(e.target.value)}
          placeholder="End Minute"
        />
        <S.Button onClick={handleUpdateClick}>Update Time</S.Button>
        <S.Button onClick={onClose}>Close</S.Button>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default TimeTodoModal;
