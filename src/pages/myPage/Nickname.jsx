import React, { useState, useEffect } from 'react';
import S from './style.js';

const Nickname = ({ initialNickname, updateNickname }) => {
  const [nickname, setNickname] = useState(initialNickname);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setNickname(initialNickname);
  }, [initialNickname]);

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  const toggleEdit = () => {
    if (isEditing) {
      updateNickname(nickname);
    }
    setIsEditing(!isEditing);
  };

  return (
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
  );
};

export default Nickname;
