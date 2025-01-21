import React from 'react';
import ReactDOM from 'react-dom';
import * as S from './ConfirmModal.style';
import ControlBtn from 'components/common/ControlBtn/ControlBtn';
import confirm_modal from 'assets/icons/confirm_modal.svg';
import { useNavigate } from 'react-router-dom';

const ConfirmModal = ({ isOpen, onClose, onConfirm, confirmLink, message }) => {
  const navigate = useNavigate();
  if (!isOpen) return null;

  const handleConfirm = () => {
    if (onConfirm) onConfirm();
    onClose();
    if (confirmLink) {
      setTimeout(() => {
        navigate(confirmLink);
      }, 300);
    }
  };

  const handleCancel = () => {
    onClose();
  };

  // 버튼 텍스트 동적 설정
  const isDeleteMessage = message.includes('삭제'); // "삭제" 키워드가 있는지 확인
  const confirmText = isDeleteMessage ? '삭제' : '네';
  const cancelText = isDeleteMessage ? '취소' : '아니요';

  return ReactDOM.createPortal(
    <S.ModalOverlay>
      <S.ModalContainer>
        <S.SvgWrapper>
          <img src={confirm_modal} alt="Confirm Modal Icon" />
          <S.ModalContent>
            <S.ModalText>{message}</S.ModalText>
            <S.ButtonContainer>
              <ControlBtn text={confirmText} onClick={handleConfirm} />
              <ControlBtn text={cancelText} onClick={handleCancel} />
            </S.ButtonContainer>
          </S.ModalContent>
        </S.SvgWrapper>
      </S.ModalContainer>
    </S.ModalOverlay>,
    document.getElementById('modal-root')
  );
};

export default ConfirmModal;
