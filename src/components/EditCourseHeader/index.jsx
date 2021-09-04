import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TextField from '@material-ui/core/TextField';
import { TeacherContext } from '../../providers/TeacherProvider';
import { WarningContext } from '../../providers/WarningProvider';
import Container from '../Container';
import DropArea from '../DropArea';
import ButtonIcon from '../ButtonIcon';
import WarningModal from '../WarningModal';
// import CategoriesModal from '../CategoriesModal';
import saveWhiteIcon from '../../assets/icons/save-white.svg';
import cancelWhiteIcon from '../../assets/icons/cancel-white.svg';
// import addBlackIcon from '../../assets/icons/add-black.svg';
import imageBlackIcon from '../../assets/icons/image-black.svg';
import * as S from './styles';

const schema = yup.object().shape({
  courseName: yup
    .string()
    .required('Título obrigatório')
    .test('title-validation', 'Título inválido', val => {
      return !/[^A-Za-z0-9áãâéêíóõúç\s'?!.()]/.exec(val);
    }),
  description: yup.string().required('Descrição obrigatória'),
});

function EditCourseHeader() {
  const history = useHistory();
  const {
    modulesNumber,
    // handleSetModulesNumber,
    getCoursesCategories,
    courseCategories,
    saveCourse,
    // handleCategoriesModalOpen,
    // editStatus,
    cancelEditCourse,
  } = useContext(TeacherContext);

  const { handleSetModalWarningOpen, handleSetModalWarningClose } =
    useContext(WarningContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    getCoursesCategories();
  }, [getCoursesCategories]);

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
                <S.FlagsSelect
                  multiple
                  id="tags-outlined"
                  options={courseCategories}
                  getOptionLabel={option => option.name}
                  // defaultValue={[top100Films[13]]}
                  filterSelectedOptions
                  renderInput={params => (
                    <S.FlagsInput {...params} variant="outlined" />
                  )}
                />
                {/* {courseCategories.map(category => {
                  return (
                    <S.Flag key={category.id}>
                      <S.FlagLabel>{category.name}</S.FlagLabel>
                    </S.Flag>
                  );
                })} */}
              </Container>
              {/* {editStatus === 0 || editStatus === 1 ? (
                <ButtonIcon
                  color="neutral"
                  icon={addBlackIcon}
                  onClick={() => {
                    handleCategoriesModalOpen();
                    getCoursesCategories();
                  }}
                >
                  Selecionar categorias
                </ButtonIcon>
              ) : (
                <></>
              )} */}
              {/* <CategoriesModal /> */}
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
        <ButtonIcon icon={saveWhiteIcon} onClick={handleSubmit(saveCourse)}>
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
        <WarningModal
          confirmOnclick={() => {
            cancelEditCourse();
            handleSetModalWarningClose();
            history.push('/dashboard/teacher');
          }}
          message="Tem certeza que deseja cancelar o cadastro do curso?"
        />
      </Container>
    </Container>
  );
}

export default EditCourseHeader;
