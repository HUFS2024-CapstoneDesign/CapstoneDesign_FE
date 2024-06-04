import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import S from './style.js';

const SearchId = () => {
  const [nickName, setNickName] = useState('');
  const [result, setResult] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setNickName(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`https://www.catchhealth.shop/api/v1/members/find-id?nickName=${encodeURIComponent(nickName)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('해당하는 닉네임이 없습니다.');
      }

      const data = await response.json();
      if (data.isSuccess) {
        navigate('/searchIdFinish', { state: { email: data.data.email } });
      } else {
        navigate('/searchIdFinish', { state: { email: null } });
      }
    } catch (error) {
      navigate('/searchIdFinish', { state: { email: null } });
    }
  };

  return (
    <S.Background>
      <S.H1>아이디 찾기</S.H1>
      <S.Input type='text' value={nickName} onChange={handleInputChange} placeholder="닉네임 입력 : "/>
      <S.SubmitButton onClick={handleSubmit}>완료</S.SubmitButton>
      {result && <p>{result}</p>}
    </S.Background>
  );
};

export default SearchId;
