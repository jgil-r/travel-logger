import styled from 'styled-components';

const PopupLocationStyled = styled.p`
  color: var(--color-popup-text);
  padding: 0.5rem 0 0 0;
  margin: 0;
`;

const PopupLocation = ({ children }) => {
  return <PopupLocationStyled>{children}</PopupLocationStyled>;
};

export default PopupLocation;
