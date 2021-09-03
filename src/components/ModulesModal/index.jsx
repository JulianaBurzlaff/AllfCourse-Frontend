import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TeacherContext } from '../../providers/TeacherProvider';
import Container from '../Container';
import ButtonIcon from '../ButtonIcon';
import saveWhiteIcon from '../../assets/icons/save-white.svg';
import * as S from './styles';

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Título obrigatório')
    .test('title-validation', 'Título inválido', val => {
      return !/[^A-Za-z0-9áãâéêíóõúç\s'?!.()]/.exec(val);
    }),
  description: yup.string().required('Descrição obrigatória'),
});

function CategoriesModal() {
  const { modulesModalOpen, handleModulesModalClose, saveModule } =
    useContext(TeacherContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <S.ModalContainer
      open={modulesModalOpen}
      onClose={() => {
        handleModulesModalClose();
      }}
      aria-labelledby="course-categories-modal"
    >
      <S.ModalContent>
        <Container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          width="100%"
          overflowX="hidden"
          overflowY="hidden"
        >
          <S.Title
            color="primary"
            fontSize="16px"
            weight="400"
            width="800px"
            margin="0 0 10px 0"
          >
            Edição de módulo
          </S.Title>
          <Container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            width="100%"
            height="60vh"
            overflowX="hidden"
            overflowY="auto"
          >
            <S.Input
              type="text"
              id="input-course-title"
              variant="outlined"
              placeholder="Título do módulo"
              margin="dense"
              fullWidth
              {...register('name')}
              helperText={errors.name?.message}
              error={errors.name}
            />
            <S.TextArea
              type="text"
              id="input-course-description"
              variant="outlined"
              placeholder="Descrição"
              margin="dense"
              fullWidth
              multiline
              {...register('description')}
              helperText={errors.description?.message}
              error={errors.description}
            />
          </Container>
        </Container>
        <Container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          width="100%"
          overflowX="hidden"
          overflowY="hidden"
          margin="20px 0 0 0"
        >
          <ButtonIcon icon={saveWhiteIcon} onClick={handleSubmit(saveModule)}>
            Salvar módulo
          </ButtonIcon>
          <ButtonIcon
            icon={saveWhiteIcon}
            color="secondary"
            onClick={() => {
              handleModulesModalClose();
            }}
          >
            Cancelar
          </ButtonIcon>
        </Container>
      </S.ModalContent>
    </S.ModalContainer>
  );
}

export default CategoriesModal;
