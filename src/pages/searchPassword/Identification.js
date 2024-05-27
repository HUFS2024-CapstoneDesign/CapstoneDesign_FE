import React from 'react';
import S from './style.js'

const Identification = () => {
  return (
    <S.Background>
      <S.H1>비밀번호 찾기</S.H1>
      <S.InputContainer>
        <S.IdContainer>
        <S.IdInput type='text' placeholder='아이디를 입력해주세요'/>
        <S.OverlapButton>인증번호 발송</S.OverlapButton>
        </S.IdContainer>
        <S.Input type='text' placeholder='인증번호'/>
      </S.InputContainer>
      <S.SubmitButton>확인</S.SubmitButton>
    </S.Background>
  );
};

export default Identification;