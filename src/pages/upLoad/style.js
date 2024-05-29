import styled from "styled-components";

// 투명도 조절 함수
const hexToRgba = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const maindeepColor = ({ theme }) => {
  const mainDeepColor = theme.PALETTE.primary.main_deep;
  const rgbaColor = hexToRgba(mainDeepColor, 0.5);
  return rgbaColor;
};

const S = {};

S.UploadContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-image: linear-gradient(to right, transparent 50%, ${maindeepColor} 50%);
  
  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 50%; 
    border: 3px solid #ff984d;
    box-sizing: border-box;
  }
`;

S.H4 = styled.h4`
  font-size: ${({ theme }) => theme.FONT_SIZE["h4"]};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["semibold"]};
  color: #000000;
  margin: 100px;
`;

S.P = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE["h4"]};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["regular"]};
  color: #000000;
  margin-top: 15%;
  margin-left: 8%;
`;

S.FileInputLabel = styled.label`
  display: block;
  margin: 5% 8%;
  width: 300px;
  height: 300px;
  border: solid 5px ${({ theme }) => theme.PALETTE.primary["main_deep"]};
  border-radius: 50px;
  background-color: #EEEDED;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  input {
    display: none;
  }

  svg {
    font-size: 50px;
    margin-bottom: 10px;
  }
  img {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
`;

S.FileInfo = styled.div`
  margin: 20px 8%;
`;

export default S;
