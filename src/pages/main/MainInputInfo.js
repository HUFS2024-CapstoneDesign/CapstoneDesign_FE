import React, { useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { useNavigate } from "react-router-dom";
import defaultProfile from "./defaultProfile.png";
import { Link } from "react-router-dom";
import mobileDefaultProfile from "./mobileDefaultProfile.png";

const MainInputInfo = () => {
  const [petName, setPetName] = useState("");
  const [petGender, setPetGender] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petSpecies, setPetSpecies] = useState("");
  const navigate = useNavigate();

  const handleClick = async () => {
    localStorage.setItem('petName', petName); 
    const petData = {
      name: petName,
      gender: petGender,
      age: petAge,
      species: petSpecies,
    };

    console.log("Sending pet data: ", JSON.stringify(petData));

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("로그인이 필요합니다.");
        navigate("/login");
        return;
      }
      console.log(`토큰--> ${token}`);

      const response = await fetch("https://www.catchhealth.shop/api/v1/pets/", {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': "application/json",
        },
        body: JSON.stringify(petData),
      });

      if (!response.ok) {
        console.error("응답 상태 코드:", response.status);
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

  const handleAgeChange = (e) => {
    const value = e.target.value;
    if (value === "" || isNaN(Number(value))) {
      setPetAge("");
    } else {
      setPetAge(Number(value));
    }
  };  

  return (
    <div>
      <BrowserView>
        <div id="MainInputInfoWrapper">
          <div>
            <h1>애완동물의 정보을 입력해 주세요!</h1>
            </div>
          <div className="inputWrapper">
            <input
              id="nameInput"
              type="text"
              placeholder="이름"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
            />
          </div>
          <div className="inputWrapper">
            <input
              id="genderInput"
              type="text"
              placeholder="성별(M/F)"
              value={petGender}
              onChange={(e) => setPetGender(e.target.value)}
            />
          </div>
          <div className="inputWrapper">
            <input
              id="ageInput"
              type="text"
              placeholder="나이"
              value={petAge}
              onChange={(e) => setPetAge(e.target.value)}
            />
          </div>
          <div className="inputWrapper">
            <input
              id="speciesInput"
              type="text"
              placeholder="종"
              value={petSpecies}
              onChange={(e) => setPetSpecies(e.target.value)}
            />
          </div>
          <div>
            <p>이전에 이미 검사하셨던 기록이 있어도 이전과 같이 입력해 주세요!</p>
          </div>
          <div>
            <button onClick={handleClick} id="diagnoseButton">
              진단받기
            </button>
          </div>
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
          <input
            id="nameInput"
            type="text"
            placeholder="이름을 입력해 주세요"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
          />
          <div id="h1Wrapper">
            <h1>애완동물의 성별을 입력해 주세요.</h1>
          </div>
          <input
            id="genderInput"
            type="text"
            placeholder="성별을 입력해 주세요 (M/F)"
            value={petGender}
            onChange={(e) => setPetGender(e.target.value)}
          />
          <div id="h1Wrapper">
            <h1>애완동물의 나이를 입력해 주세요.</h1>
          </div>
          <input
            id="ageInput"
            type="text"
            placeholder="나이를 입력해 주세요"
            value={petAge}
            onChange={handleAgeChange}
          />
          <div id="h1Wrapper">
            <h1>애완동물의 종을 입력해 주세요.</h1>
          </div>
          <input
            id="speciesInput"
            type="text"
            placeholder="종을 입력해 주세요"
            value={petSpecies}
            onChange={(e) => setPetSpecies(e.target.value)}
          />
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
