import StartGame from "./Component/StartGame";
import InputBridgeNumber from "./Component/InputBridgeNumber";
import BridgeMaker from "./Component/BridgeMaker";
import "./App.css";

function App() {
  return (
    <div>
      <StartGame />
      <InputBridgeNumber />
      <BridgeMaker numberOfBridges={5} />
    </div>
  );
}

export default App;