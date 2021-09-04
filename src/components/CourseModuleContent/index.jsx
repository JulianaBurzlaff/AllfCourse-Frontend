import React, { useContext } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { TeacherContext } from '../../providers/TeacherProvider';
import editBlackIcon from '../../assets/icons/edit-black.svg';
import trashWhiteIcon from '../../assets/icons/trash-white.svg';
import Container from '../Container';
import ButtonIcon from '../ButtonIcon';
import * as S from './styles';

function CourseModuleContent({ header, classes, position }) {
  const { editStatus } = useContext(TeacherContext);

  return (
    <S.Container>
      <S.ModuleAccordion>
        <S.ModuleAccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            background="none"
            wrap="wrap"
          >
            <S.ModuleInfo>MÓDULO {header.order}</S.ModuleInfo>
            <S.Text>{header.name}</S.Text>
          </Container>
        </S.ModuleAccordionSummary>
        <S.ModuleAccordionDetails>
          <S.Description>{header.description}</S.Description>
          <Container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            background="none"
            wrap="wrap"
            margin="20px 0 20px 0"
          >
            {editStatus === 0 || editStatus === 1 ? (
              <>
                <ButtonIcon
                  color="neutral"
                  icon={editBlackIcon}
                  fontSize="12px"
                  onClick={() => {
                    console.log(header.id);
                  }}
                >
                  Editar
                </ButtonIcon>
                <ButtonIcon
                  color="secondary"
                  icon={trashWhiteIcon}
                  fontSize="12px"
                  onClick={() => {
                    console.log(header.id);
                  }}
                >
                  Excluir
                </ButtonIcon>
              </>
            ) : (
              <></>
            )}
          </Container>
          {classes.map((classe, i) =>
            classe.position === position ? (
              <S.Class editStatus={editStatus}>
                <S.ClassInfo>AULA {classe.order}</S.ClassInfo>
                <Container
                  key={i}
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <S.Title fontSize="14px" weight="500">
                    {classe.name}
                  </S.Title>
                  <S.Text
                    fontSize="14px"
                    color="primary"
                    margin="10px 0 0 20px"
                  >
                    {classe.description}
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
                      {classe.link}
                    </S.Span>
                  </S.Text>
                  <Container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    background="none"
                    wrap="wrap"
                    margin="10px 0 0 0"
                  >
                    {editStatus === 0 || editStatus === 1 ? (
                      <>
                        <ButtonIcon
                          color="neutral"
                          icon={editBlackIcon}
                          fontSize="12px"
                          onClick={() => {
                            console.log(classe.id);
                          }}
                        >
                          Editar
                        </ButtonIcon>
                        <ButtonIcon
                          color="secondary"
                          icon={trashWhiteIcon}
                          fontSize="12px"
                          onClick={() => {
                            console.log(classe.id);
                          }}
                        >
                          Excluir
                        </ButtonIcon>
                      </>
                    ) : (
                      <></>
                    )}
                  </Container>
                </Container>
              </S.Class>
            ) : (
              <></>
            ),
          )}
        </S.ModuleAccordionDetails>
      </S.ModuleAccordion>
    </S.Container>
  );
}

export default CourseModuleContent;
