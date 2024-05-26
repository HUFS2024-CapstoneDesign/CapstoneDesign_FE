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
  margin-top: 30%;
  margin-bottom: 5%;
`;

S.FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

S.Form = styled.form`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

S.Input = styled.input`
  width: 450px;
  height: 60px;
  border: solid 3px #000000;
  border-radius: 50px;
  padding: 0 10px;
  box-sizing: border-box;
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

S.InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 600px;
  margin: 20px 0;
`;

S.NicknameIdContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 600px;
  margin: 20px 0;
`;

S.NicknameInputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

S.Label = styled.label`
  font-size: ${({ theme }) => theme.FONT_SIZE["h4"]};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["semibold"]};
  color: #000000;
  margin-bottom: 10px;
`;

S.EmailContainer = styled.div`
  display: flex;
  align-items: center;
  width: 450px;
  border: solid 3px #000000;
  border-radius: 50px;
  overflow: hidden;
`;

S.IDInput = styled.input`
  width: 100%;
  height: 60px;
  padding: 0 10px;
  box-sizing: border-box;
  border: none;
  &:focus {
    outline: none;
  }
`;

S.Select = styled.select`
  box-sizing: border-box;
  font-size: ${({ theme }) => theme.FONT_SIZE["default"]};
  background-color: transparent;
  border: none;
  &:focus {
    outline: none;
  }
`;

S.Icon = styled.div`
  position: absolute;
  top: 50%;
  right: 28%;
  transform: translateY(-50%);
  cursor: pointer;
`;

S.PasswordContainer = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
`;

S.ButtonContainer = styled.div`
  display: flex;
  width: 580px;
  height: 100px;
  justify-content: space-between;
  position: relative;
  margin-top: 30px;
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
  cursor: pointer;
`;

S.CancleButton = styled.button`
  width: 240px;
  height: 60px;
  background-color: ${({ theme }) => theme.PALETTE.primary["main_soft"]};
  color: #fff;
  font-size: ${({ theme }) => theme.FONT_SIZE["default"]};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["semibold"]};
  border: none;
  border-radius: 50px;
  cursor: pointer;
`;

export default S;
