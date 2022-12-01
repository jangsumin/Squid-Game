import squid from '../assets/squid.png';

function BridgeMaker(props) {
  const bridgeArray = Array(props.numberOfBridges).fill(0);
  const listBridges = bridgeArray.map((number, idx) => <li key={idx} className="bridge"></li>);

  return (
    <div className="game-space">
      <img className="character" src={squid} alt=""></img>
      <div className='start-line'></div>
      <div>
        <ul className="up-bridge">{listBridges}</ul>
        <ul className="down-bridge">{listBridges}</ul>
      </div>
      <div className="end-line">도착</div>
    </div>
  );
}

export default BridgeMaker;