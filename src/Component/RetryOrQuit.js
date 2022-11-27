import { useLocation } from 'react-router-dom';

function RetryOrQuit() {
  const location = useLocation();
  const bridgeLength = location.state.bridgeLength;
  
  return (
    <>
      <p>{bridgeLength}</p>
      <button className="retry-button">다시하기</button>
      <button className="quit-button">게임 종료</button>
    </>
  );
}

export default RetryOrQuit;