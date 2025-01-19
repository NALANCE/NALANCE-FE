import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;

  height: clamp(155px, 100vh, 630px);
  box-sizing: border-box;

  padding-top: clamp(10px, 130px, 130px);
`;
