import * as S from "./Notification.style";

const Notification = ({ width, height, left, text }) => {
  return (
    <>
      <S.NotificationContainer width={width} height={height} left={left}>
        <h1>{text}</h1>
      </S.NotificationContainer>
    </>
  );
};

export default Notification;
