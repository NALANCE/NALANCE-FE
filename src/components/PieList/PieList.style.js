import styled from "styled-components";

export const ItemContainer = styled.div`
  overflow-y: scroll;

  width: 85%;
  height: 16rem; // 4개까지 표시되도록

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 4rem;

  &::-webkit-scrollbar {
    width: 0.2rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #868686;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-track {
    background-color: white;
  }
`;

export const ItemWrapper = styled.div`
  border-bottom: 0.5px solid #868686;
  width: 22.3rem;
  height: 4.4rem;
  flex-shrink: 0;

  padding: 2px 10px;

  display: flex;
  align-items: center;

  .itemBar {
    width: 156px;
  }
`;

export const NoItemWrapper = styled.div`
  border-bottom: 0.5px solid #868686;
  width: 22.3rem;
  height: 4.4rem;

  padding: 2px 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 4rem;
`;

export const CategoryItem = styled.span`
  font-size: 1.8rem;

  margin-right: 0.5rem;
`;

export const CatWrapper = styled.div`
  margin-top: 2rem;
`;
