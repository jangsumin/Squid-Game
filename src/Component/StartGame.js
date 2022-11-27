import { Link } from 'react-router-dom';

function StartGame() {
  return (
    <Link to="/input" style={{textDecoration: 'none'}}>
      <button className='start-button'>게임 시작!</button>
    </Link>
  );
}

export default StartGame;