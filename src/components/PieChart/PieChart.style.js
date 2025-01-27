import styled from "styled-components";

export const ChartContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;

  margin-top: 0.5rem;
`;

export const ChartWrapper = styled.div`
  width: 100%;
  height: 22.8rem;
`;

export const LegendContainer = styled.div`
  display: ${(props) => (props.itemCount < 5 ? "flex" : "grid")};
  grid-template-columns: repeat(5, 1fr);
  gap: 10px 0.3rem;

  overflow: scroll;
  width: 30.2rem;
  height: 4.2rem;

  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-right: ${(props) => (props.itemCount < 5 ? "0.3rem" : "0")};

  margin-top: 5rem;
`;

export const LegendWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CircleDiv = styled.div`
  width: 13px;
  height: 13px;
  background: ${(props) => props.color};
  border-radius: 50%;

  margin-right: 0.6rem;
`;

export const CategoryItem = styled.p`
  font-size: 1.6rem;
`;
