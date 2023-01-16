import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import GameView from './GameView';
import questionList from '../../mocks/questionList.json';
import moneyList from '../../mocks/moneyList.json';

function Game() {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [isShowResult, setIsShowResult] = useState(false);
  // const [totalPrize, setTotalPrize] = useState(0);
  const [activePrizeId, setActivePrizeId] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const variantsSwitcher = (itemIndex) => {
    switch (itemIndex - 1) {
      case 1:
        return 'B';
      case 2:
        return 'C';
      case 3:
        return 'D';
      default:
        return 'A';
    }
  };

  const selectAnswer = (id, correctAnswers) => {
    const newArray = [...selectedAnswers, id];
    setSelectedAnswers(newArray);
    if (newArray.length === correctAnswers.length) {
      setTimeout(() => {
        const firstArr = [...newArray].sort();
        const secondArr = [...correctAnswers].sort();
        setIsShowResult(true);
        const isEqual = firstArr.every((val, index) => val === secondArr[index]);
        setIsCorrectAnswer(isEqual);
      }, 1000);
    }
  };

  const nextQuestionHandler = () => {
    setActivePrizeId(activePrizeId + 1);
    setActiveQuestion(activeQuestion + 1);
    setIsShowResult(false);
    setIsCorrectAnswer(false);
    setSelectedAnswers([]);
  };

  return (
    <Layout>
      <GameView
        questionList={questionList}
        variantsSwitcher={variantsSwitcher}
        activeQuestion={activeQuestion}
        selectAnswer={selectAnswer}
        selectedAnswers={selectedAnswers}
        isShowResult={isShowResult}
        moneyList={moneyList}
        activePrizeId={activePrizeId}
        setActivePrizeId={setActivePrizeId}
        nextQuestionHandler={nextQuestionHandler}
        isCorrectAnswer={isCorrectAnswer}
      />
    </Layout>
  );
}

export default Game;
