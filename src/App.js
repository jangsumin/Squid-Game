import StartGame from "./Component/StartGame";
import InputBridgeNumber from "./Component/InputBridgeNumber";
// import BridgeMaker from "./Component/BridgeMaker";
// import Move from "./Component/Move";
import RetryOrQuit from "./Component/RetryOrQuit";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div class="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<StartGame />}></Route>
          <Route path="/input" element={<InputBridgeNumber />}></Route>
          <Route path="/game" element={<RetryOrQuit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;