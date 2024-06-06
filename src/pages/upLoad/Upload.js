import React, { useState, useRef } from "react";
import S from "./style.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import exampleimage from "./img/cat-5249726_1280.jpg";
import vector from "./img/Vector.png";
import wrongexampleimage from "./img/cat-5366389_1280.jpg";
import vertorX from "./img/VectorX.png";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate(); // Initialize navigate

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    if (!selectedFile) {
      fileInputRef.current.click();
    } else {
      console.log("파일이 업로드 되었습니다: ", selectedFile);
      navigate("/analyze"); // Navigate to IsAnalyzing page
    }
  };

  return (
    <S.UploadContainer>
      <S.P>소중한 고양이의 사진을 업로드해주세요</S.P>
      <S.FileInputLabel>
        {previewUrl ? (
          <img src={previewUrl} alt="Preview" style={{ width: "100%", height: "100%", borderRadius: "50px" }} />
        ) : (
          <>
            <FontAwesomeIcon icon={faImage} size="3x" />
            <p style={{ marginTop: "30px" }}>사진 업로드하기</p>
          </>
        )}
        <input type="file" onChange={handleFileChange} accept="image/*" ref={fileInputRef} />
      </S.FileInputLabel>
      <S.SubmitButton onClick={handleButtonClick} disabled={!selectedFile} isFileSelected={!!selectedFile}>
        분석하기
      </S.SubmitButton>
      <S.ExampleText>사진 예시</S.ExampleText>
      <S.Image src={exampleimage} />
      <S.Vector src={vector} />
      <S.RightText>예시 사진처럼 최대한 고양이의 눈을 확대해주세요.</S.RightText>
      <S.WrongImage src={wrongexampleimage} />
      <S.VectorX src={vertorX} />
      <S.WrongText>
        눈이 보이지 않거나, 흔들리거나,
        <br /> 초점이 잡히지 않은 사진은 질병을 인식할 수 없어요.
      </S.WrongText>
    </S.UploadContainer>
  );
};

export default Upload;
