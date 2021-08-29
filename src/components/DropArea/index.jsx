import React, { useContext } from 'react';
import Dropzone from 'react-dropzone';
import { UploadContext } from '../../providers/UploadProvider';
import avatar from '../../assets/avatar.svg';
import * as S from './styles';

function DropArea({ width, height, borderRadius, borderLine, borderColor }) {
  const { uploadedFile, handleUpload } = useContext(UploadContext);

  const renderDragMessage = isDragReject => {
    if (isDragReject) {
      return <S.UploadMessage>Arquivo não suportado</S.UploadMessage>;
    }
    return <></>;
  };

  return (
    <S.Container>
      <Dropzone
        accept="image/*"
        onDropAccepted={file => {
          handleUpload(file);
        }}
      >
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <S.DropContainer
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
            width={width}
            height={height}
            borderRadius={borderRadius}
            borderLine={borderLine}
            borderColor={borderColor}
            image={uploadedFile?.preview ? uploadedFile.preview : avatar}
          >
            <input {...getInputProps()} />
            {renderDragMessage(isDragReject)}
          </S.DropContainer>
        )}
      </Dropzone>
    </S.Container>
  );
}

export default DropArea;
