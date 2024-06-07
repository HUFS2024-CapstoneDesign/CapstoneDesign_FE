import React from 'react';
import S from './style.js';
import logo from '../../global/logo/logo.png'

const ConfirmDialog = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <S.ModalOverlay>
      <S.ModalWrapper>
        <S.Modal>
        <S.Image src={logo} />
          <p>탈퇴하시면 캣치헬스에 등록되어있던 모든 데이터를 잃게 됩니다. <br />
              정말 탈퇴하시겠습니까?</p>
          <S.ModalButtonContainer>
            <S.DeleteButton onClick={onConfirm}>탈퇴하기</S.DeleteButton>
            <S.CancleButton onClick={onClose}>취소하기</S.CancleButton>
          </S.ModalButtonContainer>
        </S.Modal>
      </S.ModalWrapper>
    </S.ModalOverlay>
  );
};

export default ConfirmDialog;
