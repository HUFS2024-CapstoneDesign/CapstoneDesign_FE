import React from "react";
import defaultMap from "./defaultMap.png";
import diseasesData from "./diseasesInfo.json";
import { useState, useEffect } from "react";
import { BrowserView, MobileView } from "react-device-detect";

const HosipitalRecommend = () => {
  const [disease, setDisease] = useState("결막염");
  const [cost, setCost] = useState("");
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const getDiseaseInfo = (diseaseName) => {
    if (!diseasesData) return null;
    return diseasesData.find((d) => d.name === diseaseName);
  };

  const diseaseInfo = getDiseaseInfo(disease);

  const handleClick = () => {
    if (diseaseInfo) {
      setCost(diseaseInfo.cost);
      setIsButtonVisible(false);
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=5015e067209cba83116392b456477339&libraries=services,clusterer,drawing";
    script.async = true;
    script.onload = () => {
      const container = document.getElementById("hospitalLocation");
      const options = {
        center: new window.kakao.maps.LatLng(37.566826, 126.9786567), // 서울 시청 좌표
        level: 5,
      };
      const map = new window.kakao.maps.Map(container, options);
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <BrowserView>
        <div id="recommendWrapper">
          <div id="mapWrapper">
            <div id="nearMyHouse">내 주변 1차 동물병원</div>
            <div id="hospitalLocation" />
          </div>
          <div id="descriptionWrapper">
            <div className="hospitalDescription">
              <h1>
                A병원<br></br>10:00 ~ 18:00<br></br>서울시 마포구 ...<br></br>나와의 거리: 690m
              </h1>
            </div>
            <div className="hospitalDescription">
              <h1>
                B병원<br></br>10:00 ~ 18:00<br></br>서울시 동작구 ...<br></br>나와의 거리: 990m
              </h1>
            </div>
            <div className="hospitalDescription">
              <h1>
                C병원<br></br>10:00 ~ 18:00<br></br>서울시 마포구 ...<br></br>나와의 거리: 1.3km
              </h1>
            </div>
            {diseaseInfo && (
              <div id="averageCost">
                {isButtonVisible && (
                  <button onClick={handleClick} id="averageCostButton">
                    평균 진료비용 확인하기
                  </button>
                )}
                {cost && (
                  <div>
                    <h1>{disease} 평균 치료비용:</h1>
                    <p>{diseaseInfo.cost}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div id="mobileRecommendWrapper">
          <div id="mobileMapWrapper">
            <div id="mobileNearMyHouse">내 주변 1차 동물병원</div>
            <div id="mobileMap">
              <img src={defaultMap} alt="defaultMap" id="mobileHospitalLocation" />
            </div>
          </div>
          <div id="mobileDescriptionWrapper">
            <div className="mobileHospitalDescription">
              <h1>
                A병원<br></br>10:00 ~ 18:00<br></br>서울시 마포구 ...<br></br>나와의 거리: 690m
              </h1>
            </div>
            <div className="mobileHospitalDescription">
              <h1>
                B병원<br></br>10:00 ~ 18:00<br></br>서울시 동작구 ...<br></br>나와의 거리: 990m
              </h1>
            </div>
            <div className="mobileHospitalDescription">
              <h1>
                C병원<br></br>10:00 ~ 18:00<br></br>서울시 마포구 ...<br></br>나와의 거리: 1.3km
              </h1>
            </div>
            {diseaseInfo && (
              <div id="mobileAverageCost">
                {isButtonVisible && (
                  <button onClick={handleClick} id="mobileAverageCostButton">
                    평균 진료비용 확인하기
                  </button>
                )}
                {cost && (
                  <div>
                    <h1>{disease} 평균 치료비용:</h1>
                    <p>{diseaseInfo.cost}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </MobileView>
    </div>
  );
};

export default HosipitalRecommend;
