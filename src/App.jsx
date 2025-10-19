import { useState } from "react";
import Button from "./Button";
import Board from "./Board";
import styles from "./App.module.css";
import "./index.css";

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  // 주사위 게임 로직 구현
  const [myHistory, setMyHistory] = useState([]);
  const [OtherHistory, setOtherHistory] = useState([]);

  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setMyHistory([...myHistory, nextMyNum]);
    setOtherHistory([...OtherHistory, nextOtherNum]);
  };
  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  };

  const myNum = myHistory[myHistory.length - 1] || 1;
  const otherNum = OtherHistory[OtherHistory.length - 1] || 1;

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>주사위 게임</h1>
        <Button
          className={styles.button}
          color="purple"
          onClick={handleRollClick}
        >
          던지기
        </Button>
      </div>
      <hr className={styles.divider} />
      <div className={styles.boardContainer}>
        <h2 className={styles.subtitle}>경기 결과</h2>
        <div className={styles.boards}>
          <Board
            name="나"
            color="purple"
            gameHistory={myHistory}
            isLoser={myNum < otherNum}
          />
          <Board
            name="상대"
            color="red"
            gameHistory={OtherHistory}
            isLoser={otherNum < myNum}
          />
        </div>
        <div className={styles.resetButton}>
          <Button color="navy" onClick={handleClearClick}>
            처음부터
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
