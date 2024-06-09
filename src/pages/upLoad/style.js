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
  height: 100%;
  position: relative;
  background-image: linear-gradient(to right, transparent 50%, ${maindeepColor} 50%);
  background-size: 100% 100%;
  overflow: auto;
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
  margin-top: 10%;
  margin-left: 9%;
`;

S.FileInputLabel = styled.label`
  margin: 5% 8%;
  width: 25%;
  height: 45%;
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

S.SubmitButton = styled.button`
  width: 240px;
  height: 60px;
  background-color: ${({ theme, isFileSelected }) => isFileSelected ? theme.PALETTE.primary["main_deep"] : '#EEEDED'};
  color: ${({ theme, isFileSelected }) => isFileSelected ? '#fff' : '#545454'};;
  font-size: ${({ theme }) => theme.FONT_SIZE["default"]};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["semibold"]};
  border: none;
  border-radius: 50px;
  cursor: pointer;
  margin-left: 11.4%;
  margin-bottom: 3%;
  pointer-events: ${({ isFileSelected }) => isFileSelected ? 'auto' : 'none'};
`;


S.ExampleText = styled.div`
  position: absolute;
  right: 40%;
  top: 10%;
  color: #000; 
  font-size: ${({ theme }) => theme.FONT_SIZE["h4"]};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["semibold"]};
`;


S.RightText = styled.div`
  position: absolute;
  right: 3%;
  top: 53%;
  color: #000; 
  font-size: ${({ theme }) => theme.FONT_SIZE["h4"]};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["semibold"]};
`;

S.WrongText = styled.div`
  position: absolute;
  right: 3%;
  top: 93%;
  color: #000; 
  font-size: ${({ theme }) => theme.FONT_SIZE["h4"]};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["semibold"]};
`;

S.Image = styled.img`
  position: absolute;
  right: 20%;
  top: 16%;
  width: 25%;
  height: 35%;
  border: solid 5px ${maindeepColor};
  border-radius: 50px;
`

S.Vector = styled.img`
  position: absolute;
  right: 38%;
  top: 53%;
  width: 7%;
  height: 12%;
`

S.VectorX = styled.img`
  position: absolute;
  right: 34%;
  top : 89%;
  width: 6%;
  height: 10%;
`

S.WrongImage = styled.img`
  position: absolute;
  right: 2%;
  top: 57%;
  width: 25%;
  height: 35%;
  border: solid 5px ${maindeepColor};
  border-radius: 50px;
  box-sizing: border-box;
`

export default S;
