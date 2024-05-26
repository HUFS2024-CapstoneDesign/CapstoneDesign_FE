import React, { useState } from 'react';
import S from './style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [domain, setDomain] = useState('');

  const handleDomainChange = (e) => {
    setDomain(e.target.value);
  };

  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  const idRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]{5,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{10,}$/;

  return (
    <S.Background>
      <S.H1>회원가입</S.H1>
      <S.FormContainer>
        <S.Form>
        <S.NicknameIdContainer>
            <S.Label htmlFor="nickname">닉네임</S.Label>
            <S.NicknameInputWrapper>
              <S.Input id="nickname" type='text' />
              <S.OverlapButton>중복확인</S.OverlapButton>
            </S.NicknameInputWrapper>
          </S.NicknameIdContainer>

          <S.NicknameIdContainer>
            <S.Label htmlFor="email">아이디</S.Label>
            <S.NicknameInputWrapper>
            <S.EmailContainer>
              <S.IDInput 
                type='text' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
              <S.Select onChange={handleDomainChange}>
                <option value="@naver.com">@naver.com</option>
                <option value="@gmail.com">@gmail.com</option>
                <option value="@daum.net">@daum.net</option>
              </S.Select>
            </S.EmailContainer>
            <S.OverlapButton>중복확인</S.OverlapButton>
            </S.NicknameInputWrapper>
          </S.NicknameIdContainer>

          <S.InputContainer>
            <S.Label htmlFor="password">비밀번호</S.Label>
            <S.PasswordContainer>
              <S.Input id="password" type={isPasswordShown ? 'text' : 'password'} />
              <S.Icon onClick={togglePasswordVisiblity}>
                <FontAwesomeIcon icon={isPasswordShown ? faEyeSlash : faEye} style={{ fontSize: "18px" }} color='#9F9F9F'/>
              </S.Icon>
            </S.PasswordContainer>
          </S.InputContainer>

          <S.InputContainer>
            <S.Label htmlFor="confirmPassword">비밀번호 확인</S.Label>
            <S.PasswordContainer>
              <S.Input id="confirmPassword" type={isPasswordShown ? 'text' : 'password'} />
              <S.Icon onClick={togglePasswordVisiblity}>
                <FontAwesomeIcon icon={isPasswordShown ? faEyeSlash : faEye} style={{ fontSize: "18px" }} color='#9F9F9F'/>
              </S.Icon>
            </S.PasswordContainer>
          </S.InputContainer>

          <S.InputContainer>
            <S.Label htmlFor="address">주소</S.Label>
            <S.PasswordContainer>
              <S.Input id="address" type='text' />
            </S.PasswordContainer>
          </S.InputContainer>

          <S.ButtonContainer>
            <S.SubmitButton>회원가입</S.SubmitButton>
            <NavLink to={"/"}>
              <S.CancleButton>취소</S.CancleButton>
            </NavLink>
          </S.ButtonContainer>
        </S.Form>
      </S.FormContainer>
    </S.Background>
  );
};

export default SignUp;
