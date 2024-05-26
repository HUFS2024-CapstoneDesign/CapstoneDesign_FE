import React from "react";
import { useNavigate } from "react-router-dom";
import cryCat from "./cryCat.png";
import smileCat from "./smileCat.png";
import { useState } from "react";
const DiseaseResult = () => {
  const [hasDisease, setHasDisease] = useState(true);
  const navigate = useNavigate();
  const disease = "결막염";
  const petName = "또리";
  const handleClick = () => {
    navigate("/HosipitalRecommend");
  };
  const handleClickMain = () => {
    navigate("/");
  };
  return (
    <div>
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
            {disease === "결막염" && (
              <div id="descriptionWrapper">
                <div id="diseaseName">결막염</div>
                <div class="diseaseDescription">
                  <h1>결막염이란..</h1>
                  <p>결막염은 가장 대표적인 고양이 눈병 중 하나인데요. 결막염은 번지거나 악화되는 속도가 빨라 초기에 빠르게 치료하는 것이 중요합니다.</p>
                </div>
                <div class="diseaseDescription">
                  <h1>증상</h1>
                  <p>
                    ✅ 눈을 뜨는 것을 불편해함<br></br>✅ 흰자위 부분 빨갛게 충혈<br></br>✅ 눈 주변이 부어있음<br></br>✅ 눈물, 눈곱이 많이 남
                  </p>
                </div>
                <div class="diseaseDescription">
                  <h1>원인</h1>
                  <p>
                    결막염은 세균, 바이러스, 곰팡이, 기생충 등에 감염되어 발생하는 경우가 가장 흔하다. 알레르기가 있거나 눈에 속눈썹 등의 이물질이 눈에 들어가는 경우에도 발생할 수 있다. 또 눈꺼풀 종양이 있는 경우에도 마찰로 자극이 되어 결막염이 생길
                    수 있다.
                  </p>
                </div>
              </div>
            )}
            {disease === "망막염" && (
              <div id="descriptionWrapper">
                <div id="diseaseName">망막염</div>
                <div class="diseaseDescription">
                  <h1>망막염이란</h1>
                  <p>결막염...결막염...결막염...결막염...결막염...결막염...결막염...결막염...</p>
                </div>
                <div class="diseaseDescription">
                  <h1>망막염 증상</h1>
                  <p>결막염...결막염...결막염...결막염...결막염...결막염...결막염...결막염...</p>
                </div>
                <div class="diseaseDescription">
                  <h1>망막염 원인</h1>
                  <p>결막염...결막염...결막염...결막염...결막염...결막염...결막염...결막염...</p>
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
    </div>
  );
};

export default DiseaseResult;
