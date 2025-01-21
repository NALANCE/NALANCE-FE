import styled from "styled-components";
import { motion } from "framer-motion";

export const ChatContainer = styled.div`
  width: 24.8rem;
`;

export const ChatWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  margin-top: 3vh;
`;

export const CatWrapper = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FishWrapper = styled(motion.div)`
  margin-left: 50px;
`;
