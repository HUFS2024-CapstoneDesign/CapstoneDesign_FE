import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import analyzingImage from "./img/analyzingImage.png";

const IsAnalyzing = () => {
  const userName = "또리누나";
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/diseaseResult");
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div id="analyzingWrapper">
      <img src={analyzingImage} alt="AnalyzingImage" style={{ width: "235px", height: "235px" }} />
      <p>
        {userName}님의 고양이가 아픈곳은 없는지 분석중입니다.<br></br>조금만 기다려 주세요 !
      </p>
    </div>
  );
};

export default IsAnalyzing;
