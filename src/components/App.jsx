import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = key => this.setState({ [key]: this.state[key] + 1 });

  countTotalFeedback = () =>
    Object.values(this.state).reduce((total, item) => total + item, 0);

  countPositiveFeedbackPercentage = totalFeedbacksCount => {
    const { good } = this.state;
    return totalFeedbacksCount
      ? ((good / totalFeedbacksCount) * 100).toFixed()
      : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedbacksCount = this.countTotalFeedback();
    const positiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage(totalFeedbacksCount);

    return (
      <div>
        <h1>Please leave your feedback please</h1>
        {Object.keys(this.state).map(key => (
          <button onClick={() => this.handleClick(key)} key={key} type="button">
            {key}
          </button>
        ))}
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total feedbacks: {totalFeedbacksCount}</p>
        <p>Positive feedbacks: {positiveFeedbackPercentage}%</p>
      </div>
    );
  }
}

export default App;
