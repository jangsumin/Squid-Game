import StartGame from "./Component/StartGame";
import InputBridgeNumber from "./Component/InputBridgeNumber";
import BridgeMaker from "./Component/BridgeMaker";

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