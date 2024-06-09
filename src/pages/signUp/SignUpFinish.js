import React from 'react';
import logo from '../../global/logo/logo.png';
import S from './style.js'
import { NavLink } from 'react-router-dom';

const SignUpFinish = () => {
  return (
    <S.Background>
      <S.Image src={logo} alt='logo'/>
      <S.P>회원가입이 완료되었습니다 ! <br />
      로그인 이후 마이페이지로 이동하여 반려동물을 등록해주세요.</S.P>
      <NavLink to={'/login'}>
      <S.SubmitButton>로그인하러 가기</S.SubmitButton>
      </NavLink>
    </S.Background>
  );
};

export default SignUpFinish;