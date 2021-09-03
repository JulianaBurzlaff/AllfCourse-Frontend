import React from 'react';
import Section from '../Section';
import CourseModuleContent from '../CourseModuleContent';

function EditCourseContent({ courseModules, courseClasses }) {
  return (
    <Section title="CONTEÚDO" contentDirection="column">
      {courseModules.map((module, index) => {
        return (
          <CourseModuleContent
            key={module.id}
            header={module}
            classes={courseClasses}
            position={index}
          />
        );
      })}
    </Section>
  );
}

export default EditCourseContent;
