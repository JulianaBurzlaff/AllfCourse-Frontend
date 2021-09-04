import React from 'react';
import Container from '../Container';
import CourseClassContentData from '../CourseClassContentData';

function CourseClassBanner({ classes }) {
  return (
    <Container
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      width="100%"
    >
      {classes.map(classData => {
        return (
          <CourseClassContentData
            key={`${classData.position}${classData.order}`}
            classData={classData}
          />
        );
      })}
    </Container>
  );
}

export default CourseClassBanner;
