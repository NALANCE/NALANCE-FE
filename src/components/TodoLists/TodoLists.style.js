import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
`;

export const TodoText = styled.span`
  font-size: 16px;
  width: 60%;
`;

export const Time = styled.span`
  font-size: 16px;
  cursor: pointer;
  width: 60px; /* Increase the width to ensure visibility */
  &:hover {
    text-decoration: underline;
  }
`;
