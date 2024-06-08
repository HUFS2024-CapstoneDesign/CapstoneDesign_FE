import styled from "styled-components";

const S = {};

S.Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

S.MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-right: 20%;
  margin-top: 40%;
`;

S.ProfileNicknameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  margin-right: 25%;
`;

S.ProfileContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-left: 20%;
`;

S.ProfileImage = styled.img`
  width: 6em;
  height: 6em;
  border-radius: 50%;
  border: solid 2px #FF984D;
`;

S.IconOverlay = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: white;
  border-radius: 50%;
`;

S.NicknameContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 30px; 
  white-space: nowrap;
`;

S.NicknameInput = styled.input`
  font-size: 20px;
  width: 200px;
`;

S.EditButton = styled.button`
  width: 80px;
  height: 40px;
  background-color: ${({ isEditing }) => (isEditing ? '#81D4FA' : '#FF7816')};
  color: #fff;
  font-size: ${({ theme }) => theme.FONT_SIZE["default"]};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["semibold"]};
  border-radius: 50px;
  border: none;
`;


S.AddressContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 15%;
  gap: 30px; 
  white-space: nowrap;
`;

S.AddressInput = styled.input`
  font-size: 20px;
  width: 500px;
`;

S.PetRecordContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  gap: 20px;
  position: relative;
  margin-left: 25%;
`;

S.PetRecord = styled.div`
  position: relative;
  border: solid 2px #FF984D;
  border-radius: 50px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  text-align: left;
  font-size: ${({ theme }) => theme.FONT_SIZE["h4"]};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["regular"]};
`;

S.DeleteButton = styled.button`
  width: 150px;
  height: 40px;
  background-color: #FF7816; 
  color: #fff;
  font-size: ${({ theme }) => theme.FONT_SIZE["default"]};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["semibold"]};
  border-radius: 50px;
  border: none;
  cursor: pointer;
  grid-column: 1 / -1;
  justify-self: end;
  margin-top: 20px;
`;

S.SelectButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: ${({ selected }) => (selected ? '#FF984D' : '#FFFFFF')};
  color: ${({ selected }) => (selected ? '#FFFFFF' : '#FF984D')};
  border-radius: 25px;
  border : solid 1px #FF984D;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 10px;
`;


S.ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

S.ModalWrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

S.Modal = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 500px;
  width: 500px;
  & p{
    margin-top: 100px;
    text-align: center;
    font-size: ${({ theme }) => theme.FONT_SIZE["default"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["regular"]};
  }
`;

S.Image = styled.img`
  width: 240px;
  height: 80px;
`

S.CancleButton = styled.button`
  width: 150px;
  height: 40px;
  background-color: #81D4FA; 
  color: #000;
  font-size: ${({ theme }) => theme.FONT_SIZE["default"]};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["semibold"]};
  border-radius: 50px;
  border: none;
  cursor: pointer;
  grid-column: 1 / -1;
  justify-self: end;
  margin-top: 20px;
  margin-left: 50px;
`;

S.ModalButtonContainer = styled.div`
margin: 50px;
`

S.LogoutButton = styled.button`
  font-size: ${({ theme }) => theme.FONT_SIZE["default"]};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["semibold"]};
  cursor: pointer;
  border : none;
  background-color: #fff;
  margin: 30px;
`


export default S;
