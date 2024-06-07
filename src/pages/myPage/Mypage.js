import React, { useState, useRef, useEffect } from 'react';
import S from './style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import PetRecord from './PetRecord.jsx';
import Nickname from './Nickname.jsx';
import ConfirmDialog from './ConfirmDialog.jsx';
import Address from './Address.jsx';

const Mypage = () => {
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);

  const [nickname, setNickname] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const [address, setAddress] = useState(""); 
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


  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem('token');
        
        if (!token) {
          console.error("토큰이 없습니다.");
          return;
        }
        
        const response = await fetch('https://www.catchhealth.shop/api/v1/members/', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        
        const data = await response.json();
        if (data.isSuccess) {
          setNickname(data.data.nickName);
          setAddress(data.data.address);
        } else {
          console.error("회원 정보 조회 실패: ", data.message);
        }
      } catch (error) {
        console.error("로그인 정보를 불러오는데 실패했습니다.", error);
      }
    };
  
    fetchUserInfo();
  }, []);
  

  const updateNickname = async (newNickname) => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error("토큰이 없습니다.");
      return;
    }
  
    try {
      const response = await fetch('https://www.catchhealth.shop/api/v1/members/set-nickname', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nickName: newNickname }),
      });
  
      const data = await response.json();
  
      if (data.isSuccess) {
        setNickname(newNickname);
      } else {
        console.error("닉네임 변경 실패: ", data.message);
      }
    } catch (error) {
      console.error("닉네임 변경 중 오류가 발생했습니다.", error);
    }
  };

  const updateAddress = async (newAddress) => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error("토큰이 없습니다.");
      return;
    }

    try {
      const response = await fetch('https://www.catchhealth.shop/api/v1/members/set-address', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ address: newAddress }),
      });

      const data = await response.json();

      if (data.isSuccess) {
        setAddress(newAddress); 
      } else {
        console.error("주소 변경 실패: ", data.message);
      }
    } catch (error) {
      console.error("주소 변경 중 오류가 발생했습니다.", error);
    }
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

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
  
      const response = await fetch('https://www.catchhealth.shop/api/v1/members/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.ok) {
        alert('성공적으로 로그아웃되었습니다.');
        localStorage.removeItem('token'); 
        localStorage.removeItem('loggedIn'); 
        window.location.href = '/login'; 
      } else {
        alert('로그아웃에 실패했습니다.');
      }
    } catch (error) {
      alert('로그아웃에 실패했습니다.');
      console.error("로그아웃 처리 중 오류가 발생했습니다.", error);
    }
  };
  
  

  const handleConfirmDelete = async () => {
    try {
      const token = localStorage.getItem('token');
  
      const response = await fetch('https://www.catchhealth.shop/api/v1/members/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
  
      if (response.ok) {
        alert('회원 탈퇴가 성공적으로 처리되었습니다.');
        localStorage.removeItem('token'); 
        localStorage.removeItem('loggedIn'); 
        window.location.href = '/'; 
      } else {
        alert('회원 탈퇴에 실패했습니다.');
      }
    } catch (error) {
      alert('회원 탈퇴 처리 중 오류가 발생했습니다.');
      console.error("회원 탈퇴 처리 중 오류가 발생했습니다.", error);
    }
    setIsDialogOpen(false); 
  };
  


  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDeleteAccountClick = () => {
    setIsDialogOpen(true); 
  };
  
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
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
        <Nickname initialNickname={nickname} updateNickname={updateNickname} />
        </S.NicknameContainer>
        </S.ProfileNicknameContainer>
       
        <div style={{ fontSize: '15px', marginRight : "40%"}}>내 주소지</div>
        <S.AddressContainer>
         <Address initialAddress={address} updateAddress={updateAddress}/>
        </S.AddressContainer>
        <div style={{ fontSize: '15px', marginRight : "36%"}}>이전 진료 기록</div>
        <PetRecord
          petRecords={petRecords}
          handleRecordClick={handleRecordClick}
          selectedRecordIds={selectedRecordIds}
          handleDeleteRecord={handleDeleteRecord}
        />
        <div style={{marginLeft : "50%"}}>
         <S.LogoutButton onClick={handleLogout}>로그아웃</S.LogoutButton>
         <S.LogoutButton onClick={handleDeleteAccountClick}>회원 탈퇴</S.LogoutButton>
         </div>
        <ConfirmDialog
          isOpen={isDialogOpen}
          onClose={handleCloseDialog}
          onConfirm={handleConfirmDelete}
        />
      </S.MainContainer>
    </S.Background>
  );
};

export default Mypage;
