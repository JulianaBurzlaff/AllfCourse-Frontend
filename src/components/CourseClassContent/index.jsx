import React, { useContext, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TeacherContext } from '../../providers/TeacherProvider';
import editBlackIcon from '../../assets/icons/edit-black.svg';
import trashWhiteIcon from '../../assets/icons/trash-white.svg';
import saveWhiteIcon from '../../assets/icons/save-white.svg';
import warningIcon from '../../assets/icons/warning.svg';
import cancelWhiteIcon from '../../assets/icons/cancel-white.svg';
import confirmBlackIcon from '../../assets/icons/confirm-black.svg';
import Container from '../Container';
import ButtonIcon from '../ButtonIcon';
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

function CourseClassContent({ classData }) {
  const history = useHistory();
  const {
    editStatus,
    courseClasses,
    handleSetCourseClasses,
    handleSetOrder,
    handleSetPosition,
    deleteClass,
  } = useContext(TeacherContext);

  const [modalWarning, setModalWarning] = useState(false);

  const handleSetModalWarningOpen = useCallback(() => {
    setModalWarning(true);
  }, []);

  const handleSetModalWarningClose = useCallback(() => {
    setModalWarning(false);
  }, []);

  const [modalState, setModalState] = useState(false);

  const handleSetModalStateOpen = useCallback(() => {
    setModalState(true);
  }, []);

  const handleSetModalStateClose = useCallback(() => {
    setModalState(false);
  }, []);

  const [orderValue, setOrderValue] = useState(classData.order);
  const [positionValue, setPositionValue] = useState(classData.position);
  const [nameValue, setNameValue] = useState(classData.name);
  const [descriptionValue, setDescriptionValue] = useState(
    classData.description,
  );
  const [linkValue, setLinkValue] = useState(classData.link);

  const handleSetOrderValue = useCallback(data => {
    setOrderValue(data);
  }, []);

  const handleSetpositionValue = useCallback(data => {
    setPositionValue(data);
  }, []);

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

  const saveClass = ({ order, position, name, description, link }) => {
    if (editStatus === 0) {
      const allClasses = courseClasses;

      const index = allClasses.findIndex(item => {
        return (
          item.order === order, 10 && item.position === parseInt(position, 10)
        );
      });

      if (index !== -1) {
        allClasses[index].name = name;
        allClasses[index].description = description;
        allClasses[index].link = link;

        handleSetCourseClasses(allClasses);
        handleSetModalStateClose();
      }
    } else if (editStatus === 1) {
      console.log('');
    }
  };

  return (
    <>
      <S.Class editStatus={editStatus}>
        <S.ClassInfo>AULA {classData.order}</S.ClassInfo>
        <Container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          width="100%"
        >
          <S.Title fontSize="14px" weight="500">
            {classData.name}
          </S.Title>
          <S.Text fontSize="14px" color="primary" margin="10px 0 0 20px">
            {classData.description}
          </S.Text>
          <S.Text
            fontSize="14px"
            color="primary"
            weight="600"
            margin="10px 0 0 20px"
          >
            URL:
            <S.Span
              fontSize="14px"
              color="primary"
              weight="400"
              margin="0 0 0 10px"
            >
              {classData.link}
            </S.Span>
          </S.Text>
          <Container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            background="none"
            margin="10px 0 0 0"
            wrap="wrap"
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
                    handleSetOrder(classData.order);
                    handleSetPosition(classData.position);
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
                        Tem certeza que deseja excluir essa aula?
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
                          deleteClass();
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
              </>
            ) : (
              <></>
            )}
          </Container>
        </Container>
      </S.Class>
      <S.ModalContainer
        open={modalState}
        onClose={() => {
          handleSetModalStateClose();
        }}
        aria-labelledby="edit-class-modal"
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
              Edição de aula
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
                id="input-class-order"
                {...register('order')}
                value={orderValue}
                onChange={event => {
                  handleSetOrderValue(event.target.value);
                }}
              />
              <S.Input
                type="hidden"
                id="input-class-position"
                {...register('position')}
                value={positionValue}
                onChange={event => {
                  handleSetpositionValue(event.target.value);
                }}
              />
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
              icon={saveWhiteIcon}
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
  );
}

export default CourseClassContent;
