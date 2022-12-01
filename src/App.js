import StartGame from "./Component/StartGame";
import InputBridgeNumber from "./Component/InputBridgeNumber";
import Game from "./Component/Game";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<StartGame />}></Route>
          <Route path="/input" element={<InputBridgeNumber />}></Route>
          <Route path="/game" element={<Game />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;