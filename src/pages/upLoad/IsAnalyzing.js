import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import analyzingImage from "./img/analyzingImage.png";

const IsAnalyzing = () => {
  const [userName, setUserName] = useState("사용자");
  const navigate = useNavigate();

  useEffect(() => {
    // API 호출을 통해 회원 정보를 가져오는 함수
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("https://www.catchhealth.shop/api/v1/members/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("회원 정보를 가져오는데 실패했습니다.");
        }

        const data = await response.json();
        setUserName(data.nickName || "사용자"); // nickname이 없는 경우 "사용자"로 설정
      } catch (error) {
        console.error("회원 정보를 가져오는 중 에러 발생:", error);
        alert(error.message);
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
