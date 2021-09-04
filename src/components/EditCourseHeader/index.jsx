import React, { useContext, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TextField from '@material-ui/core/TextField';
import { TeacherContext } from '../../providers/TeacherProvider';
import Container from '../Container';
import DropArea from '../DropArea';
import ButtonIcon from '../ButtonIcon';
import warningIcon from '../../assets/icons/warning.svg';
import saveWhiteIcon from '../../assets/icons/save-white.svg';
import cancelWhiteIcon from '../../assets/icons/cancel-white.svg';
import confirmBlackIcon from '../../assets/icons/confirm-black.svg';
import imageBlackIcon from '../../assets/icons/image-black.svg';
import * as S from './styles';

const schema = yup.object().shape({
  courseName: yup
    .string()
    .required('Título obrigatório')
    .test('title-validation', 'Título inválido', val => {
      return !/[^A-Za-z0-9áãâéêíóõúç\s'?!.()/-]/.exec(val);
    }),
  description: yup.string().required('Descrição obrigatória'),
});

function EditCourseHeader() {
  const history = useHistory();

  const {
    modulesNumber,
    saveCourse,
    courseCategories,
    handleSetCourseCategories,
    categories,
    cancelEditCourse,
    // handleSetEditStatus,
  } = useContext(TeacherContext);

  const [modalWarning, setModalWarning] = useState(false);

  const handleSetModalWarningOpen = useCallback(() => {
    setModalWarning(true);
  }, []);

  const handleSetModalWarningClose = useCallback(() => {
    setModalWarning(false);
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const editConclude = useCallback(
    ({ courseName, description }) => {
      saveCourse({ courseName, description });
      setTimeout(() => {
        history.push('/dashboard/teacher/course-data');
      }, 4000);
    },
    [saveCourse, history],
  );

  const onCategoryClick = cat => {
    handleSetCourseCategories(prev => [...prev, cat]);
  };

  return (
    <Container
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      width="90%"
      margin="50px 0 35px 0"
    >
      <Container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        width="100%"
        margin="0 0 50px 0"
      >
        <Container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          width="63%"
        >
          <S.Text
            size="20px"
            weight="normal"
            color="primary"
            margin="0 0 35px 0"
          >
            Edição de curso
          </S.Text>
          <Container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            width="100%"
          >
            <S.Input>
              <TextField
                type="text"
                id="input-course-title"
                variant="outlined"
                placeholder="Título do curso"
                margin="dense"
                fullWidth
                {...register('courseName')}
                helperText={errors.courseName?.message}
                error={errors.courseName}
              />
            </S.Input>
            <S.Input>
              <TextField
                type="text"
                id="input-course-description"
                variant="outlined"
                placeholder="Descrição"
                margin="dense"
                fullWidth
                {...register('description')}
                helperText={errors.description?.message}
                error={errors.description}
              />
            </S.Input>
          </Container>
          <Container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            width="100%"
            margin="10px 0 0 0"
          >
            <Container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              width="30%"
            >
              <Container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                width="100%"
              >
                <S.Text fontSize="14px" weight="500" margin="0 10px 0 0">
                  Número de módulos:
                </S.Text>
                <S.Text>{modulesNumber}</S.Text>
              </Container>
              <Container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                width="100%"
              >
                <S.Text fontSize="14px" weight="500" margin="0 10px 0 0">
                  Valor:
                </S.Text>
                <S.Text>GRATUITO</S.Text>
              </Container>
            </Container>
            <Container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              width="70%"
            >
              <S.Text fontSize="14px" weight="500" margin="2.5px 0 6px 0">
                Categorias:
              </S.Text>
              <Container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                width="100%"
                wrap="wrap"
                margin="0 0 20px 0"
              >
                {categories.map(data => (
                  <S.CatOption
                    onClick={() => onCategoryClick(data.name)}
                    key={data.id}
                    label={data.name}
                    color={
                      courseCategories.includes(data.name)
                        ? 'primary'
                        : 'default'
                    }
                  />
                ))}
              </Container>
            </Container>
          </Container>
        </Container>
        <Container
          direction="column"
          justifyContent="center"
          alignItems="center"
          width="37%"
        >
          <DropArea
            width="95%"
            height="300px"
            borderLine="dashed"
            borderRadius="5px"
            borderColor="secondary"
          >
            <ButtonIcon icon={imageBlackIcon} color="neutral">
              Adicionar poster do curso
            </ButtonIcon>
          </DropArea>
        </Container>
      </Container>
      <Container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        width="100%"
      >
        <ButtonIcon icon={saveWhiteIcon} onClick={handleSubmit(editConclude)}>
          Salvar curso
        </ButtonIcon>
        <ButtonIcon
          icon={cancelWhiteIcon}
          color="secondary"
          onClick={() => {
            handleSetModalWarningOpen();
          }}
        >
          Cancelar
        </ButtonIcon>
        <S.ModalContainer
          open={modalWarning}
          onClose={() => {
            handleSetModalWarningClose();
          }}
          aria-labelledby="add-module-modal"
        >
          <S.ModalContent>
            <Container
              direction="column"
              justifyContent="center"
              alignItems="center"
              width="400px"
            >
              <S.Icon src={warningIcon} />
              <S.Text margin="20px 0 0 0">
                Tem certeza que deseja cancelar o cadastro do curso?
              </S.Text>
            </Container>
            <Container
              direction="row"
              justifyContent="center"
              alignItems="center"
              width="100%"
              margin="20px 0 0 0"
            >
              <ButtonIcon
                icon={confirmBlackIcon}
                color="neutral"
                onClick={() => {
                  cancelEditCourse();
                  handleSetModalWarningClose();
                  history.push('/dashboard/teacher');
                }}
                margin="2px 10px"
              >
                Sim
              </ButtonIcon>
              <ButtonIcon
                icon={cancelWhiteIcon}
                color="secondary"
                margin="2px 10px"
                onClick={() => {
                  handleSetModalWarningClose();
                }}
              >
                Cancelar
              </ButtonIcon>
            </Container>
          </S.ModalContent>
        </S.ModalContainer>
      </Container>
    </Container>
  );
}

export default EditCourseHeader;
