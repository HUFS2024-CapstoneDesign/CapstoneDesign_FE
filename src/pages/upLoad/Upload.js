import React, { useState } from 'react';
import S from './style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage} from '@fortawesome/free-regular-svg-icons';

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <S.UploadContainer>
      <S.P>소중한 고양이의 사진을 업로드해주세요</S.P>
      <S.FileInputLabel>
        {previewUrl ? (
          <img src={previewUrl} alt="Preview" style={{ width: '100%', height: '100%', borderRadius: '50px' }} />
        ) : (
          <>
            <FontAwesomeIcon icon={faImage} size="3x" />
            <div>사진 업로드하기</div>
          </>
        )}
        <input type="file" onChange={handleFileChange} accept="image/*" />
      </S.FileInputLabel>
      {selectedFile && (
        <S.FileInfo>
          <S.H4>{selectedFile.name}</S.H4>
        </S.FileInfo>
      )}
    </S.UploadContainer>
  );
};

export default Upload;


