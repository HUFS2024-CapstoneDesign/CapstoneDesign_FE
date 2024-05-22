import React from "react";
import catTower from "./catTower.png";
import defaultProfile from "./defaultProfile.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Main() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  const handleClick = () => {
    if (loggedIn === true) navigate("/inputInfo");
    else alert("먼저 로그인을 해주세요 !");
    navigate("/login");
  };

  return (
    <div id="MainWrapper">
      <Link id="defaultProfile" to="/profile">
        <img src={defaultProfile} alt="profile" />
      </Link>
      <div id="introTextWrapper">
        <p id="introText">
          “캣치헬스는 반려동물에게 흔히 발생하는 ㅇㅇㅇ,xxx등의 질병을<br></br> 사진 한장의 업로드를 통하여 신속히 진단하고,<br></br> 해당 질병의 예상되는 진료비와 바로 접근 가능한 병원의 정보를<br></br> 제공하는 서비스입니다.<br></br> 불필요한 병원
          내원으로 인한 비용 발생을 줄이고 효과적으로 진단받아<br></br> 내가 아끼는 동물이 더이상 고통받지 않게 해주세요 !”
        </p>
      </div>
      <button onClick={handleClick} id="startButton">
        시작하기
      </button>
      <img src={catTower} alt="catTower" id="catTower" />
    </div>
  );
}
