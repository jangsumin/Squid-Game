import { useState } from 'react';
import InputBridgeNumber from './InputBridgeNumber';

function GameController() {
  const [gameStart, setGameStart] = useState(false);

  const startGame = () => {
    setGameStart(true);
  };

  return (
    <>
      {!gameStart ? (
        <button className='start-button' onClick={startGame}>게임 시작!</button>
      ) : (
        <InputBridgeNumber />
      )}
    </>
  );
}

export default GameController;