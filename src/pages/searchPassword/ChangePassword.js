import React, { useState } from 'react';
import S from './style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

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

  const location = useLocation();
  const email = location.state?.email || '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit 호출됨");

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{9,16}$/;

    if (!passwordMatch || !passwordRegex.test(password)) {
      alert('비밀번호가 일치하지 않거나 규칙에 맞지 않습니다.');
      return;
    }

    try {
      const loginResponse = await fetch('https://www.catchhealth.shop/api/v1/members/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (loginResponse.ok) {
        const { data: { accessToken } } = await loginResponse.json();
        const changePasswordResponse = await fetch('https://www.catchhealth.shop/api/v1/members/change-password', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ password }),
        });

        if (changePasswordResponse.ok) {
          alert('비밀번호가 성공적으로 변경되었습니다.');
        } else {
          const errorResponse = await changePasswordResponse.json();
          alert(errorResponse.message || '비밀번호 변경에 실패했습니다.');
        }
      } else {
        const errorResponse = await loginResponse.json();
        alert(errorResponse.message || '로그인에 실패했습니다.');
      }
    } catch (error) {
      alert('네트워크 오류가 발생했습니다.');
    }
  };

  return (
    <S.Background>
      <S.FormContainer>
        <S.H1>비밀번호 변경</S.H1>
        <S.Form onSubmit={handleSubmit}>
          <S.InputContainer>
            <S.PasswordContainer>
              <S.Input
                type={isPasswordShown ? 'text' : 'password'}
                placeholder='새로운 비밀번호 입력'
                value={password}
                onChange={handlePasswordChange}
              />
              <S.Icon onClick={togglePasswordVisiblity}>
                <FontAwesomeIcon
                  icon={isPasswordShown ? faEyeSlash : faEye}
                  style={{ fontSize: '18px' }}
                  color='#9F9F9F'
                />
              </S.Icon>
            </S.PasswordContainer>
          </S.InputContainer>

          <S.InputContainer>
            <S.PasswordContainer>
              <S.Input
                type={isPasswordShown ? 'text' : 'password'}
                placeholder='비밀번호 확인'
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              <S.Icon onClick={togglePasswordVisiblity}>
                <FontAwesomeIcon
                  icon={isPasswordShown ? faEyeSlash : faEye}
                  style={{ fontSize: '18px' }}
                  color='#9F9F9F'
                />
              </S.Icon>
            </S.PasswordContainer>
          </S.InputContainer>

          {passwordMatch === false && <S.Message color="red">비밀번호가 일치하지 않습니다.</S.Message>}
          {passwordMatch && <S.Message color="green">비밀번호가 일치합니다.</S.Message>}

          <S.SubmitButton type="submit">확인</S.SubmitButton>
        </S.Form>
      </S.FormContainer>
    </S.Background>
  );
};

export default ChangePassword;
