import answerBridgeMaker from './answerBridgeMaker';
import squid from '../assets/squid.png';
import { useLocation } from 'react-router-dom';

function Game() {
  const location = useLocation();
  const bridgeLength = location.state.bridgeLength;

  const bridgeArray = Array(Number(bridgeLength)).fill(0);
  const listBridges = bridgeArray.map((number, idx) => <li key={idx} className="bridge"></li>);

  const answerBridge = answerBridgeMaker.makeAnswerBridge(Number(bridgeLength));
  const bridge = [];

  const saveUpBridge = () => {
    bridge.push(1);
    console.log(bridge);
  };
  
  const saveDownBridge = () => {
    bridge.push(0);
    console.log(bridge);
  };

  return (
    <>
      <div className="game-space">
        <img className="character" src={squid} alt=""></img>
        <div className='start-line'></div>
        <div>
          <ul className="up-bridge">{listBridges}</ul>
          <ul className="down-bridge">{listBridges}</ul>
        </div>
        <div className="end-line">도착</div>
      </div>
      <div className="button-space">
        <button className="up-button" onClick={saveUpBridge}>UP!</button>
        <button className="down-button" onClick={saveDownBridge}>DOWN!</button>
      </div>
    </>
  );
};

export default Game;