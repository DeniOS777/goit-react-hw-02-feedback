import styled from 'styled-components';

export const SectionWrap = styled.section`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 32px;
  color: var(--titleColor);
`;
