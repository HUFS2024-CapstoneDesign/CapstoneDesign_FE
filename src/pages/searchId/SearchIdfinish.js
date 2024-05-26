import React from 'react';
import S from './style.js';
import { NavLink } from 'react-router-dom';

const SearchIdfinish = () => {
  return (
    <S.Background>
      <S.H1>아이디 찾기</S.H1>
      <S.IdSearchContainer>
        <S.ResultP>아이디 찾기 결과</S.ResultP>
        <S.P>abc****</S.P>
        <S.SubP>개인정보보호를 위해 아이디 뒷자리는 ***로 표시됩니다.</S.SubP>
      </S.IdSearchContainer>
      <NavLink to={"/login"}>
          <S.LoginButton>로그인하러 가기</S.LoginButton>
      </NavLink>
    </S.Background>
  );
};

export default SearchIdfinish;