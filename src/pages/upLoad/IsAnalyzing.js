import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import analyzingImage from "./img/analyzingImage.png";

const IsAnalyzing = () => {
  const [userName, setUserName] = useState("사용자");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem('token');
        
        if (!token) {
          console.error("토큰이 없습니다.");
          return;
        }
        
        const response = await fetch('https://www.catchhealth.shop/api/v1/members/', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        
        const data = await response.json();
        if (data.isSuccess) {
          setUserName(data.data.nickName);
        } else {
          console.error("회원 정보 조회 실패: ", data.message);
        }
      } catch (error) {
        console.error("로그인 정보를 불러오는데 실패했습니다.", error);
      }
    };

    fetchUserInfo();
    
    const timer = setTimeout(() => {
      navigate("/diseaseResult");
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);


  return (
    <div id="analyzingWrapper">
      <img src={analyzingImage} alt="AnalyzingImage" style={{ width: "235px", height: "235px" }} />
      <p>
        {userName}님의 고양이가 아픈 곳은 없는지 분석 중입니다.<br></br>조금만 기다려 주세요!
      </p>
    </div>
  );
};

export default IsAnalyzing;
