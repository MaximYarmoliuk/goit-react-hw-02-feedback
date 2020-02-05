import React, { Component } from "react";
import Statictics from "./statistics/Statistic";
import FeedbackOptions from "./feedback-option/Feedback-option";
import Section from "./section/Section";
import Notification from "./notification/Notification";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  total = 0;
  positiveFeedback = 0;
  title = ['Please leave feedback', 'Statistics']

  handleIncrement = type => {
    this.setState(prevState => {
      return { [type]: prevState[type] + 1 };
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.positiveFeedback = Math.round((this.state.good / this.total) * 100);
  };

  countTotalFeedback = () => {
    this.total = Object.values(this.state).reduce(function(a, b) {
      return a + b;
    });
  };

  render() {
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncrement}
          />
          </Section>
          <Section title ="Statistics">
          {this.total > 0 ? (
            <Statictics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.total}
              positivePercentage={this.positiveFeedback}
            />
          ) : (
            <Notification message={"No feedback given"} />
          )}
        </Section>
      </div>
    );
  }
}

