import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import S from './style.js';

const SearchIdfinish = () => {
  const location = useLocation();
  const email = location.state?.email || null;

  const maskEmail = (email) => {
    if (!email) return '아이디를 찾을 수 없습니다.';
    const [user, domain] = email.split('@');
    const maskedUser = user.length > 3 ? user.substring(0, user.length - 3) + '***' : '***';
    return `${maskedUser}@${domain}`;
  };

  return (
    <S.Background>
      <S.H1>아이디 찾기</S.H1>
      <S.IdSearchContainer>
        <S.ResultP>아이디 찾기 결과</S.ResultP>
        <S.P>{maskEmail(email)}</S.P>
        {email && <S.SubP>개인정보보호를 위해 아이디 뒷자리는 ***로 표시됩니다.</S.SubP>}
      </S.IdSearchContainer>
      <NavLink to={"/login"}>
          <S.LoginButton>로그인하러 가기</S.LoginButton>
      </NavLink>
    </S.Background>
  );
};

export default SearchIdfinish;
