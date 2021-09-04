import styled from 'styled-components';

export const Conteiner = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  div {
    width: 100px;
    height: 100px;
  }
`;

export const LabelChoosenPhoto = styled.label`
  color: #343a40;
  font-size: 14px;
  cursor: pointer;
  font-weight: 400;
`;

export const ChoosenPhoto = styled.input`
  display: none;
`;

export const SendPhoto = styled.button`
  width: 150px;
  padding: 7px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  color: #fff;
  background: #343a40;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

export const Return = styled.span`
  color: #fff;
  font-size: 13px;
  font-weight: 300;
`;
