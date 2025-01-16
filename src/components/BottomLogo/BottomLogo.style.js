import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 266px;
  height: 46px;
  flex-shrink: 0;
`;

export const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain; /* 이미지 비율 유지 */
`;
