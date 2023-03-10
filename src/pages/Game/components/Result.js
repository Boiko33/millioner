import React from 'react';
import PropTypes from 'prop-types';
import PossibleAnswer from './PossibleAnswer';
import Button from '../../../components/Button/Button';

import styles from '../sass/Game.module.scss';

function Result({
  questionList,
  variantsSwitcher,
  activeQuestion,
  selectAnswer,
  isShowResult,
  answerStyleHandler,
  isAlreadySelected,
  nextQuestionHandler,
  isCorrectAnswer,
}) {
  const { question, possibleAnswers, correctAnswers } = questionList[activeQuestion];
  return (
    <div className={styles.resultContainer}>
      {isShowResult && (
        <Button
          onClick={nextQuestionHandler}
          title={isCorrectAnswer ? 'Next' : 'The End'}
          style={styles.nextBtn}
        />
      )}
      <p className={styles.title}>
        {question}
      </p>
      <div className={styles.answersContainer}>
        {possibleAnswers.map(({ id, title }) => (
          <PossibleAnswer
            key={`possibleAnswers_${id}`}
            variantsSwitcher={variantsSwitcher}
            id={id}
            title={title}
            selectAnswer={selectAnswer}
            isShowResult={isShowResult}
            correctAnswers={correctAnswers}
            answerStyleHandler={answerStyleHandler}
            isAlreadySelected={isAlreadySelected}
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
    correctAnswers: PropTypes.arrayOf(PropTypes.number).isRequired,
  })).isRequired,
  variantsSwitcher: PropTypes.func.isRequired,
  activeQuestion: PropTypes.number.isRequired,
  selectAnswer: PropTypes.func.isRequired,
  isShowResult: PropTypes.bool.isRequired,
  answerStyleHandler: PropTypes.func.isRequired,
  isAlreadySelected: PropTypes.func.isRequired,
  nextQuestionHandler: PropTypes.func.isRequired,
  isCorrectAnswer: PropTypes.bool.isRequired,
};

export default Result;
