function BridgeMaker(props) {
  const bridgeArray = Array(props.numberOfBridges).fill(0);
  const listBridges = bridgeArray.map((number) => <li className="bridge"></li>);

  return (
    <div className="game-space">
      <div className="character"></div>
      <ul className="up-bridge">{listBridges}</ul>
      <ul className="down-bridge">{listBridges}</ul>
    </div>
  );
}

export default BridgeMaker;