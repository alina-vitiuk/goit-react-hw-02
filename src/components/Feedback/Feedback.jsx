import PropTypes from "prop-types";
import css from "./Feedback.module.css";

const Feedback = ({ feedbackObj, feedbackTotal, feedbackPositive }) => {
  const { good, neutral, bad } = feedbackObj;

  return (
    <>
      <div className={css.container}>
        <p className={css.feedback}>Good: {good}</p>
        <p className={css.feedback}>Neutral: {neutral}</p>
        <p className={css.feedback}>Bad: {bad}</p>
      </div>
      <div className={css.container}>
        <p className={css.feedback}>Total: {feedbackTotal}</p>
        <p className={css.feedback}>Positive: {feedbackPositive}%</p>
      </div>
    </>
  );
};

export default Feedback;

Feedback.protoType = {
  feedbackObj: PropTypes.objectOf(PropTypes.number),
  feedbackTotal: PropTypes.number,
  feedbackPositive: PropTypes.number,
};
