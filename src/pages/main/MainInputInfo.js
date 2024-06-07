import React, { useEffect, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { useNavigate } from "react-router-dom";
import defaultProfile from "./defaultProfile.png";
import { Link } from "react-router-dom";
import mobileDefaultProfile from "./mobileDefaultProfile.png";

const MainInputInfo = () => {
  const [petName, setPetName] = useState("");
  const navigate = useNavigate();
  const [token, setToken] = useState("");

  const handleClick = async () => {
    const petData = {
      name: petName,
      gender: "F",
      age: 0,
      species: "cat",
    };

    console.log("Sending pet data: ", JSON.stringify(petData));

    try {
      console.log(`토큰--> ${token}`);

      const response = await fetch("https://www.catchhealth.shop/api/v1/pets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(petData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "애완동물 등록 실패");
      }

      const result = await response.json();
      console.log(result);
      alert("애완동물 등록 성공");
      navigate("/upload");
    } catch (error) {
      console.error("애완동물 등록 중 에러 발생:", error);
      alert(error.message);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }
    setToken(token);
  }, []);

  return (
    <div>
      <BrowserView>
        <div id="MainInputInfoWrapper">
          <Link id="defaultProfile" to="/profile">
            <img src={defaultProfile} alt="profile" />
          </Link>
          <h1>애완동물의 이름을 입력해 주세요.</h1>
          <input id="nameInput" type="text" placeholder="이름을 입력해 주세요" value={petName} onChange={(e) => setPetName(e.target.value)} />
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
          <input id="nameInput" type="text" placeholder="이름을 입력해 주세요" value={petName} onChange={(e) => setPetName(e.target.value)} />
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
