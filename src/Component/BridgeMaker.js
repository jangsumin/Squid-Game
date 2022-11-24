function BridgeMaker(props) {
  const bridgeArray = Array(props.numberOfBridges).fill(0);
  const listBridges = bridgeArray.map((number) => <li className="bridge">bridge</li>);

  return (
    <ul>{listBridges}</ul>
  );
}

export default BridgeMaker;