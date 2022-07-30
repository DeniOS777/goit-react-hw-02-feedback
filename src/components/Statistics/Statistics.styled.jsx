import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 5px;
`;

export const Feedback = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.p`
  font-size: 18px;
  font-weight: 600;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
