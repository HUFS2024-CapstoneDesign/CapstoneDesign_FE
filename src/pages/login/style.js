import styled from "styled-components";

const S = {};

S.Background = styled.div`
  width: 90%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

S.H1 = styled.h1`
  font-size: ${({ theme }) => theme.FONT_SIZE["h1"]};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
  color: #000000;
  margin-top: 10%;
  margin-bottom: 5%;
  @media (max-width: 727px) {
    margin-top: 25%;
  }
`;

S.Input = styled.input`
  width: 500px;
  height: 60px;
  border: solid 2px #000000;
  border-radius: 50px;
  padding: 0 10px;
  @media (max-width: 727px) {
    width : 90%;
    margin-top: 10%;
  }`;

S.PasswordContainer = styled.div`
  position: relative;
  box-sizing: border-box;
`;

S.InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;


S.Icon = styled.div`
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translateY(-50%);
  cursor: pointer;
`;

S.LinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 1%;
  margin-top: 1%;
  margin-left: 10%;
& p{
  font-size: 16px;
  color: #000;
  margin: 0 10px;
}
`
S.SubmitButton = styled.button`
  width: 240px;
  height: 60px;
  background-color: ${({ theme }) => theme.PALETTE.primary["main_deep"]};
  color: #fff;
  font-size: ${({ theme }) => theme.FONT_SIZE["default"]};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["semibold"]};
  border: none;
  border-radius: 50px;
  margin-top: 3%;
  cursor: pointer;
`;


export default S;