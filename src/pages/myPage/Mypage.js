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

  //프로필 사진
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);
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


  const [nickname, setNickname] = useState("");
  const [isEditing, setIsEditing] = useState(false);

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
  
  //닉네임 수정
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

  //주소 수정
  const [address, setAddress] = useState(""); 
  const [isEditingAddress, setIsEditingAddress] = useState(false);

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

  //진료 기록 삭제하기
  
  const [selectedRecordIds, setSelectedRecordIds] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false); 

  const [petRecords, setPetRecords] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
  
    fetch('https://www.catchhealth.shop/api/v1/pets/', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => {
      if (data.isSuccess) { 
        const updatedPetRecords = data.data.map((pet, index) => {
          if (pet.name === '또리') {
            const diagnosisDate = new Date();
            const formattedDate = diagnosisDate.toISOString().split('T')[0];
            return {
              ...pet,
              diagnosis: '결막염',
              createdAt: formattedDate,
            };
          } else {
            const diagnosisList = ['결막염', '안검염', '각막부골편', '비궤양성각막염', '각막궤양'];
            const randomDiagnosis = diagnosisList[Math.floor(Math.random() * diagnosisList.length)];
            const diagnosisDate = new Date();
            diagnosisDate.setDate(diagnosisDate.getDate() - index);
            const formattedDate = diagnosisDate.toISOString().split('T')[0];
            return {
              ...pet,
              diagnosis: randomDiagnosis,
              createdAt: formattedDate,
            };
          }
        });
  
        setPetRecords(updatedPetRecords.map(pet => ({
          id: pet.petId,
          name: pet.name,
          gender: pet.gender === 'F' ? '여' : '남',
          age: `${pet.age}세`,
          type: pet.species,
          diagnosis: pet.diagnosis,
          createdAt: pet.createdAt,
        })));
      } else {
        console.error('Failed to fetch pet records');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }, []);
  
  

  const handleRecordClick = (id) => {
    const newSelectedRecordIds = selectedRecordIds.includes(id)
      ? selectedRecordIds.filter(recordId => recordId !== id)
      : [...selectedRecordIds, id];
    setSelectedRecordIds(newSelectedRecordIds);
  };


  const handleDeleteRecord = () => {
    if (!isDeleting) {
      setIsDeleting(true); 
    } else {
      if (selectedRecordIds.length > 0) {
        setPetRecords(petRecords.filter(record => !selectedRecordIds.includes(record.id)));
        setSelectedRecordIds([]);
      }
      setIsDeleting(false); 
    }
  };


  //로그아웃

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
  
  
  //회원탈퇴
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
       
        <div style={{ fontSize: '15px', marginRight : "30%"}}>내 주소지</div>
        <S.AddressContainer>
         <Address initialAddress={address} updateAddress={updateAddress}/>
        </S.AddressContainer>
        
        <div style={{ fontSize: '15px', marginRight : "27%"}}>이전 진료 기록</div>
        <PetRecord
          petRecords={petRecords}
          handleRecordClick={handleRecordClick}
          selectedRecordIds={selectedRecordIds}
          handleDeleteRecord={handleDeleteRecord}
          isDeleting={isDeleting} 
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
