import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickButton = key => this.setState({ [key]: this.state[key] + 1 });

  countTotalFeedback = () =>
    Object.values(this.state).reduce((total, item) => total + item, 0);

  countPositiveFeedbackPercentage = totalFeedbacks => {
    const { good } = this.state;
    return totalFeedbacks ? ((good / totalFeedbacks) * 100).toFixed() : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const totalFeedbacks = this.countTotalFeedback();
    const positiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage(totalFeedbacks);

    return (
      <div>
        <Section title="Please leave your feedback please" />
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.handleClickButton}
        />
        <Section />

        <Section title="Statistics" />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedbacks}
          positivePercentage={positiveFeedbackPercentage}
        />
        <Section />
      </div>
    );
  }
}

export default App;
