import React, { useState } from 'react';
import S from './style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';


const Login = () => {

  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setIsPasswordShown(!isPasswordShown);
  };
  return (
    <S.Background>
      <S.H1>로그인</S.H1>
      <S.Input type='text' placeholder='아이디를 입력해주세요'/>
      <S.InputContainer>
        <S.PasswordContainer>
          <S.Input type={isPasswordShown ? 'text' : 'password'} placeholder='새로운 비밀번호 입력'/>
              <S.Icon onClick={togglePasswordVisiblity}>
                <FontAwesomeIcon icon={isPasswordShown ? faEyeSlash : faEye} style={{ fontSize: "18px" }} color='#9F9F9F'/>
              </S.Icon>
        </S.PasswordContainer>
      </S.InputContainer>

      <S.LinksContainer>
        <NavLink to={'/searchid'}><p>아이디 찾기</p></NavLink>
        <NavLink to={'/identification'}><p>비밀번호 찾기</p></NavLink>
        <NavLink to={'/signup'}><p>회원가입</p></NavLink>
      </S.LinksContainer>

      <S.SubmitButton>로그인하기</S.SubmitButton>

    </S.Background>
  );
};

export default Login;