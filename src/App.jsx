import Button from "./Button";
import Dice from "./Dice";

function App() {
  // 주사위 게임 로직 구현
  return (
    <div>
      <h1>주사위 게임</h1>
      <div>
        <Button>던지기</Button>
        <Button>처음부터</Button>
      </div>
      <Dice color="red" num={2} />
    </div>
  );
}

export default App;
