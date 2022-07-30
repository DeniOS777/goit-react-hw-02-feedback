import styled from 'styled-components';

export const Wrapper = styled.div`
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
  font-weight: 600;
  letter-spacing: 0.02em;
  background-color: var(--neutralColor);
  border-style: none;
  border-radius: 5px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
  transition: background-color 0.25s linear, transform 0.1s linear;
  cursor: pointer;

  &:hover {
    background-color: var(--neutralColorHover);
  }

  &:active {
    transform: scale(0.97);
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
