import React from 'react';
import PropTypes from 'prop-types';
import Result from './components/Result';
import ProgressTree from './components/ProgressTree';

import styles from './sass/Game.module.scss';

function GameView({
  questionList,
  variantsSwitcher,
  activeQuestion,
  selectAnswer,
  isShowResult,
  moneyList,
  activePrizeId,
  nextQuestionHandler,
  isCorrectAnswer,
  answerStyleHandler,
  isAlreadySelected,
}) {
  return (
    <div className={styles.container}>
      <Result
        questionList={questionList}
        variantsSwitcher={variantsSwitcher}
        activeQuestion={activeQuestion}
        selectAnswer={selectAnswer}
        isShowResult={isShowResult}
        answerStyleHandler={answerStyleHandler}
        isAlreadySelected={isAlreadySelected}
        nextQuestionHandler={nextQuestionHandler}
        isCorrectAnswer={isCorrectAnswer}
      />
      <ProgressTree
        moneyList={moneyList}
        activePrizeId={activePrizeId}
      />
    </div>
  );
}

GameView.propTypes = {
  questionList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  variantsSwitcher: PropTypes.func.isRequired,
  activeQuestion: PropTypes.number.isRequired,
  selectAnswer: PropTypes.func.isRequired,
  isShowResult: PropTypes.bool.isRequired,
  moneyList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  activePrizeId: PropTypes.number.isRequired,
  nextQuestionHandler: PropTypes.func.isRequired,
  isCorrectAnswer: PropTypes.bool.isRequired,
  answerStyleHandler: PropTypes.func.isRequired,
  isAlreadySelected: PropTypes.func.isRequired,
};

export default GameView;
