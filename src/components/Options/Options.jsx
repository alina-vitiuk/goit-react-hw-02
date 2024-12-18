import PropTypes from "prop-types";
import css from "./Options.module.css";

const Options = ({ onClickFeedback, resetFeedback, resetButton }) => {
  return (
    <ul className={css.buttonsList}>
      <li>
        <button className={css.button} onClick={() => onClickFeedback("good")}>
          Good
        </button>
      </li>
      <li>
        <button
          className={css.button}
          onClick={() => onClickFeedback("neutral")}
        >
          Neutral
        </button>
      </li>
      <li>
        <button className={css.button} onClick={() => onClickFeedback("bad")}>
          Bad
        </button>
      </li>
      {resetFeedback >= 1 && (
        <li>
          <button className={css.button} onClick={resetButton}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;

Options.protoType = {
  onClickFeedback: PropTypes.func,
  resetFeedback: PropTypes.bool,
  resetButton: PropTypes.func,
};
