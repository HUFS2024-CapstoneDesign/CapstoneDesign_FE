import React from "react";
import { useNavigate } from "react-router-dom";
import cryCat from "./cryCat.png";
import smileCat from "./smileCat.png";
import { useState, useEffect } from "react";
import diseasesData from "./diseasesInfo.json";
import { BrowserView, MobileView } from "react-device-detect";
const DiseaseResult = () => {
  const [hasDisease, setHasDisease] = useState(false);
  const [disease, setDisease] = useState("결막염");
  const navigate = useNavigate();
  const petName = "또리";

  const renderTextWithLineBreaks = (text) => {
    return text.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  const handleClick = () => {
    navigate("/HospitalRecommend");
  };
  const handleClickMain = () => {
    navigate("/");
  };

  // useEffect(() => {
  //   // 서버에서 병명을 전달받는 API 호출
  //   fetch('/api/getDisease')
  //     .then(response => response.json())
  //     .then(data => {
  //       setDisease(data.disease);
  //       setHasDisease(true); // 질병이 있는 경우 true로 설정
  //     })
  //     .catch(error => {
  //       console.error('Error fetching disease data:', error);
  //       setHasDisease(false); // 오류가 발생하면 false로 설정
  //     });
  // }, []);

  const getDiseaseInfo = (diseaseName) => {
    if (!diseasesData) return null;
    return diseasesData.find((d) => d.name === diseaseName);
  };

  const diseaseInfo = getDiseaseInfo(disease);

  return (
    <div>
      <BrowserView>
        {hasDisease === true && (
          <div id="yesDiseaseWrapper">
            <div id="resultWrapper">
              <img src={cryCat} alt="cryCat" id="cryCat" />
              <div id="resultText">
                분석 결과 {petName}는 {disease}으로 추정됩니다.
              </div>
              <button onClick={handleClick} id="hospitalButton">
                가까운 병원 추천받기
              </button>
            </div>
            <div id="diseaseWrapper">
              {diseaseInfo && (
                <div id="descriptionWrapper">
                  <div id="diseaseName">{disease}</div>
                  <div className="diseaseDescription">
                    <h1>{disease}이란..</h1>
                    <p>{diseaseInfo.description}</p>
                  </div>
                  <div className="diseaseDescription">
                    <h1>증상</h1>
                    <p>{renderTextWithLineBreaks(diseaseInfo.symptoms)}</p>
                  </div>
                  <div className="diseaseDescription">
                    <h1>원인</h1>
                    <p>{diseaseInfo.causes}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        {hasDisease === false && (
          <div>
            <div id="noDiseaseWrapper">
              <img src={smileCat} alt="smileCat" id="smileCat" />
              <h1>발견된 질병이 없습니다! {petName}는 건강한 아이네요!</h1>
              <button onClick={handleClickMain} id="mainButton">
                처음으로 돌아가기
              </button>
            </div>
          </div>
        )}
      </BrowserView>
      <MobileView>
        {hasDisease === true && (
          <div id="mobileYesDiseaseWrapper">
            <div id="mobileResultWrapper">
              <img src={cryCat} alt="cryCat" id="mobileCryCat" />
              <div id="mobileResultText">
                분석 결과 {petName}는 {disease}으로 추정됩니다.
              </div>
            </div>
            <div id="mobileDiseaseWrapper">
              {diseaseInfo && (
                <div id="mobileDescriptionWrapper">
                  <div id="mobileDiseaseName">{disease}</div>
                  <div className="mobileDiseaseDescription">
                    <h1>{disease}이란..</h1>
                    <p>{diseaseInfo.description}</p>
                  </div>
                  <div className="mobileDiseaseDescription">
                    <h1>증상</h1>
                    <p>{renderTextWithLineBreaks(diseaseInfo.symptoms)}</p>
                  </div>
                  <div className="mobileDiseaseDescription">
                    <h1>원인</h1>
                    <p>{diseaseInfo.causes}</p>
                  </div>
                </div>
              )}
              <button onClick={handleClick} id="mobileHospitalButton">
                가까운 병원 추천받기
              </button>
            </div>
          </div>
        )}
        {hasDisease === false && (
          <div>
            <div id="mobileNoDiseaseWrapper">
              <img src={smileCat} alt="smileCat" id="mobileSmileCat" />
              <h1>
                발견된 질병이 없습니다! <br></br>
                {petName}는 건강한 아이네요!
              </h1>
              <button onClick={handleClickMain} id="mobileMainButton">
                처음으로 돌아가기
              </button>
            </div>
          </div>
        )}
      </MobileView>
    </div>
  );
};

export default DiseaseResult;
