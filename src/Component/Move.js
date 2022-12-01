import answerBridgeMaker from "./answerBridgeMaker";

function Move(props) {
  const answerBridge = answerBridgeMaker.makeAnswerBridge(props.numberOfBridges);
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
      <button className="up-button" onClick={saveUpBridge}>UP!</button>
      <button className="down-button" onClick={saveDownBridge}>DOWN!</button>
    </>
  );
}

export default Move;