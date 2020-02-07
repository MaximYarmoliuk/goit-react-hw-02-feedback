import React, { Component } from "react";
import Statictics from "./Statistics/Statistic";
import FeedbackOptions from "./FeedbackOption/FeedbackOption";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleIncrement = type => {
    this.setState(prevState => {
      return { [type]: prevState[type] + 1 };
    });
  };

  countPositiveFeedbackPercentage = total => {
    return Math.round((this.state.good / total) * 100);
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(function(a, b) {
      return a + b;
    });
  };

  render() {
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage(total);

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statictics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positiveFeedback}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}
