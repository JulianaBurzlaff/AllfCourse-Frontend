import React, { useCallback, useState, useEffect } from 'react';
import Upload from '../Upload';
import { useUser } from '../../providers/UserProvider';
import { api } from '../../services/api';
import Loader from '../Loader';
import * as S from './styles';

function AdmDashboard() {
  const { user } = useUser();
  const [loading, setLoading] = useState(true);
  const [dataError, setDataError] = useState(false);
  const [courseData, setCourseData] = useState({});

  const getData = useCallback(async () => {
    try {
      setLoading(true);

      const { data } = await api.get(`/course-list`);

      setLoading(false);
      setDataError(false);
      setCourseData(data[0]);
    } catch (error) {
      setLoading(false);
      setDataError(true);
    }
  }, []);

  useEffect(() => {
    (async () => {
      getData();
    })();
  }, [getData]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <S.UserBanner>
        <S.ProfileField>
          <S.WelcomeTitle>
            Bem vindo,
            <br />
            <S.CapCase>
              {user[0].socialName
                ? user[0].socialName.toLowerCase()
                : user[0].name.toLowerCase()}
            </S.CapCase>
            .
          </S.WelcomeTitle>
          <Upload />
        </S.ProfileField>
        <S.CourseInfoContainer>
          <S.CourseInfoField>
            <S.CourseInfoTitle>Seus Cursos</S.CourseInfoTitle>
            <S.CourseInfoData>{courseData.teacherIn}</S.CourseInfoData>
          </S.CourseInfoField>
          <S.CourseInfoField>
            <S.CourseInfoTitle>Suas Matrículas</S.CourseInfoTitle>
            <S.CourseInfoData>{courseData.studentIn}</S.CourseInfoData>
          </S.CourseInfoField>
        </S.CourseInfoContainer>
      </S.UserBanner>
      <S.ErrorReturn>
        {dataError ? 'Erro na requisição dos cursos!' : ''}
      </S.ErrorReturn>
    </>
  );
}

export default AdmDashboard;
