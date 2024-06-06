import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import S from './style.js';

const ChangePassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { email, token } = location.state || {};

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const changePassword = () => {
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    fetch('https://www.catchhealth.shop/api/v1/members/change-password', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ email, password }),
    })
    .then(async (response) => {
      if (response.ok) {
        alert('비밀번호가 성공적으로 변경되었습니다.');
        navigate('/login');
      } else {
        const errorResponse = await response.json();
        alert(errorResponse.message || '비밀번호 변경에 실패했습니다.');
      }
    })
    .catch((error) => {
      alert(error.message);
    });
  };

  return (
    <S.Background>
      <S.H1>비밀번호 변경</S.H1>
      <S.InputContainer>
        <S.Input
          type='password'
          placeholder='새 비밀번호'
          value={password}
          onChange={handlePasswordChange}
        />
        <S.Input
          type='password'
          placeholder='새 비밀번호 확인'
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </S.InputContainer>
      <S.SubmitButton onClick={changePassword}>변경</S.SubmitButton>
    </S.Background>
  );
};

export default ChangePassword;
