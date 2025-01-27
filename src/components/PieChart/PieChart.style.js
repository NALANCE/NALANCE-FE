import styled from "styled-components";

export const ChartContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;
`;

export const ChartWrapper = styled.div`
  width: 100%;
  height: 22.8rem;
`;

export const LegendContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export const LegendWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
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
