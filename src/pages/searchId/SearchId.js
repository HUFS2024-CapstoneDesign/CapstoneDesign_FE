import React from 'react';
import S from './style.js'

const SearchId = () => {
  return (
    <S.Background>
      <S.H1>아이디 찾기</S.H1>
      <S.Input type='text' placeholder="닉네임 입력 : "/>
      <S.SubmitButton>완료</S.SubmitButton>
    </S.Background>
  );
};

export default SearchId;