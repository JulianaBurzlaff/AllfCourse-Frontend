import styled, { css } from 'styled-components';

export const Text = styled.p`
  ${({ theme, fontSize, weight, color }) => css`
    color: ${theme.palette.text[color]};
    font-size: ${fontSize};
    font-weight: ${weight};
    padding-left: 12px;
  `}
`;

export const UserBanner = styled.div`
  ${({ theme, fontSize, weight, color }) => css`
    color: ${theme.palette.text[color]};
    font-size: ${fontSize};
    font-weight: ${weight};
    padding-left: 12px;
  `}
  padding: 30px;
  position: absolute;
  top: 50%;
  margin-top: -250px;
  width: 600px;
  height: 500px;

  background: linear-gradient(127.41deg, #49a7a1 2.06%, #82bdb9 100%);
  border-radius: 39px;
`;

export const ProfileField = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #343a40a6;
`;

export const WelcomeTitle = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  text-align: center;

  color: #ffffff;
`;

export const CapCase = styled.span`
  text-transform: lowercase;
  text-transform: capitalize;
`;

export const CourseInfoContainer = styled.div`
  width: 100%;
  padding-top: 30px;
  height: calc(50% -1px);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const CourseInfoField = styled.div`
  color: #fff;
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const CourseInfoTitle = styled.span`
  font-size: 24px;
`;

export const CourseInfoData = styled.span`
  font-size: 72px;
`;

export const Return = styled.p`
  color: #49a7a1;
`;

export const ErrorReturn = styled.p`
  color: #c65b58;
`;
