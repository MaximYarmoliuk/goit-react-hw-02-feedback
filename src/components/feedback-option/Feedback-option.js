import React from "react";
import propTypes from "prop-types";
import styles from './Feedback-option.module.css'

function FeedbackOptions({ options,  onLeaveFeedback }) {
  return (
    <div>
      <button className={styles.goodMark} type="button" onClick={() => onLeaveFeedback(options[0])} >
        Good
      </button>
      <button className={styles.neutralMark} type="button" onClick={() => onLeaveFeedback(options[1])} >
        Neutral
      </button>
      <button className={styles.badMark} type="button" onClick={() => onLeaveFeedback(options[2])} >
        Bad
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
    options: propTypes.arrayOf(propTypes.string).isRequired,
    onLeaveFeedback: propTypes.func.isRequired
}

export default FeedbackOptions;
