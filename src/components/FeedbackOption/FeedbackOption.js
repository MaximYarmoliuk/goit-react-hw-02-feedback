import React from "react";
import propTypes from "prop-types";
import styles from "./FeedbackOption.module.css";

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map((option, index) => (
        <button
          className={styles[option]}
          key={index}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired
};

export default FeedbackOptions;
