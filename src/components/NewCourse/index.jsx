import React, { useState, useCallback, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
// import { useUser } from '../../providers/UserProvider';
// import CourseUnderReviewBanner from '../CourseUnderReviewBanner';
// import CourseBanner from '../CourseBanner';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { api } from '../../services/api';
import Container from '../Container';
import Section from '../Section';
import DropArea from '../DropArea';
import ButtonIcon from '../ButtonIcon';
import saveWhiteIcon from '../../assets/icons/save-white.svg';
import addBlackIcon from '../../assets/icons/add-black.svg';
import addWhiteIcon from '../../assets/icons/add-white.svg';
import imageBlackIcon from '../../assets/icons/image-black.svg';
import closeIcon from '../../assets/icons/close.svg';
import * as S from './styles';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.primary.contrastText,
    border: 'none',
    borderRadius: '5px',
  },
}));

const schema = yup.object().shape({
  courseTitle: yup
    .string()
    .required('Título obrigatório')
    .test('title-validation', 'Título inválido', val => {
      return !/[^A-Za-z0-9áãâéêíóõúç\s'?!.()]/.exec(val);
    }),
  courseDescription: yup.string().required('Descrição obrigatória'),
});

function NewCourse() {
  // const { user } = useUser();
  // const history = useHistory();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categoriesError, setCategoriesError] = useState(false);

  // const [activeCourses, setActiveCourses] = useState([]);
  // const [inactiveCourses, setInactiveCourses] = useState([]);
  // const [inReviewOrRejectedCourses, setInReviewOrRejectedCourses] = useState(
  //   [],
  // );

  const [modulesNumber, setModulesNumber] = useState(0);
  const [courseCategories, setCourseCategories] = useState([]);

  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const course = {};
  course.courseModules = [
    {
      name: 'Amassiando a carne',
      description: 'Primeiros passos para uma hipnose',
      order: '1',
    },
    {
      name: 'Alimentando as vaca',
      description: 'Segundos passos para uma hipnose',
      order: '2',
    },
    {
      name: 'Preparação 7',
      description: 'Terceiros passos para uma hipnose',
      order: '3',
    },
  ];
  course.courseClasses = [
    {
      name: 'Dormindo modulo 1 order1',
      description: 'Tô com sono',
      order: '1',
      position: 0,
      link: 'www.youtube.com',
      inactive: false,
    },
    {
      name: 'Dormindo  modulo 1 order2',
      description: 'Tô com sono',
      order: '2',
      position: 0,
      link: 'www.youtube.com',
      inactive: false,
    },
    {
      name: 'Acordando  modulo 2 order1',
      description: 'Ainda Tô com sono',
      order: '1',
      position: 1,
      link: 'www.youtube.com',
      inactive: false,
    },
    {
      name: 'Dormindo modulo 2 order2',
      description: 'Ainda Tô com sono',
      order: '2',
      position: 1,
      link: 'www.youtube.com',
      inactive: false,
    },
    {
      name: 'Dormindo modulo 3 order1',
      description: 'Morrendo de sono',
      order: '1',
      position: 2,
      link: 'www.youtube.com',
      inactive: false,
    },
    {
      name: 'Dormindo modulo 3 order2',
      description: 'Morrendo de sono',
      order: '2',
      position: 2,
      link: 'www.youtube.com',
      inactive: false,
    },
    {
      name: 'Dormindo modulo 3 order3',
      description: 'Morrendo de sono',
      order: '3',
      position: 2,
      link: 'www.youtube.com',
      inactive: false,
    },
  ];

  const saveCourse = async ({
    courseTitle,
    courseDescription,
    price = '00,00',
  }) => {
    course.courseName = courseTitle;
    course.description = courseDescription;
    course.price = price;
    course.courseCategories = courseCategories;

    try {
      const { data } = await api.post('/addcourse', course);
      console.log(data);
    } catch (error) {
      console.log(error.response.data);
      console.log('error:', error);
    }
  };

  const handleSetModulesNumber = useCallback(number => {
    setModulesNumber(number);
  }, []);

  // ==============================================
  //    course categories query
  // ==============================================

  const getCoursesCategories = useCallback(async () => {
    if (categories.length === 0) {
      try {
        setLoading(true);
        const response = await api.get('/category/0');

        if (response.status !== 200) {
          setLoading(false);
          setCategoriesError(true);
          return;
        }

        setLoading(false);
        setCategoriesError(false);

        const categoriesData = await response.data;
        setCategories(categoriesData);
      } catch (error) {
        console.log(error);
      }
    }
  }, [categories]);

  // ==============================================
  //    add and remove course categories
  // ==============================================

  const handleToogleCourseCategories = useCallback(
    categoryId => {
      const verification = courseCategories.filter(category => {
        return category.id === parseInt(categoryId, 10);
      });

      const categoriesToSet = courseCategories;

      if (verification.length === 0) {
        categories.forEach((item, index) => {
          if (item.id === parseInt(categoryId, 10)) {
            categoriesToSet.push(categories[index]);
          }
        });
      } else if (verification.length > 0) {
        courseCategories.forEach((item, index) => {
          if (item.id === parseInt(categoryId, 10)) {
            categoriesToSet.splice(index, 1);
          }
        });
      }

      setCourseCategories(categoriesToSet);
    },
    [categories, courseCategories],
  );

  const handleModalOpen = useCallback(() => {
    setModalOpen(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setModalOpen(false);
  }, []);

  useEffect(() => {
    handleSetModulesNumber(0);
  }, [handleSetModulesNumber]);

  return (
    <>
      {
        //= ===========================================
        //    header
        //= ===========================================
      }
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
              Novo curso
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
                  {...register('courseTitle')}
                  helperText={errors.courseTitle?.message}
                  error={errors.courseTitle}
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
                  {...register('courseDescription')}
                  helperText={errors.courseDescription?.message}
                  error={errors.courseDescription}
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
                  {courseCategories.map(category => {
                    return (
                      <S.Flag key={category.id}>
                        <S.FlagLabel>{category.name}</S.FlagLabel>
                      </S.Flag>
                    );
                  })}
                </Container>
                <ButtonIcon
                  color="neutral"
                  icon={addBlackIcon}
                  onClick={() => {
                    handleModalOpen();
                    getCoursesCategories();
                  }}
                >
                  Selecionar categorias
                </ButtonIcon>
                <Modal
                  className={classes.modal}
                  open={modalOpen}
                  onClose={() => {
                    handleModalClose();
                  }}
                  aria-labelledby="course-categories-modal"
                >
                  <div className={classes.paper}>
                    <Container
                      direction="column"
                      justifyContent="flex-start"
                      alignItems="flex-end"
                      width="430px"
                      margin="5px"
                    >
                      <S.CloseModalButton
                        onClick={() => {
                          handleModalClose();
                        }}
                      >
                        <img src={closeIcon} alt="close button" />
                      </S.CloseModalButton>
                    </Container>
                    <S.Title
                      color="main"
                      fontSize="14px"
                      weight="500"
                      width="400px"
                      margin="0 20px 20px 20px"
                    >
                      Selecione as categorias do curso
                    </S.Title>
                    <Container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      width="400px"
                      height="250px"
                      margin="20px"
                      wrap="wrap"
                    >
                      {categories.length === 0
                        ? ''
                        : categories.map(category => {
                            return (
                              <S.FlagToSelect
                                key={category.id}
                                id={category.id}
                                selected={
                                  courseCategories.indexOf(category) !== -1
                                }
                                onClick={event => {
                                  handleToogleCourseCategories(event.target.id);
                                }}
                              >
                                {category.name}
                              </S.FlagToSelect>
                            );
                          })}
                      <S.Text>
                        {!loading && !categoriesError && categories.length === 0
                          ? 'Não há nenhuma categoria de curso.'
                          : ''}
                      </S.Text>
                      <S.Return>{loading ? 'Aguarde...' : ''}</S.Return>
                      <S.ErrorReturn>
                        {categoriesError
                          ? 'Erro na requisição das categorias!'
                          : ''}
                      </S.ErrorReturn>
                    </Container>
                  </div>
                </Modal>
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
        </Container>
      </Container>

      {
        //= ===========================================
        //    content
        //= ===========================================
      }
      <Section title="CONTEÚDO" contentDirection="column" />
      <Container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        width="85%"
        margin="0 0 50px 0"
      >
        <ButtonIcon icon={addWhiteIcon} onClick={() => {}}>
          Novo módulo
        </ButtonIcon>
      </Container>
    </>
  );
}

export default NewCourse;
