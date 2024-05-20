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
  width: 300px;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
  @media (max-width: 727px) {
    width: 200px;
    height: 60px;
  }
`


export default S;