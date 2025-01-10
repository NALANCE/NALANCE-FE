import styled from "styled-components";

export const NotificationContainer = styled.div`
  position: relative;

  background: #f0f2f0;
  border-radius: 13px;

  width: ${(props) => props.width};
  height: ${(props) => props.height};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0.2);

  // 말풍선 꼬리부분
  &:after {
    content: ""; // 아무 내용 없는 박스 생성
    position: absolute;

    top: 2%; // 상단
    left: ${(props) => props.left}; // 꼬리 위치

    width: 15px; // 삼각형 넓이
    height: 15px; // 삼각형 높이

    background: #f0f2f0;
    clip-path: polygon(50% 0%, 100% 100%, 0% 100%);

    transform: translate(-50%, -100%);

    box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  }

  h1 {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.error};
    line-height: 17px;
    letter-spacing: 1px;
    text-align: center;
  }
`;
