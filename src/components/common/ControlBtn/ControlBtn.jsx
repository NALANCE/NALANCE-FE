import React from 'react';
import * as S from './ControlBtn.style';
import { useTheme } from 'styled-components';

const ControlBtn = ({ text, onClick, isDisabled, status }) => {
  const theme = useTheme();

  // 동적 스타일 결정
  const getBackgroundColor = () => {
    if (text === '전송' || text === '재전송' || text === '확인') {
      if (status === 'Completed') return '#D9D9D9';
      if (text === '재전송' && !isDisabled) return '#6B6B6B';
      return isDisabled ? theme.colors.btnLight : theme.colors.btnDark;
    }
    return undefined; // 다른 텍스트일 때는 기본 스타일 유지
  };

  const getTextColor = () => {
    if (text === '전송' || text === '재전송' || text === '확인') {
      if (status === 'Completed') return theme.colors.grayB6;
      return theme.colors.white;
    }
    return undefined; // 다른 텍스트일 때는 기본 색상 유지
  };

  const isButtonClickable = () => {
    if (text === '전송' || text === '재전송' || text === '확인') {
      return !isDisabled && status !== 'Completed';
    }
    return true; // 다른 텍스트일 때는 기본적으로 클릭 가능
  };

  return (
    <S.StyledButton
      onClick={isButtonClickable() ? onClick : undefined}
      disabled={!isButtonClickable()}
      style={{
        backgroundColor: getBackgroundColor(),
        color: getTextColor(),
        cursor: isButtonClickable() ? 'pointer' : 'not-allowed',
      }}
    >
      {text}
    </S.StyledButton>
  );
};

export default ControlBtn;
