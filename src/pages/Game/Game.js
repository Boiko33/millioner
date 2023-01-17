import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import GameView from './GameView';
import questionList from '../../mocks/questionList.json';
import moneyList from '../../mocks/moneyList.json';
import styles from './sass/Game.module.scss';

function Game() {
  const navigation = useNavigate();
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [isShowResult, setIsShowResult] = useState(false);
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

  const theLastQuestionId = 12;

  const selectAnswer = (id, correctAnswers) => {
    const newArray = [...selectedAnswers, id];
    setSelectedAnswers(newArray);
    if (newArray.length === correctAnswers.length) {
      setTimeout(() => {
        const firstArr = [...newArray].sort();
        const secondArr = [...correctAnswers].sort();
        setIsShowResult(true);
        const isEqual = firstArr.every((val, index) => val === secondArr[index]);
        if (isEqual) {
          setIsCorrectAnswer(true);
          if (activePrizeId === theLastQuestionId) {
            localStorage.setItem('Prize', '1,000,000');
          }
        } else {
          const activePrize = moneyList.find((item) => item.id === activePrizeId - 1);
          localStorage.setItem('Prize', activePrize?.value || '0');
        }
      }, 1000);
    }
  };

  const nextQuestionHandler = () => {
    if (isCorrectAnswer) {
      if (activePrizeId === theLastQuestionId) {
        navigation('/end-game');
      } else {
        setActivePrizeId(activePrizeId + 1);
        setActiveQuestion(activeQuestion + 1);
        setIsShowResult(false);
        setIsCorrectAnswer(false);
        setSelectedAnswers([]);
      }
    } else {
      navigation('/end-game');
    }
  };

  const answerStyleHandler = (id, correctAnswers) => {
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
    <Layout>
      <GameView
        questionList={questionList}
        variantsSwitcher={variantsSwitcher}
        activeQuestion={activeQuestion}
        selectAnswer={selectAnswer}
        isShowResult={isShowResult}
        moneyList={moneyList}
        activePrizeId={activePrizeId}
        setActivePrizeId={setActivePrizeId}
        nextQuestionHandler={nextQuestionHandler}
        isCorrectAnswer={isCorrectAnswer}
        answerStyleHandler={answerStyleHandler}
      />
    </Layout>
  );
}

export default Game;
