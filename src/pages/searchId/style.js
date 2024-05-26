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

S.SubmitButton = styled.button`
  width: 250px;
  height: 60px;
  border-radius: 50px;
  margin-left: 10px;
  color: #fff;
  font-size: 18px;
  background-color: ${ ({theme}) => theme.PALETTE.primary["main_deep"]};
  border: none;
  cursor: pointer;
  margin-top: 5%;
  margin-bottom: 30px;
  @media (max-width: 727px) {
    width : 60%;
    margin-top: 15%;
  }
`


export default S;