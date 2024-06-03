import React, { useState } from 'react';
import S from './style.js';

const PetRecord = ({ petRecords, handleRecordClick, selectedRecordIds }) => {
  const [showSelectButtons, setShowSelectButtons] = useState(false);
  
  const handleDeleteRecord = () => {
    setShowSelectButtons(!showSelectButtons);
  };

  return (
    <S.PetRecordContainer>
      {petRecords.map(record => (
        <S.PetRecord 
          key={record.id} 
          onClick={() => handleRecordClick(record.id)}
        >
          <div>이름 : {record.name}</div>
          <div>성별 : {record.gender}</div>
          <div>나이 : {record.age}</div>
          <div>종류 : {record.type}</div>
          <div>이전 진단 내역: {record.diagnosis}</div>
          <div>진단 날짜: {record.date}</div>
          {showSelectButtons && <S.SelectButton
            onClick={(e) => {
              e.stopPropagation();
              handleRecordClick(record.id);
            }}
            selected={selectedRecordIds.includes(record.id)}
          >
            {selectedRecordIds.includes(record.id) && '✔'}
          </S.SelectButton>}
        </S.PetRecord>
      ))}
      <S.DeleteButton
        onClick={handleDeleteRecord}
      >
        진료 기록 삭제하기
      </S.DeleteButton>
    </S.PetRecordContainer>
  );
};

export default PetRecord;
