import BridgeMaker from "./BridgeMaker";
import Move from "./Move";
import RetryOrQuit from "./RetryOrQuit";
import { useLocation } from 'react-router-dom';

function Game() {
  const location = useLocation();
  const bridgeLength = location.state.bridgeLength;

  return (
    <>
      <BridgeMaker numberOfBridges={Number(bridgeLength)}/>
      <Move />
      {/* <RetryOrQuit /> */}
    </>
  );
};

export default Game;