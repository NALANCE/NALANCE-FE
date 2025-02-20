import React, { useState, useEffect } from 'react';
import * as S from './TimeTodoModal.style';
import time_modal from 'assets/icons/time_modal.svg';
import timemodalinput from 'assets/icons/timemodal_input.svg';
import ControlBtn from 'components/common/ControlBtn/ControlBtn';
import axiosInstance from "apis/defaultAxios";

const TimeTodoModal = ({ onClose, onTimeUpdate, todoId, date, startTime, endTime, fetchTodos, categoryId }) => {
  // console.log("🧐 TimeTodoModal이 받은 todoId:", todoId);

  // startTime과 endTime이 존재하면 ":" 기준으로 분리하여 시(hour)와 분(minute) 추출
  const extractTime = (time) => {
    if (!time) return ["00", "00"];
    const [hour, minute] = time.split(':');
    return [hour.padStart(2, '0'), minute.padStart(2, '0')];
  };

  const [startHour, setStartHour] = useState("00");
  const [startMinute, setStartMinute] = useState("00");
  const [endHour, setEndHour] = useState("00");
  const [endMinute, setEndMinute] = useState("00");
  const [error, setError] = useState('');

  // 🟢 useEffect를 사용하여 startTime과 endTime이 변경될 때 state 업데이트
  useEffect(() => {
    if (startTime) {
      const [hour, minute] = extractTime(startTime);
      setStartHour(hour);
      setStartMinute(minute);
    }
    if (endTime) {
      const [hour, minute] = extractTime(endTime);
      setEndHour(hour);
      setEndMinute(minute);
    }
  }, [startTime, endTime]); // startTime 또는 endTime이 변경될 때마다 실행

  const handleUpdateClick = async () => {
    if (!todoId) {
      console.error("🚨 Error: todoId가 존재하지 않습니다!");
      return;
    }
  
    if (!date) {
      console.error("🚨 Error: date가 존재하지 않습니다!");
      return;
    }
  
    const newStartTime = `${startHour}:${startMinute.padStart(2, '0')}`;
    const newEndTime = `${endHour}:${endMinute.padStart(2, '0')}`;
  
    const startTotalMinutes = parseInt(startHour) * 60 + parseInt(startMinute);
    const endTotalMinutes = parseInt(endHour) * 60 + parseInt(endMinute);
  
    if (endTotalMinutes <= startTotalMinutes) {
      setError("시간을 올바르게 설정해주세요.");
      return;
    }
  
    // console.log(`✅ PATCH 요청: /api/v0/todos/${todoId}`, { newStartTime, newEndTime, date });
  
    try {
      // 🟢 서버에 시간 업데이트 요청 (PATCH)
      const accessToken = localStorage.getItem("accessToken");
      await axiosInstance.patch(`/api/v0/todos/${todoId}`, {
        startTime: newStartTime,
        endTime: newEndTime,
        date,
      }, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
  
      // console.log("✅ Time update 성공!");
  
      // 🔥 최신 Todo 데이터를 다시 가져오기 (GET 요청 실행)
      await fetchTodos(date, categoryId);
  
      // 모달 닫기
      onClose();
  
    } catch (error) {
      console.error("🚨 Time update 실패:", error);
    }
  };

  return (
    <S.ModalOverlay>
      <S.ModalContainer>
        <S.SvgWrapper>
          {/* <img src={time_modal} alt="Time Modal Icon" style={{ zIndex: -1 }} /> */}
          <S.ModalContent>
            <S.Title>시간 설정</S.Title>
            <S.TimeWrapper>
              <S.TimeTitle>시작 시간</S.TimeTitle>
              <S.TimeInputWrapper>
                <img src={timemodalinput} alt="Time Modal Input Icon" />
                <S.Input type="number" value={startHour} onChange={(e) => setStartHour(e.target.value)} min="0" max="23" />
                <S.Input type="number" value={startMinute} onChange={(e) => setStartMinute(e.target.value)} min="0" max="59" />
              </S.TimeInputWrapper>
            </S.TimeWrapper>
            <S.TimeWrapper>
              <S.TimeTitle>마무리 시간</S.TimeTitle>
              <S.TimeInputWrapper>
                <img src={timemodalinput} alt="Time Modal Input Icon" />
                <S.Input type="number" value={endHour} onChange={(e) => setEndHour(e.target.value)} min="0" max="23" />
                <S.Input type="number" value={endMinute} onChange={(e) => setEndMinute(e.target.value)} min="0" max="59" />
              </S.TimeInputWrapper>
            </S.TimeWrapper>
            <S.ErrorText>{error || '\u00A0'}</S.ErrorText>
            <ControlBtn text="확인" onClick={handleUpdateClick} />
          </S.ModalContent>
        </S.SvgWrapper>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};

export default TimeTodoModal;
