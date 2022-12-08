import answerBridgeMaker from './answerBridgeMaker';
import squid from '../assets/squid.png';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function Game() {
  // 이전 페이지에서 입력 받은 다리의 길이를 가져오기
  const location = useLocation();
  const bridgeLength = location.state.bridgeLength;

  // 입력 받은 다리의 개수만큼 생성
  const bridgeArray = Array(Number(bridgeLength)).fill(0);
  const listBridges = bridgeArray.map((number, idx) => <li key={idx} className="bridge"></li>);

  // 정답인 다리와 내가 입력할 다리의 배열 생성
  const answerBridge = answerBridgeMaker.makeAnswerBridge(Number(bridgeLength));
  const bridge = [];

  const [squidTop, setSquidTop] = useState(110);
  const [squidLeft, setSquidLeft] = useState(5);

  const clickUpBtn = () => {
    bridge.push(1);
    setSquidTop(45);
    setSquidLeft(squidLeft + 60);
  }

  const clickDownBtn = () => {
    bridge.push(0);
    setSquidTop(185);
    setSquidLeft(squidLeft + 60);
  }

  return (
    <>
      <div className="game-space">
        <img className="character" src={squid} alt="" style={{top: `${squidTop}px`, left: `${squidLeft}px`}}></img>
        <div className='start-line'></div>
        <div>
          <ul className="up-bridge">{listBridges}</ul>
          <ul className="down-bridge">{listBridges}</ul>
        </div>
        <div className="end-line">도착</div>
      </div>
      <div className="button-space">
        <button className="up-button" onClick={clickUpBtn}>UP!</button>
        <button className="down-button" onClick={clickDownBtn}>DOWN!</button>
      </div>
    </>
  );
};

export default Game;