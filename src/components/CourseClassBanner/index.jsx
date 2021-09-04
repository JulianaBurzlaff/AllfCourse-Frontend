import React, { useContext, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TeacherContext } from '../../providers/TeacherProvider';
import addWhiteIcon from '../../assets/icons/add-white.svg';
import saveWhiteIcon from '../../assets/icons/save-white.svg';
import cancelWhiteIcon from '../../assets/icons/cancel-white.svg';
import Container from '../Container';
import ButtonIcon from '../ButtonIcon';
import CourseClassContent from '../CourseClassContent';
import * as S from './styles';

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Título obrigatório')
    .test('title-validation', 'Título inválido', val => {
      return !/[^A-Za-z0-9áãâéêíóõúç\s'?!.()/-]/.exec(val);
    }),
  description: yup.string().required('Descrição obrigatória'),
  link: yup.string().required('URL obrigatória'),
});

function CourseClassBanner({ classes, position }) {
  const history = useHistory();
  const {
    editStatus,
    courseClasses,
    courseModules,
    handleSetCourseClasses,
    handleSetCourseModules,
  } = useContext(TeacherContext);

  const [modalState, setModalState] = useState(false);

  const handleSetModalStateOpen = useCallback(() => {
    setModalState(true);
  }, []);

  const handleSetModalStateClose = useCallback(() => {
    setModalState(false);
  }, []);

  const [nameValue, setNameValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const [linkValue, setLinkValue] = useState('');

  const handleSetNameValue = useCallback(data => {
    setNameValue(data);
  }, []);

  const handleSetDescriptionValue = useCallback(data => {
    setDescriptionValue(data);
  }, []);

  const handleSetLinkValue = useCallback(data => {
    setLinkValue(data);
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const saveClass = ({ name, description, link }) => {
    if (editStatus === 0) {
      const modules = courseModules;
      const allClasses = courseClasses;

      const classData = {
        name,
        description,
        link,
        order: (classes.length + 1).toString(),
        position,
      };

      allClasses.push(classData);
      handleSetCourseClasses(allClasses);
      handleSetCourseModules(modules);
      handleSetModalStateClose();
      history.push('/dashboard/teacher/edit-course');
    } else if (editStatus === 1) {
      console.log('');
    }
  };

  return (
    <Container
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      width="100%"
    >
      {classes.map(classData => {
        return (
          <CourseClassContent
            key={`${classData.position}${classData.order}`}
            classData={classData}
          />
        );
      })}
      <Container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        width="100%"
        margin="10px 0 0 0"
      >
        {editStatus === 0 || editStatus === 1 ? (
          <ButtonIcon
            color="primary"
            icon={addWhiteIcon}
            fontSize="12px"
            onClick={() => {
              handleSetNameValue('');
              handleSetDescriptionValue('');
              handleSetLinkValue('');
              handleSetModalStateOpen();
            }}
          >
            Nova aula
          </ButtonIcon>
        ) : (
          <></>
        )}
      </Container>
      <S.ModalContainer
        open={modalState}
        onClose={() => {
          handleSetModalStateClose();
        }}
        aria-labelledby="add-class-modal"
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
                id="input-class-name"
                variant="outlined"
                placeholder="Título da aula"
                margin="dense"
                fullWidth
                {...register('name')}
                helperText={errors.name?.message}
                error={errors.name}
                value={nameValue}
                onChange={event => {
                  handleSetNameValue(event.target.value);
                }}
              />
              <S.Input
                type="text"
                id="input-class-link"
                variant="outlined"
                placeholder="URL da aula"
                margin="dense"
                fullWidth
                {...register('link')}
                helperText={errors.link?.message}
                error={errors.link}
                value={linkValue}
                onChange={event => {
                  handleSetLinkValue(event.target.value);
                }}
              />
              <S.TextArea
                type="text"
                id="input-class-description"
                variant="outlined"
                placeholder="Descrição"
                margin="dense"
                fullWidth
                multiline
                {...register('description')}
                helperText={errors.description?.message}
                error={errors.description}
                value={descriptionValue}
                onChange={event => {
                  handleSetDescriptionValue(event.target.value);
                }}
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
            <ButtonIcon icon={saveWhiteIcon} onClick={handleSubmit(saveClass)}>
              Salvar aula
            </ButtonIcon>
            <ButtonIcon
              icon={cancelWhiteIcon}
              color="secondary"
              onClick={() => {
                handleSetNameValue('');
                handleSetDescriptionValue('');
                handleSetLinkValue('');
                handleSetModalStateClose();
              }}
            >
              Cancelar
            </ButtonIcon>
          </Container>
        </S.ModalContent>
      </S.ModalContainer>
    </Container>
  );
}

export default CourseClassBanner;
