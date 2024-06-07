import React, { useEffect, useState } from 'react';
import S from './style.js';

const Address = ({ initialAddress, updateAddress }) => {
  const [address, setAddress] = useState(initialAddress);
  const [isEditingAddress, setIsEditingAddress] = useState(false);

  useEffect(() => {
    setAddress(initialAddress);
  }, [initialAddress]);

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const toggleEditAddress = () => {
    if (isEditingAddress) {
      updateAddress(address);
    }
    setIsEditingAddress(!isEditingAddress);
  };

  return (
    <>
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
    </>
  );
};

export default Address;
