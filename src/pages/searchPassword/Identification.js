import React, { useState } from 'react';
import S from './style.js';
import { useNavigate } from 'react-router-dom';

const Identification = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const sendCode = () => {
    if (!email) {
      alert('이메일을 입력해주세요.');
      return;
    }
    fetch('https://www.catchhealth.shop/api/v1/members/find-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then(async (response) => {
        if (response.ok) {
          alert('인증번호가 발송되었습니다.');
        } else {
          const errorResponse = await response.json();
          alert(errorResponse.message || '인증번호 발송에 실패했습니다.');
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const checkCode = () => {
    fetch('https://www.catchhealth.shop/api/v1/members/check-code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, code }),
    })
      .then(async (response) => {
        if (response.ok) {
          alert('인증번호가 확인되었습니다. 비밀번호를 변경해주세요.');
          navigate('/changepassword', { state: { email } }); // 이메일 정보를 전달
        } else {
          const errorResponse = await response.json();
          alert(errorResponse.message || '인증번호가 잘못되었습니다.');
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <S.Background>
      <S.H1>비밀번호 찾기</S.H1>
      <S.InputContainer>
        <S.IdContainer>
          <S.IdInput
            type='text'
            placeholder='이메일을 입력해주세요'
            value={email}
            onChange={handleEmailChange}
          />
          <S.OverlapButton onClick={sendCode}>인증번호 발송</S.OverlapButton>
        </S.IdContainer>
        <S.Input
          type='text'
          placeholder='인증번호'
          value={code}
          onChange={handleCodeChange}
        />
      </S.InputContainer>
      <S.SubmitButton onClick={checkCode}>확인</S.SubmitButton>
    </S.Background>
  );
};

export default Identification;
