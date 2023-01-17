import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EndGameView from './EndGameView';

function EndGame() {
  const navigate = useNavigate();
  const [prize, setPrize] = useState('0');
  const isMillionaire = prize === '1,000,000';

  useEffect(() => {
    const finalPrize = localStorage.getItem('Prize');
    setPrize(finalPrize);
  }, []);

  return (
    <EndGameView
      prize={prize}
      tryAgainHandler={() => navigate('/')}
      isMillionaire={isMillionaire}
    />
  );
}

export default EndGame;
