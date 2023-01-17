import React from 'react';
import PropTypes from 'prop-types';
import Result from './components/Result';
import ProgressTree from './components/ProgressTree';

import styles from './sass/Game.module.scss';
import Button from '../../components/Button/Button';

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
      />
      <ProgressTree
        moneyList={moneyList}
        activePrizeId={activePrizeId}
      />
      {isShowResult && (
        <Button
          onClick={nextQuestionHandler}
          title={isCorrectAnswer ? 'Next' : 'The End'}
          style={styles.nextBtn}
        />
      )}
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
};

export default GameView;
