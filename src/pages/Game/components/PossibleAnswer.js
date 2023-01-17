import React from 'react';
import PropTypes from 'prop-types';

import styles from '../sass/Game.module.scss';

function PossibleAnswer({
  id,
  title,
  variantsSwitcher,
  selectAnswer,
  isShowResult,
  correctAnswers,
  answerStyleHandler,
  isAlreadySelected,
}) {
  return (
    <div>
      <button
        disabled={isShowResult || isAlreadySelected(id)}
        type="button"
        className={`
          ${styles.answerBtn} 
          ${answerStyleHandler(id, correctAnswers)}
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
  answerStyleHandler: PropTypes.func.isRequired,
  correctAnswers: PropTypes.arrayOf(PropTypes.number).isRequired,
  isShowResult: PropTypes.bool.isRequired,
  isAlreadySelected: PropTypes.func.isRequired,
};

export default PossibleAnswer;
