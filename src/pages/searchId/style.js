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

S.IdSearchContainer = styled.div`
display: flex;
flex-direction : column;
justify-content: center;
margin-top: 5%;
height: 500px;
width: 60%;
border: solid 3px ${ ({theme}) => theme.PALETTE.primary["main_deep"]};
margin-bottom: 50px;
border-radius: 50px;
@media (max-width: 727px) {
    width : 90%;
    margin-top: 10%;
  }
`
S.P = styled.p`
font-size:${ ({theme}) => theme.FONT_SIZE["h4"]};
font-weight: ${({theme})=> theme.FONT_WEIGHT["regular"]};
text-align: center;
margin: 8%;
`

S.ResultP = styled.p`
font-size:${ ({theme}) => theme.FONT_SIZE["h4"]};
font-weight: ${({theme})=> theme.FONT_WEIGHT["semibold"]};
text-align: center;
margin-bottom: 10%;
margin-top: 2%;
`
S.SubP = styled.p`
font-size:${ ({theme}) => theme.FONT_SIZE["sub"]};
font-weight: ${({theme})=> theme.FONT_WEIGHT["thin"]};
text-align: center;
margin-top: 8%;
margin-bottom: 2%;
`


S.LoginButton = styled.button`
  margin-top: 3%;
  margin-bottom: 10%;
  width: 400px;
  height: 50px;
  border-radius: 50px;
  color: #fff;
  background-color: ${({ theme }) => theme.PALETTE.primary["main_deep"]};
  border: none;
  cursor: pointer;
  font-size: ${({theme}) => theme.FONT_SIZE["default"]};
  font-weight: ${({theme})=> theme.FONT_WEIGHT["regular"]};
  @media (max-width: 727px) {
    width : 200px;
    margin-top: 15%;
  }
`;

export default S;