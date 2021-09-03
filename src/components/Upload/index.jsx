import React, { useState } from 'react';
import { api } from '../../services/api';
import { useUser } from '../../providers/UserProvider';

function Upload() {
  const { setPhoto } = useUser();
  const [selectedFile, setSelectedFile] = useState([]);
  const [loading, setLoading] = useState([]);
  const acceptedFiles = [
    'image/png',
    'image/jpg',
    'image/jpeg',
    'image/svg',
    'image/svg+xml',
  ];

  const fileSelectedHandler = event => {
    console.log(event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  };

  const fileUploadHandler = async () => {
    if (acceptedFiles.includes(selectedFile.type)) {
      const formData = new FormData();
      formData.append('avatar', selectedFile);

      try {
        const { data } = await api.put('/updatephoto', formData, {
          onUploadProgress: () => {
            setLoading('Fazendo upload...');
          },
        });
        setLoading('Upload realizado com sucesso');
        setPhoto('');
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    } else {
      setLoading('Erro, formato de imagem não aceito');
    }
  };
  return (
    <>
      <input
        type="file"
        name="avatar"
        onChange={fileSelectedHandler}
        accept=".jpg,.png,.jpeg,.svg"
      />
      <button type="submit" onClick={fileUploadHandler}>
        Upload
      </button>
      <span>{loading}</span>
    </>
  );
}

export default Upload;
