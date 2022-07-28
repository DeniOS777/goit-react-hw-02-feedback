import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = key => {
    this.setState({ [key]: this.state[key] + 1 });
  };

  render() {
    const { good, neutral, bad } = this.state;

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
      </div>
    );
  }
}

export default App;
