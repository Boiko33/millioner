import React from 'react';
import PropTypes from 'prop-types';

import styles from '../sass/Game.module.scss';

function PossibleAnswer({
  id,
  title,
  variantsSwitcher,
  selectAnswer,
  selectedAnswers,
  isShowResult,
  correctAnswers,
}) {
  const answerStyleHandler = () => {
    let answerStyle;
    if (isShowResult) {
      if (correctAnswers.find((item) => item === id)) {
        answerStyle = styles.correct;
      } else if ((selectedAnswers !== correctAnswers)
        && (selectedAnswers.find((item) => item === id))) {
        answerStyle = styles.wrong;
      }
    } else if (selectedAnswers.find((item) => item === id)) {
      answerStyle = styles.selected;
    }
    return answerStyle;
  };

  return (
    <div>
      <button
        disabled={isShowResult}
        type="button"
        className={`
          ${styles.answerBtn} 
          ${answerStyleHandler()}
        `}
        onClick={() => selectAnswer(id, correctAnswers)}
      >
        <p className={styles.variant}>
          {variantsSwitcher(id)}
        </p>
        <p className={styles.answerTitle}>
          {title}
        </p>
      </button>
    </div>
  );
}

PossibleAnswer.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  variantsSwitcher: PropTypes.func.isRequired,
  selectAnswer: PropTypes.func.isRequired,
  selectedAnswers: PropTypes.arrayOf(PropTypes.number).isRequired,
  correctAnswers: PropTypes.arrayOf(PropTypes.number).isRequired,
  isShowResult: PropTypes.bool.isRequired,
};

export default PossibleAnswer;
