import React, { useState, useEffect, useCallback } from "react";
import defaultMap from "./defaultMap.png";
import diseasesData from "./diseasesInfo.json";
import { BrowserView, MobileView } from "react-device-detect";
import KakaoMap from "../../components/Kakao/KakaoMap/KakaoMap.jsx";

const HospitalRecommend = () => {
  const [disease, setDisease] = useState("결막염");
  const [cost, setCost] = useState("");
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const handleHospitalsFound = useCallback((hospitalData) => {
    setHospitals(hospitalData);
    setLoading(false);
  }, []);

  const createHospitalLink = (place) => {
    const { x, y, place_url, place_name } = place;
    const url = `${place_url}`;
    console.log(place);
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        {place_name}
      </a>
    );
  };

  return (
    <div>
      <BrowserView>
        <div id="recommendWrapper">
          <div id="mapWrapper">
            <div id="nearMyHouse">내 주변 1차 동물병원</div>
            <div id="hospitalLocation">
              <KakaoMap onHospitalsFound={handleHospitalsFound} /> {/* KakaoMap 컴포넌트 추가 */}
            </div>
          </div>
          <div id="descriptionWrapper">
            {loading ? (
              <div className="loadingWrapper">
                <p>병원정보를 검색중입니다...</p>
              </div>
            ) : (
              <>
                {hospitals.map((hospital, index) => (
                  <div className="hospitalDescription" key={index}>
                    {createHospitalLink(hospital)}
                    <h1>
                      {hospital.phone || " "}
                      <br></br>
                      {hospital.road_address_name || " "}
                      <br></br>
                      나와의 거리: {hospital.distance || "알 수 없음"}m
                    </h1>
                  </div>
                ))}
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
              </>
            )}
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div id="mobileRecommendWrapper">
          <div id="mobileMapWrapper">
            <div id="mobileNearMyHouse">내 주변 1차 동물병원</div>
            <div id="mobileHospitalLocation">
              <KakaoMap onHospitalsFound={handleHospitalsFound} /> {/* KakaoMap 컴포넌트 추가 */}
            </div>
          </div>
          <div id="mobileDescriptionWrapper">
            {loading ? (
              <p>병원정보를 검색중입니다...</p>
            ) : (
              <>
                {hospitals.map((hospital, index) => (
                  <div className="mobileHospitalDescription" key={index}>
                    {createHospitalLink(hospital)}
                    <h1>
                      {hospital.phone || " "}
                      <br></br>
                      {hospital.road_address_name || " "}
                      <br></br>
                      나와의 거리: {hospital.distance || "알 수 없음"}m
                    </h1>
                  </div>
                ))}
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
              </>
            )}
          </div>
        </div>
      </MobileView>
    </div>
  );
};

export default HospitalRecommend;
