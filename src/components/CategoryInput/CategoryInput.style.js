import styled, { keyframes } from 'styled-components';

//애니메이션
export const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

const shake = keyframes`
  0% { transform: translate( 0); }
  25% { transform: translate(-1px); }
  50% { transform: translate(1px); }
  75% { transform: translate(-1px); }
  100% { transform: translate( 0); }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 20;
  width: 100%;
  padding-bottom: 10px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  width: auto;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  min-width: 2px;
  padding: 0px 13px;
  gap: 6px;
  background: ${({ backgroundColor }) => backgroundColor};
  border-radius: 10px;
  border: 0.3px solid var(--category_outline, #6f6f6f);
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
  transition: width 0.2s ease;
  box-sizing: border-box;

  overflow: hidden;
  white-space: nowrap;
`;

export const ArrowIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10px;
  height: 10px;
`;

export const InputField = styled.input`
  color: ${({ theme }) => theme.colors.black};
  font-family: 'Freesentation', sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 40px;
  text-align: center;
  border: none;
  outline: none;
  background: transparent;

  min-width: 2px;
  max-width: 100%;
  padding: 0;
  margin: 0;
  letter-spacing: 0.9px;

  /* 말줄임표 처리 */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const DisplayText = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 2px;
`;

export const ErrorMessage = styled.div`
  color: #b3261e;

  font-family: 'Freesentation', sans-serif;
  font-size: 11px;
  font-style: normal;
  font-weight: 410;
  line-height: 16px;
  letter-spacing: 0.44px;
  text-align: left;
  margin-top: 6px;
  animation: ${({ className }) => (className === 'shake' ? shake : 'none')} 0.4s
    ease;
`;
