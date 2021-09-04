import React, { useContext, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TeacherContext } from '../../providers/TeacherProvider';
import ButtonIcon from '../ButtonIcon';
import saveWhiteIcon from '../../assets/icons/save-white.svg';
import cancelWhiteIcon from '../../assets/icons/cancel-white.svg';
import editBlackIcon from '../../assets/icons/edit-black.svg';
import trashWhiteIcon from '../../assets/icons/trash-white.svg';
import warningIcon from '../../assets/icons/warning.svg';
import confirmBlackIcon from '../../assets/icons/confirm-black.svg';
import Container from '../Container';
import CourseClassBanner from '../CourseClassBanner';
import * as S from './styles';

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Título obrigatório')
    .test('title-validation', 'Título inválido', val => {
      return !/[^A-Za-z0-9áãâéêíóõúç\s'?!.()/-]/.exec(val);
    }),
  description: yup.string().required('Descrição obrigatória'),
});

function CourseModuleContent({ module, classes, position }) {
  const history = useHistory();
  const {
    editStatus,
    courseModules,
    handleSetCourseModules,
    handleSetOrder,
    deleteModule,
  } = useContext(TeacherContext);

  const [modalState, setModalState] = useState(false);
  const [orderValue, setOrderValue] = useState(module.order);
  const [nameValue, setNameValue] = useState(module.name);
  const [descriptionValue, setDescriptionValue] = useState(module.description);

  const [modalWarning, setModalWarning] = useState(false);

  const handleSetModalWarningOpen = useCallback(() => {
    setModalWarning(true);
  }, []);

  const handleSetModalWarningClose = useCallback(() => {
    setModalWarning(false);
  }, []);

  const handleSetModalStateOpen = useCallback(() => {
    setModalState(true);
  }, []);

  const handleSetModalStateClose = useCallback(() => {
    setModalState(false);
  }, []);

  const handleSetOrderValue = useCallback(data => {
    setOrderValue(data);
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

  const saveModule = ({ order, name, description }) => {
    if (editStatus === 0) {
      const modules = courseModules;

      const index = modules.findIndex(item => {
        return item.order === order;
      });

      if (index !== -1) {
        modules[index].name = name;
        modules[index].description = description;

        handleSetCourseModules(modules);
        handleSetModalStateClose();
      }
    } else if (editStatus === 1) {
      console.log('');
    }
  };

  const classesToTheModule = useCallback(() => {
    const filterClasses = classes.filter(classData => {
      return classData.position === parseInt(position, 10);
    });

    return filterClasses;
  }, [classes, position]);

  return (
    <S.Container>
      <S.ModuleAccordion>
        <S.ModuleAccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            width="100%"
            background="none"
            wrap="wrap"
          >
            <S.ModuleInfo>MÓDULO {module.order}</S.ModuleInfo>
            <S.Text>{module.name}</S.Text>
          </Container>
        </S.ModuleAccordionSummary>
        <S.ModuleAccordionDetails>
          <S.Description>{module.description}</S.Description>
          <Container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            background="none"
            wrap="wrap"
            margin="20px 0 20px 0"
          >
            {editStatus === 0 || editStatus === 1 ? (
              <>
                <ButtonIcon
                  color="neutral"
                  icon={editBlackIcon}
                  fontSize="12px"
                  onClick={() => {
                    handleSetModalStateOpen();
                  }}
                >
                  Editar
                </ButtonIcon>
                <ButtonIcon
                  color="secondary"
                  icon={trashWhiteIcon}
                  fontSize="12px"
                  onClick={() => {
                    handleSetOrder(module.order);
                    handleSetModalWarningOpen();
                  }}
                >
                  Excluir
                </ButtonIcon>
                <S.ModalContainer
                  open={modalWarning}
                  onClose={() => {
                    handleSetModalWarningClose();
                  }}
                  aria-labelledby="add-module-modal"
                >
                  <S.WarningModalContent>
                    <Container
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      width="400px"
                    >
                      <S.Icon src={warningIcon} />
                      <S.Text margin="20px 0 0 0">
                        Tem certeza que deseja excluir esse módulo?
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
                          deleteModule();
                          handleSetModalWarningClose();
                          history.push('/dashboard/teacher/edit-course');
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
                  </S.WarningModalContent>
                </S.ModalContainer>
                <S.ModalContainer
                  open={modalState}
                  onClose={() => {
                    handleSetModalStateClose();
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
                          type="hidden"
                          id="input-module-order"
                          {...register('order')}
                          value={orderValue}
                          onChange={event => {
                            handleSetOrderValue(event.target.value);
                          }}
                        />
                        <S.Input
                          type="text"
                          id="input-module-name"
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
                          id="input-module-description"
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
                      <ButtonIcon
                        icon={saveWhiteIcon}
                        onClick={handleSubmit(saveModule)}
                      >
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
              </>
            ) : (
              <></>
            )}
          </Container>

          <CourseClassBanner
            classes={classesToTheModule()}
            position={position}
          />
        </S.ModuleAccordionDetails>
      </S.ModuleAccordion>
    </S.Container>
  );
}

export default CourseModuleContent;
