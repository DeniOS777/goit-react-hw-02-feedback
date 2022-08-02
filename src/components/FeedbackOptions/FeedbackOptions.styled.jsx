import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px;
  min-width: 80px;
  color: var(--whiteColor);
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.02em;
  background-color: var(--neutralColor);
  border-style: none;
  border-radius: 5px;
  transition: background-color 0.3s linear, transform 0.1s linear;
  cursor: pointer;

  &:hover {
    background-color: var(--neutralColorHover);
  }

  &:active {
    transform: scale(0.95);
  }

  &:first-child {
    background-color: var(--greenColor);
    &:hover {
      background-color: var(--greenColorHover);
    }
  }

  &:last-child {
    background-color: var(--redColor);
    &:hover {
      background-color: var(--redColorHover);
    }
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;
