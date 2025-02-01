import styled, { keyframes } from "styled-components";

// 애니메이션 정의
const skeletonGradient = keyframes`
0% {
  background-color: rgba(165, 165, 165, 0.1);
}
50% {
  background-color: rgba(165, 165, 165, 0.2);
}
100% {
  background-color: rgba(165, 165, 165, 0.1);
}
`;

export const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SkeletonCircle = styled.div`
  width: 227px;
  height: 227px;
  border-radius: 50%;

  margin-top: 5.9rem;
  margin-bottom: 4rem;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  animation: ${skeletonGradient} 1.8s infinite ease-in-out;
`;

export const SkeletonBox = styled.div`
  width: 305px;
  height: 62px;
  border-radius: 5px;

  margin-bottom: 4rem;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  animation: ${skeletonGradient} 1.8s infinite ease-in-out;
`;

export const SkeletonCat = styled.div`
  width: 185px;
  height: 95px;
  border-radius: 20px;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  animation: ${skeletonGradient} 1.8s infinite ease-in-out;
`;
