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

S.FormContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;


S.PasswordContainer = styled.div`
  position: relative;
  width: 90%;
  height: 60px;
  box-sizing: border-box;
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
  }
`;

S.IdInput = styled(S.Input)`
  margin-left: 8%; 
`;



S.Icon = styled.div`
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
  cursor: pointer;
`;

S.Form = styled.form`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


S.InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  margin: 20px 0;
`;

S.SubmitButton = styled.button`
  width: 240px;
  height: 60px;
  background-color: ${({ theme }) => theme.PALETTE.primary["main_deep"]};
  color: #fff;
  font-size: ${({ theme }) => theme.FONT_SIZE["default"]};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["semibold"]};
  border: none;
  border-radius: 50px;
  margin-top: 5%;
  cursor: pointer;
`;

S.Message = styled.p`
  color: ${props => props.color};
  font-size: ${({ theme }) => theme.FONT_SIZE["sub"]};
  align-self: flex-start;
  margin-left: 25%;
`;


S.OverlapButton = styled.button`
  width: 142px;
  height: 60px;
  background-color: ${({ theme }) => theme.PALETTE.primary["main_soft"]};
  color: #fff;
  font-size: ${({ theme }) => theme.FONT_SIZE["default"]};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["semibold"]};
  border: solid 3px ${({ theme }) => theme.PALETTE.primary["main_deep"]};
  border-radius: 50px;
  margin-left: 20px;
  cursor: pointer;
`;

S.IdContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 600px;
  margin: 20px 0;
`;
export default S;