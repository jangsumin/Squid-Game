import answerBridgeMaker from './answerBridgeMaker';
import squid from '../assets/squid.png';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Game() {
  // 이전 페이지에서 입력 받은 다리의 길이를 가져오기
  const location = useLocation();
  const bridgeLength = location.state.bridgeLength;

  // 입력 받은 다리의 개수만큼 생성
  const bridgeArray = Array(Number(bridgeLength)).fill(0);
  const listBridges = bridgeArray.map((number, idx) => <li key={idx} className="bridge"></li>);

  // 정답인 다리와 내가 입력할 다리의 배열 생성
  // const answerBridge = answerBridgeMaker.makeAnswerBridge(Number(bridgeLength));
  const [answerBridge, setAnswerBridge] = useState(answerBridgeMaker.makeAnswerBridge(Number(bridgeLength)));
  const [bridge, setBridge] = useState([]);

  // 처음 오징어 캐릭터의 시작 위치는 top: 110px 그리고 left: 5px
  const [squidTop, setSquidTop] = useState(110);
  const [squidLeft, setSquidLeft] = useState(5);

  // UP 버튼을 누르면 오징어가 위, 오른쪽으로 이동, 그리고 bridge 업데이트
  const clickUpBtn = () => {
    setBridge([...bridge, 1]);
    setSquidTop(45);
    setSquidLeft(squidLeft + 60);
  }

  // DOWN 버튼을 누르면 오징어가 아래, 오른쪽으로 이동, 그리고 bridge 업데이트
  const clickDownBtn = () => {
    setBridge([...bridge, 0]);
    setSquidTop(185);
    setSquidLeft(squidLeft + 60);
  }

  // bridge 업데이트와 동시에 정답 다리와 비교 
  const compareBridge = (bridge, answer) => {
    if (bridge.length === answer.length) console.log("게임 성공!");
    if (bridge[bridge.length - 1] === answer[bridge.length - 1]) console.log("정답");
    if (bridge[bridge.length - 1] !== answer[bridge.length - 1]) console.log("틀림");
  }

  // useEffect 훅 사용해서 비동기 처리 방지
  const [checkRender, setCheckRender] = useState(false);
  useEffect(() => {
    if (checkRender) {
      // console.log(answerBridge);
      // console.log('업데이트!');
      // console.log(bridge);
      compareBridge(bridge, answerBridge);
    }
    setCheckRender(true);
  }, [bridge]);

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