import styled from "styled-components";

export const ItemContainer = styled.div`
  overflow: scroll;
  height: 20rem; // 4개까지 표시되도록
`;

export const ItemWrapper = styled.div`
  border-bottom: 1px solid #868686;
  width: 22.3rem;
  height: 4.4rem;

  padding: 2px 10px;

  display: flex;
  align-items: center;
`;

export const CategoryItem = styled.span`
  font-size: 1.8rem;

  margin-right: 1rem;
`;
