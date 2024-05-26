import React from "react";
import defaultMap from "./defaultMap.png";
const HosipitalRecommend = () => {
  return (
    <div>
      <div id="recommendWrapper">
        <div id="mapWrapper">
          <div id="nearMyHouse">내 주변 1차 동물병원</div>
          <img src={defaultMap} alt="defaultMap" id="hospitalLocation" />
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
        </div>
      </div>
    </div>
  );
};

export default HosipitalRecommend;
