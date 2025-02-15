import styled from "styled-components";
import { motion } from "framer-motion";

export const NotificationContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: ${(props) => props.$hasWidth && "14.4rem"};
  height: ${(props) => props.$hasWidth && "6.1rem"};

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
