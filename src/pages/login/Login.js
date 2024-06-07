import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import S from './style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import KakaoLogin from './KakaoLogin.jsx';

const Login = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  const { register, handleSubmit, formState: { isSubmitting } } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn) {
      navigate('/'); 
    }
  }, [navigate]);

  const handleLogin = async (data) => {
    try {
        const response = await fetch('https://www.catchhealth.shop/api/v1/members/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        });

        if (!response.ok) {
            if (response.status === 401) {
                throw new Error('일치하는 유저가 없습니다. 이메일과 비밀번호를 확인해주세요.');
            } else {
                throw new Error('로그인 실패');
            }
        }

        const result = await response.json();
        console.log(result);
        
        if (result.isSuccess) {
            alert('로그인 성공');
            localStorage.setItem('loggedIn', true); 
            localStorage.setItem('token', result.data.accessToken);
            navigate('/');
        } else {
            throw new Error(result.message || '로그인 실패');
        }
    } catch (error) {
        console.error('로그인 중 에러 발생:', error);
        alert(error.message);
    }
};


  return (
    <S.Background>
      <S.H1>로그인</S.H1>
      <form onSubmit={handleSubmit(handleLogin)}>
        <S.Input type='email' placeholder='이메일을 입력해주세요' 
          {...register("email", { required: true })} />
        <S.InputContainer>
          <S.PasswordContainer>
            <S.Input type={isPasswordShown ? 'text' : 'password'} placeholder='비밀번호를 입력해주세요' 
              {...register("password", { required: true })} />
            <S.Icon onClick={togglePasswordVisibility}>
              <FontAwesomeIcon icon={isPasswordShown ? faEyeSlash : faEye} style={{ fontSize: "18px" }} color='#9F9F9F' />
            </S.Icon>
          </S.PasswordContainer>
        </S.InputContainer>

        <S.LinksContainer>
          <NavLink to={'/searchid'}><p>아이디 찾기</p></NavLink>
          <NavLink to={'/identification'}><p>비밀번호 찾기</p></NavLink>
          <NavLink to={'/signup'}><p>회원가입</p></NavLink>
        </S.LinksContainer>

        <S.ButtonContainer>
          <KakaoLogin />
          <S.SubmitButton type="submit" disabled={isSubmitting}>로그인하기</S.SubmitButton>
        </S.ButtonContainer>
      </form>
    </S.Background>
  );
};

export default Login;
