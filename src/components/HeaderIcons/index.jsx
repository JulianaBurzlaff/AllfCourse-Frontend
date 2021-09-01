import React from 'react';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../providers/UserProvider';
import Container from '../Container';
import studentActiveIcon from '../../assets/icons/student-active.svg';
import teacherActiveIcon from '../../assets/icons/teacher-active.svg';
import admActiveIcon from '../../assets/icons/adm-active.svg';
import studentInactiveIcon from '../../assets/icons/student-inactive.svg';
import teacherInactiveIcon from '../../assets/icons/teacher-inactive.svg';
import admInactiveIcon from '../../assets/icons/adm-inactive.svg';
import * as S from './styles';

function HeaderIcons() {
  const history = useHistory();
  const { user, typeActive, handleTypeActive } = useUser();

  return (
    <Container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      width="100%"
      margin="30px 0 0 0"
      overflowX="hidden"
      overflowY="hidden"
    >
      {user[0].type === 4 ||
      user[0].type === 5 ||
      user[0].type === 6 ||
      user[0].type === 7 ? (
        <S.Container active={typeActive === 'adm'}>
          <S.Link
            onClick={() => {
              handleTypeActive('adm');
              history.push('/dashboard/adm');
            }}
          >
            <S.Icon
              src={typeActive === 'adm' ? admActiveIcon : admInactiveIcon}
              alt="adm icon"
            />
          </S.Link>
        </S.Container>
      ) : (
        <></>
      )}
      {user[0].type === 2 ||
      user[0].type === 3 ||
      user[0].type === 6 ||
      user[0].type === 7 ? (
        <S.Container active={typeActive === 'teacher'}>
          <S.Link
            onClick={() => {
              handleTypeActive('teacher');
              history.push('/dashboard/teacher');
            }}
          >
            <S.Icon
              src={
                typeActive === 'teacher'
                  ? teacherActiveIcon
                  : teacherInactiveIcon
              }
              alt="student icon"
            />
          </S.Link>
        </S.Container>
      ) : (
        <></>
      )}
      {user[0].type === 1 ||
      user[0].type === 3 ||
      user[0].type === 5 ||
      user[0].type === 7 ? (
        <S.Container active={typeActive === 'student'}>
          <S.Link
            onClick={() => {
              handleTypeActive('student');
              history.push('/dashboard/student');
            }}
          >
            <S.Icon
              src={
                typeActive === 'student'
                  ? studentActiveIcon
                  : studentInactiveIcon
              }
              alt="student icon"
            />
          </S.Link>
        </S.Container>
      ) : (
        <></>
      )}
    </Container>
  );
}

export default HeaderIcons;
