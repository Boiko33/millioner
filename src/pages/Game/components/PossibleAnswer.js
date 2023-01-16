import React from 'react';
import PropTypes from 'prop-types';

import styles from '../sass/Game.module.scss';

function PossibleAnswer({
  id,
  title,
  variantsSwitcher,
  selectAnswer,
  selectedAnswer,
  isShowResult,
  correctAnswerId,
}) {
  const answerStyleHandler = () => {
    let answerStyle;
    if (isShowResult) {
      if (id === correctAnswerId) {
        answerStyle = styles.correct;
      } else if ((selectedAnswer !== correctAnswerId) && (selectedAnswer === id)) {
        answerStyle = styles.wrong;
      }
    } else if (id === selectedAnswer) {
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
        onClick={() => selectAnswer(id, correctAnswerId)}
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
  selectedAnswer: PropTypes.number,
  correctAnswerId: PropTypes.number.isRequired,
  isShowResult: PropTypes.bool.isRequired,
};

PossibleAnswer.defaultProps = {
  selectedAnswer: null,
};

export default PossibleAnswer;
