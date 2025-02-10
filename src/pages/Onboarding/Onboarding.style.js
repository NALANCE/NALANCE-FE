import styled from "styled-components";

export const OnboardingContainer = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0px 58px;

  height: 100dvh;

  position: relative;
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > :nth-child(2) {
    margin-top: 8px;
  }
`;
