import styled from 'styled-components';

export const Question = styled.div`
  display: flex;
  padding: 0px 30px;
  align-items: center;
  gap: 6px;
  align-self: stretch;
  cursor: pointer;
  border-bottom: 0.2px solid ${({ theme }) => theme.colors.black};

  -webkit-tap-highlight-color: transparent; /* 모바일 클릭 시 배경 하이라이트 제거 */
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 50px;
  letter-spacing: 0.36px;
  font-family: 'HumanExpo', sans-serif;
`;

export const QuestionText = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  font-style: normal;
  font-weight: 410;
  line-height: 40px;
  letter-spacing: 0.64px;

  width: max-content;
  white-space: nowrap;
`;

export const Arrow = styled.img`
  width: 12px;
  height: 12px;
  transition: transform 0.2s ease;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(90deg)' : 'rotate(0deg)')};
`;

export const Answer = styled.div`
  display: flex;
  margin-top: 6px;
  padding: 0 30px;
  gap: 7px;
`;

export const AnswerText = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  font-style: normal;
  font-weight: 410;
  line-height: 40px;
  letter-spacing: 0.64px;

  width: max-content;
`;
