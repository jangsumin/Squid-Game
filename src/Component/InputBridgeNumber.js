import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function InputBridgeNumber() {
  const [length, setLength] = useState(0);
  const navigate = useNavigate();

  const saveLength = (e) => {
    setLength(e.currentTarget.value);
  };

  const navigateToGame = () => {
    navigate('/game', {
      state: {
        bridgeLength: length,
      }
    });
  };

  return (
    <form class="input-form">
      <label>
        <input class="input-txt" type="text" name="numberOfBridges" placeholder="5에서 8까지의 숫자를 입력하고" onChange={saveLength}/>
      </label>
      <input class="input-btn" type="submit" value="눌러!" onClick={navigateToGame} />
    </form>
  );
}

export default InputBridgeNumber;