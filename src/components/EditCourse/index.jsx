import React, { useContext, useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TeacherContext } from '../../providers/TeacherProvider';
import Container from '../Container';
import ButtonIcon from '../ButtonIcon';
import saveWhiteIcon from '../../assets/icons/save-white.svg';
import cancelWhiteIcon from '../../assets/icons/cancel-white.svg';
import addWhiteIcon from '../../assets/icons/add-white.svg';
import * as S from './styles';
import EditCourseHeader from '../EditCourseHeader';
import CourseModuleContent from '../CourseModuleContent';
import Section from '../Section';

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Título obrigatório')
    .test('title-validation', 'Título inválido', val => {
      return !/[^A-Za-z0-9áãâéêíóõúç\s'?!.()]/.exec(val);
    }),
  description: yup.string().required('Descrição obrigatória'),
});

function EditCourse() {
  const {
    courseModules,
    courseClasses,
    editStatus,
    handleSetCourseModules,
    handleSetModulesNumber,
  } = useContext(TeacherContext);
  const [modalState, setModalState] = useState(false);
  const [nameValue, setNameValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');

  const handleSetModalStateOpen = useCallback(() => {
    setModalState(true);
  }, []);

  const handleSetModalStateClose = useCallback(() => {
    setModalState(false);
  }, []);

  const handleSetNameValue = useCallback(data => {
    setNameValue(data);
  }, []);

  const handleSetDescriptionValue = useCallback(data => {
    setDescriptionValue(data);
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const saveModule = ({ name, description }) => {
    if (editStatus === 0) {
      const modules = courseModules;

      const moduleData = {
        name,
        description,
        order: (courseModules.length + 1).toString(),
      };

      modules.push(moduleData);
      handleSetCourseModules(modules);
      handleSetModalStateClose();
      handleSetModulesNumber();
    } else if (editStatus === 1) {
      console.log('');
    }
  };

  return (
    <>
      <EditCourseHeader />
      <Section title="CONTEÚDO" contentDirection="column">
        {courseModules.map((module, index) => {
          return (
            <CourseModuleContent
              key={module.order}
              module={module}
              classes={courseClasses}
              position={index}
            />
          );
        })}
      </Section>
      <S.ModalContainer
        open={modalState}
        onClose={() => {
          handleSetModalStateClose();
        }}
        aria-labelledby="add-module-modal"
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
                id="input-course-name"
                variant="outlined"
                placeholder="Título do módulo"
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
            <ButtonIcon icon={saveWhiteIcon} onClick={handleSubmit(saveModule)}>
              Salvar módulo
            </ButtonIcon>
            <ButtonIcon
              icon={cancelWhiteIcon}
              color="secondary"
              onClick={() => {
                handleSetModalStateClose();
              }}
            >
              Cancelar
            </ButtonIcon>
          </Container>
        </S.ModalContent>
      </S.ModalContainer>
      <Container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        width="85%"
        margin="0 0 50px 0"
      >
        <ButtonIcon
          icon={addWhiteIcon}
          onClick={() => {
            handleSetNameValue('');
            handleSetDescriptionValue('');
            handleSetModalStateOpen();
          }}
        >
          Novo módulo
        </ButtonIcon>
      </Container>
    </>
  );
}

export default EditCourse;
