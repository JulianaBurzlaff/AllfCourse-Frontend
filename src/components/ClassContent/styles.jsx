import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Class = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ClassInfo = styled.div`
  display: flex;
  width: 674px;
  border: 1px solid #49a7a1;
  font-family: 'Poppins';
  color: #176d76;
  border-radius: 0 0 5px 5px;

  text-align: center;
  padding: 10px;
`;

export const ClassOrder = styled.div`
  display: flex;
`;

export const ClassName = styled.div`
  font-size: 16px;
  margin-left: 30px;
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
    transform: scale(1.02, 1.02);
  }
`;

export const Material = styled.div`
  max-width: 500px;
  border: 1px solid #49a7a1;
  font-family: 'Poppins';
  color: #176d76;
  border-radius: 5px;
  min-height: 365px;
  text-align: center;
  padding: 10px;
`;

export const Previous = styled.button`
  text-decoration: none;
  padding: 0 10px;
  width: 135px;
  height: 35px;
  background-color: #fff;
  border: 1px solid #727272;
  border-radius: 2px;
  font-family: 'Poppins';
  cursor: pointer;
  margin-right: 20px;

  &:hover {
    transform: scale(1.02, 1.02);
  }

  &:disabled {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    cursor: default;
  }
`;

export const Next = styled.button`
  text-decoration: none;
  padding: 0 10px;
  width: 135px;
  height: 35px;
  background-color: #176d76;
  border-radius: 2px;
  font-family: 'Poppins';
  cursor: pointer;
  color: #f6f6f6;
  border: none;

  &:hover {
    transform: scale(1.02, 1.02);
  }

  &:disabled {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    cursor: default;
  }
`;

export const Video = styled.div`
  width: 674px;
  background-color: gray;
  font-family: 'Poppins';
  height: 379px;
  text-align: center;
  padding: 10px;
`;
