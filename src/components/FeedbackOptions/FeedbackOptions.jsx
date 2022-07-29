import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(key => (
        <button onClick={() => onLeaveFeedback(key)} key={key} type="button">
          {key}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
