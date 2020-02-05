import React from "react";
import propTypes from "prop-types";
import styles from "./Statistic.module.css"

function Statistics ({good, neutral, bad, total, positivePercentage}) {
    return(<div>
        <p className={styles.goodMark}>Good: {good}</p>
        <p className={styles.neutralMark}>Neutral: {neutral}</p>
        <p className={styles.badMark}>Bad: {bad}</p>
        <p className={styles.totalMark}>Total: {total}</p>
        {total > 0 && <p className={positivePercentage > 70 ? styles.percentageGood : positivePercentage> 40 ?styles.percentageNeutral : styles.percentageBad}>Positive feedback: {positivePercentage}%</p>}
      </div>)
}

Statistics.propTypes= {
    good: propTypes.number.isRequired,
    neutral: propTypes.number.isRequired,
    bad: propTypes.number.isRequired,
    total: propTypes.number.isRequired,
    positivePercentage: propTypes.number.isRequired
}

export default Statistics;