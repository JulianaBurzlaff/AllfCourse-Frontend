import React, { useContext } from 'react';
import { TeacherContext } from '../../providers/TeacherProvider';
import CourseHeaderData from '../CourseHeaderData';
import CourseModuleContentData from '../CourseModuleContentData';
import Section from '../Section';

function CourseData() {
  const { courseModules, courseClasses } = useContext(TeacherContext);

  return (
    <>
      <CourseHeaderData />
      <Section title="CONTEÚDO" contentDirection="column">
        {courseModules.map((module, index) => {
          return (
            <CourseModuleContentData
              key={module.order}
              module={module}
              classes={courseClasses}
              position={index}
            />
          );
        })}
      </Section>
    </>
  );
}

export default CourseData;
