import { useState } from "react";
import Button from "./Button";
import Board from "./Board";

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  // 주사위 게임 로직 구현
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);
  const [otherNum, setOtherNum] = useState(1);
  const [otherSum, setOtherSum] = useState(0);
  const [OtherGameHistory, setOtherGameHistory] = useState([]);

  const handleRollClick = () => {
    const nextNum = random(6);
    const nextOtherNum = random(6);
    setNum(nextNum);
    setSum(sum + nextNum);
    setGameHistory([...gameHistory, nextNum]);
    setOtherNum(nextOtherNum);
    setOtherSum(otherSum + nextOtherNum);
    setOtherGameHistory([...OtherGameHistory, nextOtherNum]);
  };
  const handleClearClick = () => {
    setNum(1);
    setSum(0);
    setGameHistory([]);
    setOtherNum(1);
    setOtherSum(0);
    setOtherGameHistory([]);
  };

  return (
    <div>
      <h1>주사위 게임</h1>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <div>
        <Board
          name="나"
          color="purple"
          num={num}
          sum={sum}
          gameHistory={gameHistory}
          isLoser={num < otherNum}
        />
        <Board
          name="상대"
          color="red"
          num={otherNum}
          sum={otherSum}
          gameHistory={OtherGameHistory}
          isLoser={otherNum < num}
        />
      </div>
    </div>
  );
}

export default App;
