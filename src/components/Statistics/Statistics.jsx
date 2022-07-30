import React from 'react';
import PropTypes from 'prop-types';

import { Container, Feedback, Label } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Container>
      <Feedback>
        <Label>
          Good: {good} {good ? '🤩' : ''}
        </Label>
        <Label>
          Neutral: {neutral} {neutral ? '😐' : ''}
        </Label>
        <Label>
          Bad: {bad} {bad ? '😡' : ''}
        </Label>
      </Feedback>
      <Label>Total feedbacks: {total}</Label>
      <Label>Positive feedbacks: {positivePercentage}%</Label>
    </Container>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
