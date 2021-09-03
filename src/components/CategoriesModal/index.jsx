import React, { useContext } from 'react';
import { TeacherContext } from '../../providers/TeacherProvider';
import Container from '../Container';
import closeIcon from '../../assets/icons/close.svg';
import * as S from './styles';

function CategoriesModal() {
  const {
    loading,
    categoriesError,
    categories,
    courseCategories,
    categoriesModalOpen,
    handleCategoriesModalClose,
    handleToogleCourseCategories,
  } = useContext(TeacherContext);

  return (
    <S.ModalContainer
      // className={classes.modal}
      open={categoriesModalOpen}
      onClose={() => {
        handleCategoriesModalClose();
      }}
      aria-labelledby="course-categories-modal"
    >
      <S.ModalContent>
        <Container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-end"
          width="430px"
          margin="5px"
        >
          <S.CloseModalButton
            onClick={() => {
              handleCategoriesModalClose();
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
                    selected={courseCategories.indexOf(category) !== -1}
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
            {categoriesError ? 'Erro na requisição das categorias!' : ''}
          </S.ErrorReturn>
        </Container>
      </S.ModalContent>
    </S.ModalContainer>
  );
}

export default CategoriesModal;
