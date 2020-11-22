import styled from 'styled-components';

const MainContainerStyled = styled.main`
  width: 900px;
  max-width: 90vw;
  height: 75vh;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
`;

const MainContainer = ({ children }) => {
  return <MainContainerStyled>{children}</MainContainerStyled>;
};

export default MainContainer;
