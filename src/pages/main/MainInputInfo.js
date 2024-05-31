import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { useNavigate } from "react-router-dom";
import defaultProfile from "./defaultProfile.png";
import { Link } from "react-router-dom";
import mobileDefaultProfile from "./mobileDefaultProfile.png";
const MainInputInfo = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/upload");
  };

  return (
    <div>
      <BrowserView>
        <div id="MainInputInfoWrapper">
          <Link id="defaultProfile" to="/profile">
            <img src={defaultProfile} alt="profile" />
          </Link>
          <h1>애완동물의 이름을 입력해 주세요.</h1>
          <input id="nameInput" type="text" placeholder="이름을 입력해 주세요">
            {/* 이름을 입력해 주세요 */}
          </input>
          <p>이전에 이미 검사하셨던 기록이 있어도 이전과 같이 입력해 주세요!</p>
          <button onClick={handleClick} id="diagnoseButton">
            진단받기
          </button>
        </div>
      </BrowserView>
      <MobileView>
        <div id="MobileMainInputInfoWrapper">
          <Link id="mobileDefaultProfile" to="/profile">
            <img src={mobileDefaultProfile} alt="profile" />
          </Link>
          <div id="h1Wrapper">
            <h1>애완동물의 이름을 입력해 주세요.</h1>
          </div>
          <input id="nameInput" type="text" placeholder="이름을 입력해 주세요">
            {/* 이름을 입력해 주세요 */}
          </input>
          <p>이전에 이미 검사하셨던 기록이 있어도 이전과 같이 입력해 주세요!</p>
          <button onClick={handleClick} id="diagnoseButton">
            진단받기
          </button>
        </div>
      </MobileView>
    </div>
  );
};

export default MainInputInfo;
