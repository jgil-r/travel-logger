import styled from 'styled-components';

const AppContainerStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppContainer = ({ children }) => {
  return <AppContainerStyled>{children}</AppContainerStyled>;
};

export default AppContainer;
