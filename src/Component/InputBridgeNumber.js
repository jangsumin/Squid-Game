import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function InputBridgeNumber() {
  const [length, setLength] = useState(0);
  const navigate = useNavigate();

  const saveLength = (e) => {
    if (!(e.currentTarget.value >= 5 && e.currentTarget.value <= 8)) {
      alert("5와 8 사이의 숫자만 입력해라!");
      e.currentTarget.value = 5;
    }
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
    <form className="input-form">
      <label>
        <input className="input-txt" type="text" name="numberOfBridges" placeholder="5에서 8까지의 숫자를 입력하고" onChange={saveLength}/>
      </label>
      <input className="input-btn" type="submit" value="눌러!" onClick={navigateToGame} />
    </form>
  );
}

export default InputBridgeNumber;