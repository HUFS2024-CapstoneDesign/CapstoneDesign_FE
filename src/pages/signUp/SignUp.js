import React, { useState } from 'react';
import S from './style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [domain, setDomain] = useState('@naver.com');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(null);
  const [address, setAddress] = useState('');
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [nicknameMessage, setNicknameMessage] = useState('');
  const [emailMessage, setEmailMessage] = useState('');

  const handleDomainChange = (e) => setDomain(e.target.value);
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordMatch(password === e.target.value);
  };
  const [passwordValidity, setPasswordValidity] = useState(true); 

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(e.target.value);
    setPasswordMatch(value === confirmPassword);
  
    
    const isValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{9,16}$/.test(value);
    setPasswordValidity(isValid);
  };
  
  
  const togglePasswordVisiblity = () => setIsPasswordShown(!isPasswordShown);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!passwordMatch) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    const requestBody = {
      email: email + domain,
      nickName: nickname,
      password,
      address,
    };

    try {
      const response = await fetch('https://www.catchhealth.shop/api/v1/members/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        navigate('/signupfinish');
      } else {
        const errorData = await response.json();
        alert(`회원가입 실패: ${errorData.message}`);
      }
    } catch (error) {
      console.error('회원가입 중 오류 발생:', error.message);
      alert('회원가입 중 오류가 발생했습니다.');
    }
  };

  const checkNickname = async () => {
    try {
      const token = 'YOUR_AUTH_TOKEN'; 
      const response = await fetch(`https://www.catchhealth.shop/api/v1/members/check-nickname?nickname=${nickname}`, {
        headers: {
          'Authorization': `Bearer ${token}`, 
        },
      });
      const data = await response.json();
      if (data.exists) {
        setNicknameMessage('중복된 닉네임입니다.');
      } else {
        setNicknameMessage('사용 가능한 닉네임입니다.');
      }
    } catch (error) {
      console.error('닉네임 중복 확인 중 오류 발생:', error.message);
    }
  };
  
  const checkEmail = async () => {
    try {
      const token = 'YOUR_AUTH_TOKEN';
      const response = await fetch(`https://www.catchhealth.shop/api/v1/members/check-email?email=${email + domain}`, {
        headers: {
          'Authorization': `Bearer ${token}`, 
        },
      });
      const data = await response.json();
      if (data.exists) {
        setEmailMessage('중복된 아이디입니다.');
      } else {
        setEmailMessage('사용 가능한 아이디입니다.');
      }
    } catch (error) {
      console.error('이메일 중복 확인 중 오류 발생:', error.message);
    }
  };


  return (
    <S.Background>
      <S.H1>회원가입</S.H1>
      <S.FormContainer>
        <S.Form onSubmit={handleSubmit}>
        <S.NicknameIdContainer>
            <S.Label htmlFor="nickname">닉네임</S.Label>
            <S.NicknameInputWrapper>
              <S.Input id="nickname" type='text' value={nickname} onChange={(e) => setNickname(e.target.value)} />
              <S.OverlapButton type="button" onClick={checkNickname}>중복확인</S.OverlapButton>
            </S.NicknameInputWrapper>
            {nicknameMessage && <S.Message color='green'>{nicknameMessage}</S.Message>}
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
                <S.Select value={domain} onChange={handleDomainChange}>
                  <option value="@naver.com">@naver.com</option>
                  <option value="@gmail.com">@gmail.com</option>
                  <option value="@daum.net">@daum.net</option>
                </S.Select>
              </S.EmailContainer>
              <S.OverlapButton type="button" onClick={checkEmail}>중복확인</S.OverlapButton>
            </S.NicknameInputWrapper>
            {emailMessage && <S.Message color='green'>{emailMessage}</S.Message>}
          </S.NicknameIdContainer>

          <S.InputContainer>
            <S.Label htmlFor="password">비밀번호</S.Label>
            <S.PasswordContainer>
            <S.Input id="password" type={isPasswordShown ? 'text' : 'password'} value={password} onChange={handlePasswordChange} />
                <S.Icon onClick={togglePasswordVisiblity}>
                  <FontAwesomeIcon icon={isPasswordShown ? faEyeSlash : faEye} style={{ fontSize: "18px" }} color='#9F9F9F'/>
                </S.Icon>
            </S.PasswordContainer>
            {!passwordValidity && <S.PasswordMessage color="red">비밀번호는 영문, 숫자, 특수문자를 포함한 9~16글자여야 합니다.</S.PasswordMessage>}
            </S.InputContainer>

          <S.InputContainer>
            <S.Label htmlFor="confirmPassword">비밀번호 확인</S.Label>
            <S.PasswordContainer>
              <S.Input id="confirmPassword" type={isPasswordShown ? 'text' : 'password'}  value={confirmPassword} onChange={handleConfirmPasswordChange}/>
              <S.Icon onClick={togglePasswordVisiblity}>
                <FontAwesomeIcon icon={isPasswordShown ? faEyeSlash : faEye} style={{ fontSize: "18px" }} color='#9F9F9F'/>
              </S.Icon>
            </S.PasswordContainer>
          </S.InputContainer>
          {passwordMatch === false && <S.Message color="red">비밀번호가 일치하지 않습니다.</S.Message>}
          {passwordMatch && <S.Message color="green">비밀번호가 일치합니다.</S.Message>}

          <S.InputContainer>
            <S.Label htmlFor="address">주소</S.Label>
            <S.PasswordContainer>
              <S.Input id="address" type='text' value={address} onChange={(e) => setAddress(e.target.value)} />
            </S.PasswordContainer>
          </S.InputContainer>

          <S.ButtonContainer>
            <S.SubmitButton type="submit">회원가입</S.SubmitButton>
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
