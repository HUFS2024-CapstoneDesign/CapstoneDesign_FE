import styled from "styled-components";

const S = {};

S.Background = styled.div`
  width: 90%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto ;
`;

S.Image = styled.img`
  width: 500px;
  height: 200px;
  display: flex;
  align-items: center;
  @media (max-width: 727px) {
    width: 300px;
    height: 100px;
  }
`
S.H4 = styled.h4`
  font-size: ${ ({theme}) => theme.FONT_SIZE["h4"]};
  font-weight: ${({theme})=> theme.FONT_WEIGHT["semibold"]};
  color: #000000;
  margin: 100px;
  text-align: center;
`;
export default S;