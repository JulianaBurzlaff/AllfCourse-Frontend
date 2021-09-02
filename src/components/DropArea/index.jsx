import React, { useContext } from 'react';
import Dropzone from 'react-dropzone';
import { UploadContext } from '../../providers/UploadProvider';
import * as S from './styles';

function DropArea({
  width,
  height,
  dropWidth,
  dropHeight,
  borderRadius,
  borderLine,
  borderColor,
  image,
  children,
}) {
  const { uploadedFile, handleUpload } = useContext(UploadContext);

  const renderDragMessage = isDragReject => {
    if (isDragReject) {
      return <S.UploadMessage>Arquivo não suportado</S.UploadMessage>;
    }
    return <></>;
  };

  return (
    <S.Container
      width={width}
      height={height}
      borderRadius={borderRadius}
      borderLine={borderLine}
      borderColor={borderColor}
      image={uploadedFile?.preview ? uploadedFile.preview : image}
    >
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
            width={dropWidth}
            height={dropHeight}
          >
            <input {...getInputProps()} />
            {renderDragMessage(isDragReject)}
            {children}
          </S.DropContainer>
        )}
      </Dropzone>
    </S.Container>
  );
}

export default DropArea;
