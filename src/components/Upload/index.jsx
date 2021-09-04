import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { api } from '../../services/api';
import { useUser } from '../../providers/UserProvider';
import * as S from './styles';

function Upload() {
  const { photo, setPhoto } = useUser();
  const [selectedFile, setSelectedFile] = useState([]);
  const [loading, setLoading] = useState([]);
  const acceptedFiles = ['image/jpg', 'image/jpeg'];

  const fileSelectedHandler = event => {
    console.log(event.target.files[0]);
    setSelectedFile(event.target.files[0]);
    setLoading('Foto carregada, clique em enviar.');
  };

  const fileUploadHandler = async () => {
    if (acceptedFiles.includes(selectedFile.type)) {
      const formData = new FormData();
      formData.append('avatar', selectedFile);

      try {
        const { data } = await api.put('/updatephoto', formData, {
          onUploadProgress: () => {
            setLoading('Enviando...');
          },
        });
        setLoading('Foto atualizada.');
        setTimeout(() => {
          setLoading('');
        }, 1000);
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
    <S.Conteiner>
      <Avatar src={photo} />
      <S.LabelChoosenPhoto>
        <S.ChoosenPhoto
          id="inputPhoto"
          type="file"
          name="avatar"
          onChange={fileSelectedHandler}
          accept=".jpg,.png,.jpeg,.svg"
        />
        <span>Alterar foto</span>
      </S.LabelChoosenPhoto>
      <S.SendPhoto type="submit" onClick={fileUploadHandler}>
        Enviar foto
      </S.SendPhoto>
      <S.Return>{loading}</S.Return>
    </S.Conteiner>
  );
}

export default Upload;
