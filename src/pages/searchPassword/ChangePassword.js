import React, { useState } from 'react';
import S from './style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const ChangePassword = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(null);

  const togglePasswordVisiblity = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordMatch(e.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordMatch(password === e.target.value);
  };

  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{10,}$/;

  return (
    <S.Background>
      <S.FormContainer>
        <S.H1>비밀번호 변경</S.H1>
        <S.Form>
          <S.InputContainer>
            <S.PasswordContainer>
              <S.Input type={isPasswordShown ? 'text' : 'password'} placeholder='새로운 비밀번호 입력' value={password} onChange={handlePasswordChange}/>
              <S.Icon onClick={togglePasswordVisiblity}>
                <FontAwesomeIcon icon={isPasswordShown ? faEyeSlash : faEye} style={{ fontSize: "18px" }} color='#9F9F9F'/>
              </S.Icon>
            </S.PasswordContainer>
          </S.InputContainer>

          <S.InputContainer>
            <S.PasswordContainer>
              <S.Input type={isPasswordShown ? 'text' : 'password'} placeholder='비밀번호 확인' value={confirmPassword} onChange={handleConfirmPasswordChange}/>
              <S.Icon onClick={togglePasswordVisiblity}>
                <FontAwesomeIcon icon={isPasswordShown ? faEyeSlash : faEye} style={{ fontSize: "18px" }} color='#9F9F9F'/>
              </S.Icon>
            </S.PasswordContainer>
          </S.InputContainer>

          {passwordMatch === false && <S.Message color="red">비밀번호가 일치하지 않습니다.</S.Message>}
          {passwordMatch && <S.Message color="green">비밀번호가 일치합니다.</S.Message>}

          <S.SubmitButton>확인</S.SubmitButton>
        </S.Form>
      </S.FormContainer>
    </S.Background>
  );
};

export default ChangePassword;
