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
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.02em;
  background-color: #969696;
  border-style: none;
  border-radius: 5px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
  transition: background-color 0.2s linear, transform 0.1s linear;
  cursor: pointer;

  &:hover {
    background-color: #868585;
  }

  &:active {
    transform: scale(0.97);
  }

  &:first-child {
    background-color: #089408;
    &:hover {
      background-color: #078207;
    }
  }

  &:last-child {
    background-color: #d42e2e;
    &:hover {
      background-color: #c12a2a;
    }
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;
