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
  windowWidth,
  burgerHandler,
  isHamburgerOpen,
}) {
  const mobileRender = () => {
    const tabletWidth = 900;
    if (windowWidth < tabletWidth) {
      if (isHamburgerOpen) {
        return (
          <ProgressTree
            moneyList={moneyList}
            activePrizeId={activePrizeId}
            isOpen={isHamburgerOpen}
          />
        );
      } return (
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
      );
    }
    return (
      <>
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
          isOpen={isHamburgerOpen}
        />
      </>
    );
  };

  return (
    <div className={styles.container}>
      <div role="presentation" onClick={burgerHandler} className={styles.hamburger}>
        <div className={styles.burger} />
        <div className={styles.burger} />
        <div className={styles.burger} />
      </div>
      {mobileRender()}
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
  windowWidth: PropTypes.number.isRequired,
  burgerHandler: PropTypes.func.isRequired,
  isHamburgerOpen: PropTypes.bool.isRequired,
};

export default GameView;
