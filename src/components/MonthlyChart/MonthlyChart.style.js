import styled from "styled-components";

export const ChartDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100%;
`;

export const Line = styled.div`
  background-color: #d9d9d9;

  width: 32.5rem;
  height: 0.03rem;

  margin-top: ${(props) => props.marginTop};
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 3.6rem;
  height: 3.6rem;

  margin-top: 2rem;
`;

export const ChartWrapper = styled.div`
  width: 200px;
  height: 200px;

  align-content: center;
  flex: 1;
  text-align: -webkit-center;
`;
