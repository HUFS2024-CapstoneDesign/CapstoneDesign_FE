import React, { useState, useRef } from 'react';
import S from './style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import PetRecord from './PetRecord.jsx';

const Mypage = () => {
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);

  const [nickname, setNickname] = useState("또리누나");
  const [isEditing, setIsEditing] = useState(false);

  const [address, setAddress] = useState("서울특별시 강남구 대치동 ㅇㅇ아파트 101동 101호");
  const [isEditingAddress, setIsEditingAddress] = useState(false);

  const [petRecords, setPetRecords] = useState([
    { id: 1, name: '또리', gender: '남', age: '5세', type: '코리안숏헤어', diagnosis: '결막염' , date : '2023.10.22' },
    { id: 2, name: '레미', gender: '여', age: '7세', type: '페르시안', diagnosis: '안검내반증' , date : '2021.08.10'},
    { id: 3, name: '초코', gender: '남', age: '13세', type: '스코티시폴드', diagnosis: '결막염', date: '2023.10.22' }
  ]);
  const [selectedRecordIds, setSelectedRecordIds] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onloadend = () => {
      setProfileImage(reader.result);
    };
    
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const toggleEditAddress = () => {
    setIsEditingAddress(!isEditingAddress);
  };

  const handleRecordClick = (id) => {
    const newSelectedRecordIds = selectedRecordIds.includes(id)
      ? selectedRecordIds.filter(recordId => recordId !== id)
      : [...selectedRecordIds, id];
    setSelectedRecordIds(newSelectedRecordIds);
  };

  const handleDeleteRecord = () => {
    if (selectedRecordIds.length > 0) {
      setPetRecords(petRecords.filter(record => !selectedRecordIds.includes(record.id)));
      setSelectedRecordIds([]);
    }
  };

  return (
    <S.Background>
      <S.MainContainer>
        <S.ProfileNicknameContainer>
        <S.ProfileContainer onClick={handleIconClick}>
          {profileImage ? (
            <S.ProfileImage src={profileImage} alt="profile" />
          ) : (
            <FontAwesomeIcon icon={faCircleUser} size="6x" color='#FF984D' />
          )}
          <S.IconOverlay>
            <FontAwesomeIcon icon={faCirclePlus} size="2x" color='#FF984D' />
          </S.IconOverlay>
          <input
            type="file"
            style={{ display: 'none' }}
            onChange={handleFileChange}
            ref={fileInputRef}
          />
        </S.ProfileContainer>
        
        <S.NicknameContainer>
          {isEditing ? (
            <>
              <S.NicknameInput value={nickname} onChange={handleNicknameChange} />
              <S.EditButton onClick={toggleEdit} isEditing={isEditing}>수정 완료</S.EditButton>
            </>
          ) : (
            <>
              <span style={{ fontSize: '20px' }}>{nickname}</span>
              <S.EditButton onClick={toggleEdit} isEditing={isEditing}>수정</S.EditButton>
            </>
          )}
        </S.NicknameContainer>
        </S.ProfileNicknameContainer>
       
        <div style={{ fontSize: '15px', marginRight : "40%"}}>내 주소지</div>
        <S.AddressContainer>
          {isEditingAddress ? (
            <>
              <S.AddressInput value={address} onChange={handleAddressChange} />
              <S.EditButton onClick={toggleEditAddress} isEditing={isEditingAddress}>수정 완료</S.EditButton>
            </>
          ) : (
            <>
              <span style={{ fontSize: '20px' }}>{address}</span>
              <S.EditButton onClick={toggleEditAddress} isEditing={isEditingAddress}>수정</S.EditButton>
            </>
          )}
        </S.AddressContainer>
        <div style={{ fontSize: '15px', marginRight : "36%"}}>이전 진료 기록</div>
        <PetRecord
          petRecords={petRecords}
          handleRecordClick={handleRecordClick}
          selectedRecordIds={selectedRecordIds}
          handleDeleteRecord={handleDeleteRecord}
        />
      </S.MainContainer>
    </S.Background>
  );
};

export default Mypage;
