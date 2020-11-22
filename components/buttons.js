import styled from 'styled-components';
import VisuallyHidden from '@reach/visually-hidden';

const ButtonStyled = styled.button`
  background: none;
  border: none;
  outline: none;
  font-family: var(--font-primary);
  font-size: 1rem;
  cursor: pointer;
`;

const PrimaryButtonStyled = styled(ButtonStyled)`
  background: var(--color-white);
  border: 1px solid var(--color-white);
  border-radius: 3px;
  min-width: 75px;
  padding: 0.5rem 1rem;

  &:hover {
    background: var(--color-hover);
  }

  &:focus:not(.focus-visible) {
    outline: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 3px var(--color-focus);
  }

  /* Firefox support for :focus-visible */
  &:-moz-focusring {
    box-shadow: 0 0 0 3px var(--color-focus);
  }
`;

export const Button = ({ children, onClick, text }) => {
  return (
    <ButtonStyled onClick={onClick}>
      <VisuallyHidden>{text}</VisuallyHidden>
      {children}
    </ButtonStyled>
  );
};

export const PrimaryButton = ({ children, onClick }) => {
  return <PrimaryButtonStyled onClick={onClick}>{children}</PrimaryButtonStyled>;
};
