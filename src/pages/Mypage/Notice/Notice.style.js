import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 20px;

  height: 630px;
  box-sizing: border-box;

  padding-top: clamp(10px, 130px, 130px);
`;
