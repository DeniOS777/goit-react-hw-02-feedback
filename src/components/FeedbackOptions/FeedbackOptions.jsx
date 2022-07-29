import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Wrapper>
      {options.map(key => (
        <Button onClick={() => onLeaveFeedback(key)} key={key} type="button">
          {key}
        </Button>
      ))}
    </Wrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
