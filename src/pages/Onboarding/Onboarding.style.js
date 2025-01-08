import styled from "styled-components";

export const OnboardingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > :nth-child(2) {
    margin-top: 8px;
  }
`;
