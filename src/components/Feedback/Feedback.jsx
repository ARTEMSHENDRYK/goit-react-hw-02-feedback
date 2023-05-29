import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

class Feedback extends React.Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0
    }
  }

  handleIncrement = evt => {
    const { name, value } = evt.target;
    console.log(evt.target);
    console.log(name);
    this.setState({ [name]: this.state[name] +=1 });
  }

  render() {
    return (
      <div>
        <h1>Expresso Cafe</h1>
        <h2>Please leave feedback</h2>
        <button type="button" name="good" onClick={this.handleIncrement}>Good</button>
        <span> </span>
        <button type="button" name="neutral" onClick={this.handleIncrement}>Neutral</button>
        <span> </span>
        <button type="button" name="bad" onClick={this.handleIncrement}>Bad</button>
        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
      </div>  
    )
  }

}

export default Feedback;