import styled from "styled-components";
import triangleBtn from "assets/icons/triangleBtn.svg";

export const Container = styled.div`
  position: relative;
  display: inline-block; /* 이미지 크기에 맞게 div가 조정되도록 설정 */
  text-align: center; /* 텍스트를 중앙 정렬 */
`;

export const Image = styled.img`
  display: block;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.btnDark};
  }
`;

export const Text = styled.p`
  position: absolute;
  top: 50%;
  left: 45%;
  transform: translate(-50%, -50%);
  margin: 0;
  font-family: "Freesentation", sans-serif;
  font-weight: 600;
  font-size: 20px; /* 필요에 따라 텍스트 크기를 조정 */
  color: ${({ theme }) => theme.colors.white};
`;

