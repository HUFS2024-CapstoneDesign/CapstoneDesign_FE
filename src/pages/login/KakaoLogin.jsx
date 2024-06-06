// KakaoLogin.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import KakaoButton from './kakao_login_medium_narrow.png';

const KakaoLogin = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;

    document.body.appendChild(script);

    script.onload = () => {
      if (window.Kakao && !window.Kakao.isInitialized()) {
        window.Kakao.init('0f43b8bdb68d6729f60c71043664ef57');
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const navigate = useNavigate();

  const handleKakaoLogin = () => {
    window.Kakao.Auth.login({
      success: (authObj) => {
        console.log('카카오 로그인 성공:', authObj);
        fetch('https://www.catchhealth.shop/api/v1/members/kakao', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({ token: authObj.access_token })
        })
        .then(response => response.json())
        .then(result => {
          console.log(result);
          alert('카카오 로그인 성공');
          localStorage.setItem('loggedIn', true);
          navigate('/');
        })
        .catch(error => {
          console.error('카카오 로그인 중 에러 발생:', error);
          alert('카카오 로그인 실패');
        });
      },
      fail: (err) => {
        console.error('카카오 로그인 실패:', err);
        alert('카카오 로그인 실패');
      }
    });
  };

  return (
    <img
      src={KakaoButton}
      alt="카카오톡으로 로그인하기"
      onClick={handleKakaoLogin}
      style={{ cursor: 'pointer' , width : '240px' , height : '60px', borderRadius : '50px'}}
    />
  );
};

export default KakaoLogin;
