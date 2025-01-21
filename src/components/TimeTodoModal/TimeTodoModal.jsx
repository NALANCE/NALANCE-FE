import React, { useState, useEffect } from 'react';
import * as S from './TimeTodoModal.style';
import time_modal from 'assets/icons/time_modal.svg';
import timemodalinput from 'assets/icons/timemodal_input.svg';
import ControlBtn from 'components/common/ControlBtn/ControlBtn';

const TimeTodoModal = ({ onClose, onTimeUpdate }) => {
  const [startHour, setStartHour] = useState('00');
  const [startMinute, setStartMinute] = useState('00');
  const [endHour, setEndHour] = useState('00');
  const [endMinute, setEndMinute] = useState('00');
  const [error, setError] = useState('');

  useEffect(() => {
    const savedStartHour = localStorage.getItem('startHour');
    const savedStartMinute = localStorage.getItem('startMinute');
    const savedEndHour = localStorage.getItem('endHour');
    const savedEndMinute = localStorage.getItem('endMinute');

    if (savedStartHour) setStartHour(savedStartHour);
    if (savedStartMinute) setStartMinute(savedStartMinute);
    if (savedEndHour) setEndHour(savedEndHour);
    if (savedEndMinute) setEndMinute(savedEndMinute);
  }, []);

  const handleUpdateClick = () => {
    if (startHour && startMinute && endHour && endMinute) {
      const startTime = parseInt(startHour) * 60 + parseInt(startMinute);
      const endTime = parseInt(endHour) * 60 + parseInt(endMinute);
      const duration = endTime - startTime;

      if (duration < 0) {
        setError('시간을 올바르게 설정해주세요.');
        return;
      }

      const hours = Math.floor(duration / 60);
      const minutes = duration % 60;
      const timeString = `${hours}H${minutes.toString().padStart(2, '0')}M`;
      onTimeUpdate(timeString);

      localStorage.setItem('startHour', startHour);
      localStorage.setItem('startMinute', startMinute);
      localStorage.setItem('endHour', endHour);
      localStorage.setItem('endMinute', endMinute);

      setError('');
    }
  };

  return (
    <S.ModalOverlay>
      <S.ModalContainer>
        <S.SvgWrapper>
          <img src={time_modal} alt="time Modal Icon" style={{ zIndex: -1 }} />
          <S.ModalContent>
            <S.Title>시간</S.Title>
            <S.TimeWrapper>
              <S.TimeTitle>시작 시간</S.TimeTitle>
              <S.TimeInputWrapper>
              <img src={timemodalinput} alt="time Modal Input Icon" />
              <S.Input
                type="number"
                value={startHour}
                onChange={(e) => setStartHour(e.target.value)}
                min="0"
                max="24"
              />
              <S.Input
                type="number"
                value={startMinute}
                onChange={(e) => setStartMinute(e.target.value)}
                min="0"
                max="60"
              />
              </S.TimeInputWrapper>
            </S.TimeWrapper>
            <S.TimeWrapper>
              <S.TimeTitle>마무리 시간</S.TimeTitle>
              <S.TimeInputWrapper>
              <img src={timemodalinput} alt="time Modal Input Icon" />
              <S.Input
                type="number"
                value={endHour}
                onChange={(e) => setEndHour(e.target.value)}
                min="0"
                max="24"
              />
              <S.Input
                type="number"
                value={endMinute}
                onChange={(e) => setEndMinute(e.target.value)}
                min="0"
                max="60"
              />
              </S.TimeInputWrapper>
            </S.TimeWrapper>
            <S.ErrorText>{error || '\u00A0'}</S.ErrorText> {/* 공백 추가 */}
            <ControlBtn text="확인" onClick={handleUpdateClick} />
          </S.ModalContent>
        </S.SvgWrapper>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};

export default TimeTodoModal;
