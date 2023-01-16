import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EndGameView from './EndGameView';

function EndGame() {
  const navigate = useNavigate();
  const [prize, setPrize] = useState('0');

  useEffect(() => {
    const finalPrize = localStorage.getItem('Prize');
    setPrize(finalPrize);
  }, []);

  return (
    <EndGameView prize={prize} tryAgainHandler={() => navigate('/')} />
  );
}

export default EndGame;
