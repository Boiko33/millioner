import React from 'react';
import PropTypes from 'prop-types';
import PossibleAnswer from './PossibleAnswer';

import styles from '../sass/Game.module.scss';

function Result({
  questionList,
  variantsSwitcher,
  activeQuestion,
  selectAnswer,
  selectedAnswer,
  isShowResult,
}) {
  const { question, possibleAnswers, correctAnswerId } = questionList[activeQuestion];
  return (
    <div className={styles.resultContainer}>
      <p className={styles.title}>
        {question}
      </p>
      <div className={styles.answersContainer}>
        {possibleAnswers.map(({ id, title }) => (
          <PossibleAnswer
            key={id}
            variantsSwitcher={variantsSwitcher}
            id={id}
            title={title}
            selectAnswer={selectAnswer}
            selectedAnswer={selectedAnswer}
            isShowResult={isShowResult}
            correctAnswerId={correctAnswerId}
          />
        ))}
      </div>
    </div>
  );
}

Result.propTypes = {
  questionList: PropTypes.arrayOf(PropTypes.shape({
    question: PropTypes.string.isRequired,
    possibleAnswers: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
    })).isRequired,
    correctAnswerId: PropTypes.number.isRequired,
  })).isRequired,
  variantsSwitcher: PropTypes.func.isRequired,
  activeQuestion: PropTypes.number.isRequired,
  selectAnswer: PropTypes.func.isRequired,
  selectedAnswer: PropTypes.number,
  isShowResult: PropTypes.bool.isRequired,
};

Result.defaultProps = {
  selectedAnswer: null,
};

export default Result;
