import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 20px;
`;

export const Module = styled.div`
  font-size: 12px;
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

export const ModuleInfo = styled.div`
  font-size: 14px;
  margin-right: 30px;
`;

export const BackButton = styled.button`
  text-decoration: none;
  padding: 0 10px;
  width: 200px;
  height: 30px;
  background-color: #fff;
  border: 1px solid #727272;
  border-radius: 2px;
  font-family: 'Poppins';
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
