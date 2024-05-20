import React, { useState } from 'react';
import S from './style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


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

  return (
    <S.Background>
      <S.H1>회원가입</S.H1>
      <S.FormContainer>
        <S.Form>
          <S.H4>닉네임</S.H4>
          <S.InputContainer>
            <S.Input type='text' />
            <S.OverlapButton>중복확인</S.OverlapButton>
          </S.InputContainer>
          <S.H4>아이디</S.H4>
          <S.InputContainer>
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
          </S.InputContainer>
          <S.H4>비밀번호</S.H4>
          <S.InputContainer>
            <S.PasswordContainer>
            <S.Input  type={isPasswordShown ? 'text' : 'password'}/>
            <S.Icon onClick={togglePasswordVisiblity}>
            <FontAwesomeIcon icon={isPasswordShown ? faEyeSlash : faEye} style={{ fontSize: "18px" }} color='#9F9F9F'/>
            </S.Icon>
            </S.PasswordContainer>
          </S.InputContainer>
        </S.Form>
      </S.FormContainer>
    </S.Background>
  );
};

export default SignUp;
