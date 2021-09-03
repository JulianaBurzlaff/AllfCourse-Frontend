import React, { useContext } from 'react';
import { TeacherContext } from '../../providers/TeacherProvider';
import Container from '../Container';
import ButtonIcon from '../ButtonIcon';
import EditCourseHeader from '../EditCourseHeader';
import EditCourseContent from '../EditCourseContent';
import ModulesModal from '../ModulesModal';
import addWhiteIcon from '../../assets/icons/add-white.svg';

function EditCourse() {
  const { courseModules, courseClasses, handleModulesModalOpen } =
    useContext(TeacherContext);

  return (
    <>
      <EditCourseHeader />
      <EditCourseContent
        courseModules={courseModules}
        courseClasses={courseClasses}
      />
      <Container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        width="85%"
        margin="-30px 0 50px 0"
      >
        <ButtonIcon
          icon={addWhiteIcon}
          onClick={() => {
            handleModulesModalOpen();
          }}
        >
          Novo módulo
        </ButtonIcon>
      </Container>
      <ModulesModal />
    </>
  );
}

export default EditCourse;
