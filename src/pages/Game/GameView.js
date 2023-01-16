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
  selectedAnswers,
  isShowResult,
  moneyList,
  activePrizeId,
  nextQuestionHandler,
  isCorrectAnswer,
}) {
  return (
    <div className={styles.container}>
      <Result
        questionList={questionList}
        variantsSwitcher={variantsSwitcher}
        activeQuestion={activeQuestion}
        selectAnswer={selectAnswer}
        selectedAnswers={selectedAnswers}
        isShowResult={isShowResult}
      />
      <ProgressTree
        moneyList={moneyList}
        activePrizeId={activePrizeId}
      />
      {isCorrectAnswer && (
        <Button
          onClick={nextQuestionHandler}
          title="Next"
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
  selectedAnswers: PropTypes.arrayOf(PropTypes.number).isRequired,
  isShowResult: PropTypes.bool.isRequired,
  moneyList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  activePrizeId: PropTypes.number.isRequired,
  nextQuestionHandler: PropTypes.func.isRequired,
  isCorrectAnswer: PropTypes.bool.isRequired,
};

export default GameView;
