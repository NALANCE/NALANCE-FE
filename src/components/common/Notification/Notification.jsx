import { FlattenerSettings } from "igniteui-react-core";
import * as S from "./Notification.style";
import { motion } from "framer-motion";

const Notification = ({ img, isClicked, $hasWidth = false }) => {
  return (
    <>
      {isClicked && (
        <S.NotificationContainer
          initial={{ opacity: 0, y: 20 }} // 애니메이션 시작 상태
          animate={{ opacity: 1, y: 0 }} // 애니메이션 종료 상태
          exit={{ opacity: 0, y: 20 }} // 사라질 때 애니메이션
          transition={{
            opacity: { duration: 0.5 }, // opacity 애니메이션 시간 설정
            y: { duration: 0.5 }, // y 애니메이션 시간 설정
          }} // 애니메이션 지속 시간
          $hasWidth={$hasWidth}
        >
          <img src={img}></img>
        </S.NotificationContainer>
      )}
    </>
  );
};

export default Notification;
